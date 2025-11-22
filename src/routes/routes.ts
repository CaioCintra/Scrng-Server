import { roomsRoutes } from "./rooms.js";
import { usersRoutes } from "./users.js";

export const registerRoutes = (app: any) => {
  app.register(usersRoutes);
  app.register(roomsRoutes)
};