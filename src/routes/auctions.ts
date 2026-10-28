import { z } from "zod";
import type { FastifyInstance } from "fastify";
import { PrismaClient, Prisma } from "../generated/prisma/default.js";

const prisma = new PrismaClient();

// duração inicial do leilão e tempo mínimo restante após um lance (segundos)
const AUCTION_DEFAULT_DURATION = 30;
const AUCTION_DEFAULT_BID_RESET = 10;
// por quanto tempo o resultado continua disponível para os jogadores (ms)
const AUCTION_RESULT_WINDOW = 15_000;
const MAX_POINTS = 1_000_000_000;

const auctionInclude = {
  leader: { select: { avatar: true } },
  bids: {
    orderBy: { createdAt: "desc" },
    take: 15,
    select: {
      id: true,
      playerId: true,
      playerName: true,
      amount: true,
      createdAt: true,
      player: { select: { avatar: true } },
    },
  },
  _count: { select: { bids: true } },
} satisfies Prisma.AuctionInclude;

type AuctionWithBids = Prisma.AuctionGetPayload<{ include: typeof auctionInclude }>;

class AuctionError extends Error {
  constructor(
    public status: number,
    message: string,
    public extra: Record<string, unknown> = {},
  ) {
    super(message);
  }
}

function serializeAuction(auction: AuctionWithBids | null) {
  if (!auction) return null;
  const { leader, bids, _count, ...rest } = auction;
  return {
    ...rest,
    leaderAvatar: leader?.avatar ?? null,
    minBid:
      auction.currentBid === null
        ? auction.startingBid
        : auction.currentBid + auction.minIncrement,
    bidCount: _count.bids,
    bids: bids.map(({ player, ...bid }) => ({
      ...bid,
      playerAvatar: player?.avatar ?? null,
    })),
  };
}

// o leilão termina "sozinho": quem consultar depois do prazo grava o resultado
async function settleExpired(
  db: Prisma.TransactionClient | PrismaClient,
  roomId: string,
) {
  const expired = await db.auction.findMany({
    where: { roomId, status: "RUNNING", endsAt: { lte: new Date() } },
    select: { id: true, endsAt: true },
  });
  for (const auction of expired) {
    // o where repete as condições para não sobrescrever um lance que estendeu o prazo
    await db.auction.updateMany({
      where: { id: auction.id, status: "RUNNING", endsAt: { lte: new Date() } },
      data: { status: "FINISHED", finishedAt: auction.endsAt },
    });
  }
}

function sendAuctionError(reply: any, err: unknown) {
  if (err instanceof AuctionError) {
    return reply.status(err.status).send({ message: err.message, ...err.extra });
  }
  throw err;
}

export async function auctionsRoutes(app: FastifyInstance) {
  // leilão atual da sala (em andamento ou encerrado há pouco)
  app.get("/rooms/:roomId/auctions/current", async (request, reply) => {
    const paramsSchema = z.object({
      roomId: z.string().uuid(),
    });
    const { roomId } = paramsSchema.parse(request.params);

    const room = await prisma.room.findUnique({
      where: { id: roomId },
      select: { id: true },
    });
    if (!room) {
      return reply.status(404).send({ message: "Room not found" });
    }

    await settleExpired(prisma, roomId);

    const auction = await prisma.auction.findFirst({
      where: {
        roomId,
        OR: [
          { status: "RUNNING" },
          { finishedAt: { gte: new Date(Date.now() - AUCTION_RESULT_WINDOW) } },
        ],
      },
      orderBy: { createdAt: "desc" },
      include: auctionInclude,
    });

    // serverNow permite que o cliente corrija a diferença de relógio no timer
    return { serverNow: Date.now(), auction: serializeAuction(auction) };
  });

  // abrir um leilão na sala
  app.post("/rooms/:roomId/auctions", async (request, reply) => {
    const paramsSchema = z.object({
      roomId: z.string().uuid(),
    });
    const bodySchema = z.object({
      item: z.string().trim().max(60).optional(),
      startingBid: z.number().int().min(1).max(MAX_POINTS),
      minIncrement: z.number().int().min(1).max(MAX_POINTS).optional(),
      durationSeconds: z.number().int().min(5).max(3600).optional(),
      bidResetSeconds: z.number().int().min(1).max(3600).optional(),
    });
    const { roomId } = paramsSchema.parse(request.params);
    const { item, startingBid, minIncrement, durationSeconds, bidResetSeconds } =
      bodySchema.parse(request.body);
    const duration = durationSeconds ?? AUCTION_DEFAULT_DURATION;
    const bidReset = bidResetSeconds ?? AUCTION_DEFAULT_BID_RESET;

    try {
      const auction = await prisma.$transaction(async (tx) => {
        // trava a sala para impedir dois leilões abertos ao mesmo tempo
        const locked = await tx.$queryRaw<{ id: string }[]>`
          SELECT "id" FROM "Room" WHERE "id" = ${roomId} FOR UPDATE`;
        if (locked.length === 0) {
          throw new AuctionError(404, "Room not found");
        }

        await settleExpired(tx, roomId);

        const running = await tx.auction.findFirst({
          where: { roomId, status: "RUNNING" },
          select: { id: true },
        });
        if (running) {
          throw new AuctionError(409, "There is already an auction running in this room");
        }

        return tx.auction.create({
          data: {
            roomId,
            item: item || null,
            startingBid,
            minIncrement: minIncrement ?? 1,
            durationSeconds: duration,
            bidResetSeconds: bidReset,
            endsAt: new Date(Date.now() + duration * 1000),
          },
          include: auctionInclude,
        });
      });

      return reply
        .status(201)
        .send({ serverNow: Date.now(), auction: serializeAuction(auction) });
    } catch (err) {
      return sendAuctionError(reply, err);
    }
  });

  // dar um lance: os pontos do jogador ficam reservados até ele ser superado
  app.post("/rooms/:roomId/auctions/:auctionId/bids", async (request, reply) => {
    const paramsSchema = z.object({
      roomId: z.string().uuid(),
      auctionId: z.string().uuid(),
    });
    const bodySchema = z.object({
      playerId: z.string().uuid(),
      amount: z.number().int().min(1).max(MAX_POINTS),
    });
    const { roomId, auctionId } = paramsSchema.parse(request.params);
    const { playerId, amount } = bodySchema.parse(request.body);

    try {
      const auction = await prisma.$transaction(async (tx) => {
        // trava o leilão para que lances simultâneos sejam processados em fila
        const locked = await tx.$queryRaw<{ id: string }[]>`
          SELECT "id" FROM "Auction"
          WHERE "id" = ${auctionId} AND "roomId" = ${roomId}
          FOR UPDATE`;
        if (locked.length === 0) {
          throw new AuctionError(404, "Auction not found");
        }

        const current = await tx.auction.findUniqueOrThrow({
          where: { id: auctionId },
        });
        const now = Date.now();
        if (current.status !== "RUNNING" || current.endsAt.getTime() <= now) {
          throw new AuctionError(409, "This auction has already ended");
        }

        const player = await tx.player.findFirst({
          where: { id: playerId, roomId },
          select: { id: true, name: true },
        });
        if (!player) {
          throw new AuctionError(404, "Player not found in this room");
        }

        if (current.leaderId === player.id) {
          throw new AuctionError(409, "You are already winning this auction");
        }

        const minBid =
          current.currentBid === null
            ? current.startingBid
            : current.currentBid + current.minIncrement;
        if (amount < minBid) {
          throw new AuctionError(409, "Bid is too low", { minBid });
        }

        // desconta só se o jogador tiver saldo, sem depender de leitura anterior
        const charged = await tx.player.updateMany({
          where: { id: player.id, points: { gte: amount } },
          data: { points: { decrement: amount } },
        });
        if (charged.count === 0) {
          throw new AuctionError(409, "Not enough points for this bid");
        }

        // devolve os pontos de quem estava ganhando
        if (current.leaderId && current.currentBid !== null) {
          await tx.player.updateMany({
            where: { id: current.leaderId },
            data: { points: { increment: current.currentBid } },
          });
        }

        await tx.auctionBid.create({
          data: { auctionId, playerId: player.id, playerName: player.name, amount },
        });

        // o tempo volta para bidResetSeconds apenas se estava abaixo disso
        const resetAt = now + current.bidResetSeconds * 1000;
        const endsAt =
          current.endsAt.getTime() < resetAt ? new Date(resetAt) : current.endsAt;

        return tx.auction.update({
          where: { id: auctionId },
          data: {
            currentBid: amount,
            leaderId: player.id,
            leaderName: player.name,
            endsAt,
          },
          include: auctionInclude,
        });
      });

      return reply
        .status(201)
        .send({ serverNow: Date.now(), auction: serializeAuction(auction) });
    } catch (err) {
      return sendAuctionError(reply, err);
    }
  });

  // cancelar o leilão em andamento e devolver os pontos de quem estava ganhando
  app.post("/rooms/:roomId/auctions/:auctionId/cancel", async (request, reply) => {
    const paramsSchema = z.object({
      roomId: z.string().uuid(),
      auctionId: z.string().uuid(),
    });
    const { roomId, auctionId } = paramsSchema.parse(request.params);

    try {
      const auction = await prisma.$transaction(async (tx) => {
        const locked = await tx.$queryRaw<{ id: string }[]>`
          SELECT "id" FROM "Auction"
          WHERE "id" = ${auctionId} AND "roomId" = ${roomId}
          FOR UPDATE`;
        if (locked.length === 0) {
          throw new AuctionError(404, "Auction not found");
        }

        const current = await tx.auction.findUniqueOrThrow({
          where: { id: auctionId },
        });
        if (current.status !== "RUNNING" || current.endsAt.getTime() <= Date.now()) {
          throw new AuctionError(409, "This auction has already ended");
        }

        if (current.leaderId && current.currentBid !== null) {
          await tx.player.updateMany({
            where: { id: current.leaderId },
            data: { points: { increment: current.currentBid } },
          });
        }

        return tx.auction.update({
          where: { id: auctionId },
          data: { status: "CANCELLED", finishedAt: new Date() },
          include: auctionInclude,
        });
      });

      return { serverNow: Date.now(), auction: serializeAuction(auction) };
    } catch (err) {
      return sendAuctionError(reply, err);
    }
  });
}
