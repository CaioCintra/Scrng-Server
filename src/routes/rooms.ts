import { z } from "zod";
import type { FastifyInstance } from "fastify";
import { PrismaClient } from "../generated/prisma/default.js";

const prisma = new PrismaClient();

export async function roomsRoutes(app: FastifyInstance) {
  //listar salas por usuário
  app.get("/userRooms/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });
    const { id } = paramsSchema.parse(request.params);
    const rooms = await prisma.room.findMany({
      orderBy: {
        name: "asc",
      },
      where: { ownerId: id },
      include: {
        players: {
          select: {
            id: true,
            name: true,
            points: true,
          },
        },
      },
    });

    return rooms;
  });

  //listar sala por id
  app.get("/rooms/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string(),
    });
    const { id } = paramsSchema.parse(request.params);
    const room = await prisma.room.findUnique({
      where: { id },
      include: {
        players: {
          select: {
            id: true,
            name: true,
            avatar: true,
            points: true,
          },
        },
      },
    });
    if (!room) {
      return reply.status(404).send({ message: "Room not found" });
    }
    return room;
  });

  //criar sala
  app.post("/rooms/:user", async (request, reply) => {
    const paramsSchema = z.object({
      user: z.string().uuid(),
    });
    const { user } = paramsSchema.parse(request.params);
    const createRoomBody = z.object({
      name: z.string(),
    });
    const { name } = createRoomBody.parse(request.body);
    // verificar se o usuário existe
    const owner = await prisma.user.findUnique({ where: { id: user } });
    if (!owner) {
      return reply.status(404).send({ message: "User not found" });
    }
    // impedir criação se o mesmo usuário já tiver uma sala com o mesmo nome
    const existing = await prisma.room.findFirst({
      where: {
        ownerId: user,
        name,
      },
    });
    if (existing) {
      return reply
        .status(409)
        .send({ message: "Room with this name already exists for this user" });
    }

    await prisma.room.create({
      data: {
        name,
        ownerId: user,
      },
    });

    return reply.status(201).send();
  });

  // remover sala
  app.delete("/rooms/:id", async (request, reply) => {
    const deleteRoomParams = z.object({
      id: z.string(),
    });
    const { id } = deleteRoomParams.parse(request.params);
    await prisma.room.delete({
      where: { id },
    });
    return reply.status(204).send();
  });

  // atualizar nome da sala
  app.put("/rooms/:id", async (request, reply) => {
    const updateRoomParams = z.object({
      id: z.string(),
    });
    const { id } = updateRoomParams.parse(request.params);
    const updateRoomBody = z.object({
      name: z.string(),
    });
    const { name } = updateRoomBody.parse(request.body);
    await prisma.room.update({
      where: { id },
      data: { name },
    });
    return reply.status(200).send();
  });

  // adicionar jogador à sala
  app.post("/rooms/:roomId/players", async (request, reply) => {
    const addPlayerParams = z.object({
      roomId: z.string().uuid(),
    });
    const { roomId } = addPlayerParams.parse(request.params);
    const addPlayerBody = z.object({
      playerName: z.string(),
    });
    const { playerName } = addPlayerBody.parse(request.body);

    const room = await prisma.room.findUnique({
      where: { id: roomId },
      include: { _count: { select: { players: true } } },
    });
    if (!room) {
      return reply.status(404).send({ message: "Room not found" });
    }

    if (room._count.players >= room.PlayerLimit) {
      return reply
        .status(409)
        .send({ message: "Room has reached its player limit" });
    }

    const existingPlayer = await prisma.player.findFirst({
      where: { roomId, name: playerName },
    });
    if (existingPlayer) {
      return reply
        .status(409)
        .send({ message: "Player with this name already exists in the room" });
    }

    await prisma.player.create({
      data: { name: playerName, roomId },
    });

    return reply.status(201).send();
  });

  // buscar jogador por id
  app.get("/players/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    const player = await prisma.player.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        points: true,
        avatar: true,
        roomId: true,
        room: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!player) {
      return reply.status(404).send({ message: "Player not found" });
    }

    return player;
  });

  // remover jogador da sala
  app.delete("/rooms/:roomId/players/:playerId", async (request, reply) => {
    const removePlayerParams = z.object({
      roomId: z.string().uuid(),
      playerId: z.string().uuid(),
    });
    const { playerId } = removePlayerParams.parse(request.params);
    await prisma.player.delete({
      where: { id: playerId },
    });
    return reply.status(204).send();
  });

  // atualizar pontos do jogador
  app.put("/rooms/:roomId/players/:playerId/points", async (request, reply) => {
    const updatePointsParams = z.object({
      roomId: z.string().uuid(),
      playerId: z.string().uuid(),
    });
    const { playerId } = updatePointsParams.parse(request.params);
    const updatePointsBody = z.object({
      points: z.number(),
    });
    const { points } = updatePointsBody.parse(request.body);

    if (points === 0) {
      return reply.status(200).send();
    }

    const data =
      points > 0
        ? { points: { increment: points } }
        : { points: { decrement: Math.abs(points) } };

    await prisma.player.update({
      where: { id: playerId },
      data,
    });
    return reply.status(200).send();
  });

  // atualizar pontos a todos os jogadores da sala
  app.put("/rooms/:roomId/players/points", async (request, reply) => {
    const updateAllPointsParams = z.object({
      roomId: z.string().uuid(),
    });
    const { roomId } = updateAllPointsParams.parse(request.params);
    const updateAllPointsBody = z.object({
      points: z.number(),
    });
    const { points } = updateAllPointsBody.parse(request.body);

    if (points === 0) {
      return reply.status(200).send();
    }

    const data =
      points > 0
        ? { points: { increment: points } }
        : { points: { decrement: Math.abs(points) } };

    await prisma.player.updateMany({
      where: { roomId },
      data,
    });
    return reply.status(200).send();
  });

  // atualizar total de pontos do jogador
  app.put(
    "/rooms/:roomId/players/:playerId/totalPoints",
    async (request, reply) => {
      const updatePointsParams = z.object({
        roomId: z.string().uuid(),
        playerId: z.string().uuid(),
      });
      const { playerId } = updatePointsParams.parse(request.params);
      const updatePointsBody = z.object({
        points: z.number(),
      });
      const { points } = updatePointsBody.parse(request.body);
      await prisma.player.update({
        where: { id: playerId },
        data: { points },
      });
      return reply.status(200).send();
    },
  );

  // atualizar total de pontos de todos jogadores da sala
  app.put("/rooms/:roomId/players/totalPoints", async (request, reply) => {
    const updateAllPointsParams = z.object({
      roomId: z.string().uuid(),
    });
    const { roomId } = updateAllPointsParams.parse(request.params);
    const updatePointsBody = z.object({
      points: z.number(),
    });
    const { points } = updatePointsBody.parse(request.body);
    await prisma.player.updateMany({
      where: { roomId },
      data: { points },
    });
    return reply.status(200).send();
  });

  // atualizar dados do jogador (nome e avatar)
  app.put("/players/:id", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      name: z.string().optional(),
      avatar: z.string().optional(),
    });
    const data = bodySchema.parse(request.body);

    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined),
    );

    await prisma.player.update({
      where: { id },
      data: updateData,
    });

    return reply.status(200).send();
  });

  // ler as regras da sala
  app.get("/rooms/:id/settings", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    const room = await prisma.room.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        PlayerLimit: true,
        PlayersCanEditPoints: true,
        PlayersCanEditName: true,
      },
    });

    if (!room) {
      return reply.status(404).send({ message: "Room not found" });
    }

    return room;
  });

  // alterar as regras da sala
  app.put("/rooms/:id/settings", async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      PlayerLimit: z.number().int().min(1).max(999).optional(),
      PlayersCanEditPoints: z.boolean().optional(),
      PlayersCanEditName: z.boolean().optional(),
    });
    const data = bodySchema.parse(request.body);

    const updateData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined),
    );

    if (Object.keys(updateData).length === 0) {
      return reply
        .status(400)
        .send({ message: "No settings provided to update" });
    }

    const room = await prisma.room.findUnique({ where: { id } });
    if (!room) {
      return reply.status(404).send({ message: "Room not found" });
    }

    const updated = await prisma.room.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        PlayerLimit: true,
        PlayersCanEditPoints: true,
        PlayersCanEditName: true,
      },
    });

    return reply.status(200).send(updated);
  });
}
