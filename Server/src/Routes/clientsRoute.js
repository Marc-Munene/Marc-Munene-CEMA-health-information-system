import { Router } from "express";
import {
  addingClients,
  deleteClient,
  editClient,
  getClients,
  getOneClient,
} from "../controllers/clients.js";

const clientsRouter = Router();

clientsRouter
  .route("/clients")
  .get(getClients)
  .post(addingClients)
  .put(editClient)
  .delete(deleteClient);

  // This route is used to get a single client by ID
clientsRouter.route("/clients/single/:id").get(getOneClient);

export { clientsRouter };
