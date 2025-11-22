import { z } from "zod";
import type { FastifyInstance } from "fastify";
import { PrismaClient } from "../generated/prisma/default.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function usersRoutes(app: FastifyInstance) {
  //listar usuários
  app.get("/users", async () => {
    const users = await prisma.user.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return users.map((user) => ({ id: user.id, name: user.name }));
  });

  //criar usuário
  app.post("/users", async (request, reply) => {
    const createUserBody = z.object({
      name: z.string(),
      password: z.string(),
    });
    const { name, password } = createUserBody.parse(request.body);
    // Impedir criação se já existir usuário com o mesmo nome
    const existing = await prisma.user.findFirst({ where: { name } });
    if (existing) {
      return reply
        .status(409)
        .send({ message: "User with this name already exists" });
    }

    // hash da senha antes de armazenar
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        password: hashedPassword,
      },
    });

    return reply.status(201).send();
  });

  // remover usuário
  app.delete("/users/:id", async (request, reply) => {
    const deleteUserParams = z.object({
      id: z.string().uuid(),
    });
    const { id } = deleteUserParams.parse(request.params);
    // remover jogadores das salas do usuário, depois as salas, depois o usuário
    const rooms = await prisma.room.findMany({ where: { ownerId: id }, select: { id: true } });
    const roomIds = rooms.map((r) => r.id);
    if (roomIds.length > 0) {
      await prisma.player.deleteMany({ where: { roomId: { in: roomIds } } });
      await prisma.room.deleteMany({ where: { id: { in: roomIds } } });
    }

    await prisma.user.delete({ where: { id } });
    return reply.status(204).send();
  });

  // autenticar usuário
  app.post("/users/authenticate", async (request, reply) => {
    const authUserBody = z.object({
      name: z.string(),
      password: z.string(),
    });
    const { name, password } = authUserBody.parse(request.body);
    const user = await prisma.user.findFirst({ where: { name } });
    if (!user) {
      return reply.status(401).send({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return reply.status(401).send({ message: "Invalid credentials" });
    }

    return { id: user.id, name: user.name };
  });
}
