import { roomsRoutes } from "./rooms.js";
import { usersRoutes } from "./users.js";
import { auctionsRoutes } from "./auctions.js";

export const registerRoutes = (app: any) => {
  app.register(usersRoutes);
  app.register(roomsRoutes)
  app.register(auctionsRoutes);
};
