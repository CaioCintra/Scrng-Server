import fastify from "fastify";
import cors from "@fastify/cors";
import { registerRoutes } from "./routes/routes.js";

const app = fastify();

app.register(cors, {
  origin: ["http://localhost:3000", "https://scrng.vercel.app"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
});


registerRoutes(app);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor executando em http://localhost:3333");
  });