import { z } from "zod";
import type { FastifyInstance } from "fastify";
import { PrismaClient, Prisma } from "../generated/prisma/default.js";

const prisma = new PrismaClient();

class PollError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

function sendPollError(reply: any, err: unknown) {
  if (err instanceof PollError) {
    return reply.status(err.status).send({ message: err.message });
  }
  throw err;
}

const pollInclude = {
  answers: {
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      playerId: true,
      playerName: true,
      text: true,
      ready: true,
      player: { select: { avatar: true } },
    },
  },
} satisfies Prisma.PollInclude;

type PollWithAnswers = Prisma.PollGetPayload<{ include: typeof pollInclude }>;

// as respostas só saem da API depois que o bolão é encerrado; antes disso só quem respondeu
function serializePoll(poll: PollWithAnswers | null, playerId?: string) {
  if (!poll) return null;
  const { answers, ...rest } = poll;
  const revealed = poll.status !== "OPEN";
  const mine = playerId ? answers.find((a) => a.playerId === playerId) : undefined;
  return {
    ...rest,
    answerCount: answers.length,
    answeredPlayerIds: answers.map((a) => a.playerId),
    readyPlayerIds: answers.filter((a) => a.ready).map((a) => a.playerId),
    myAnswer: mine?.text ?? null,
    myReady: mine?.ready ?? false,
    answers: revealed
      ? answers.map(({ player, ...answer }) => ({
          ...answer,
          playerAvatar: player?.avatar ?? null,
        }))
      : [],
  };
}

export async function pollsRoutes(app: FastifyInstance) {
  // bolão atual da sala: aberto ou encerrado e ainda não concluído pelo dono
  app.get("/rooms/:roomId/polls/current", async (request, reply) => {
    const { roomId } = z.object({ roomId: z.string().uuid() }).parse(request.params);
    const { playerId } = z
      .object({ playerId: z.string().uuid().optional() })
      .parse(request.query);

    const room = await prisma.room.findUnique({
      where: { id: roomId },
      select: { id: true },
    });
    if (!room) {
      return reply.status(404).send({ message: "Room not found" });
    }

    const poll = await prisma.poll.findFirst({
      where: { roomId, status: { in: ["OPEN", "CLOSED"] } },
      orderBy: { createdAt: "desc" },
      include: pollInclude,
    });
    return { poll: serializePoll(poll, playerId) };
  });

  // abrir um bolão
  app.post("/rooms/:roomId/polls", async (request, reply) => {
    const { roomId } = z.object({ roomId: z.string().uuid() }).parse(request.params);
    const { question } = z
      .object({ question: z.string().trim().max(120).optional() })
      .parse(request.body ?? {});

    try {
      const poll = await prisma.$transaction(async (tx) => {
        // trava a sala para impedir dois bolões ao mesmo tempo
        const locked = await tx.$queryRaw<{ id: string }[]>`
          SELECT "id" FROM "Room" WHERE "id" = ${roomId} FOR UPDATE`;
        if (locked.length === 0) throw new PollError(404, "Room not found");

        const existing = await tx.poll.findFirst({
          where: { roomId, status: { in: ["OPEN", "CLOSED"] } },
          select: { id: true },
        });
        if (existing) {
          throw new PollError(409, "There is already a poll in progress in this room");
        }

        return tx.poll.create({
          data: { roomId, question: question || null },
          include: pollInclude,
        });
      });
      return reply.status(201).send({ poll: serializePoll(poll) });
    } catch (err) {
      return sendPollError(reply, err);
    }
  });

  // responder (ou trocar a resposta) enquanto o bolão está aberto
  app.post("/rooms/:roomId/polls/:pollId/answers", async (request, reply) => {
    const { roomId, pollId } = z
      .object({ roomId: z.string().uuid(), pollId: z.string().uuid() })
      .parse(request.params);
    const { playerId, text, ready } = z
      .object({
        playerId: z.string().uuid(),
        text: z.string().trim().min(1).max(300),
        ready: z.boolean().default(false),
      })
      .parse(request.body);

    try {
      await prisma.$transaction(async (tx) => {
        const locked = await tx.$queryRaw<{ id: string }[]>`
          SELECT "id" FROM "Poll"
          WHERE "id" = ${pollId} AND "roomId" = ${roomId}
          FOR UPDATE`;
        if (locked.length === 0) throw new PollError(404, "Poll not found");

        const poll = await tx.poll.findUniqueOrThrow({ where: { id: pollId } });
        if (poll.status !== "OPEN") {
          throw new PollError(409, "This poll has already ended");
        }

        const player = await tx.player.findFirst({
          where: { id: playerId, roomId },
          select: { id: true, name: true },
        });
        if (!player) throw new PollError(404, "Player not found in this room");

        await tx.pollAnswer.upsert({
          where: { pollId_playerId: { pollId, playerId } },
          create: { pollId, playerId, playerName: player.name, text, ready },
          update: { text, ready, playerName: player.name },
        });
      });
      return reply.status(201).send({ ok: true, text, ready });
    } catch (err) {
      return sendPollError(reply, err);
    }
  });

  // encerrar o tempo do bolão: a partir daqui as respostas ficam visíveis
  app.post("/rooms/:roomId/polls/:pollId/close", async (request, reply) => {
    const { roomId, pollId } = z
      .object({ roomId: z.string().uuid(), pollId: z.string().uuid() })
      .parse(request.params);

    const closed = await prisma.poll.updateMany({
      where: { id: pollId, roomId, status: "OPEN" },
      data: { status: "CLOSED", closedAt: new Date() },
    });
    if (closed.count === 0) {
      const exists = await prisma.poll.findFirst({
        where: { id: pollId, roomId },
        select: { id: true },
      });
      return reply
        .status(exists ? 409 : 404)
        .send({ message: exists ? "This poll has already ended" : "Poll not found" });
    }

    const poll = await prisma.poll.findUniqueOrThrow({
      where: { id: pollId },
      include: pollInclude,
    });
    return { poll: serializePoll(poll) };
  });

  // concluir o bolão (depois de dar os pontos) ou descartá-lo
  app.post("/rooms/:roomId/polls/:pollId/finish", async (request, reply) => {
    const { roomId, pollId } = z
      .object({ roomId: z.string().uuid(), pollId: z.string().uuid() })
      .parse(request.params);

    const done = await prisma.poll.updateMany({
      where: { id: pollId, roomId, status: { in: ["OPEN", "CLOSED"] } },
      data: { status: "DONE", closedAt: new Date() },
    });
    if (done.count === 0) {
      return reply.status(404).send({ message: "Poll not found" });
    }
    return { poll: null };
  });
}
