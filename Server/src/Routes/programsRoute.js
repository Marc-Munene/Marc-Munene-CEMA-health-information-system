import { Router } from "express";
import {
  addingPrograms,
  deleteProgram,
  editProgram,
  getOneProgram,
  getPrograms,
} from "../controllers/programs.js";

const programRouter = Router();

programRouter
  .route("/programs")
  .get(getPrograms)
  .post(addingPrograms)
  .put(editProgram)
  .delete(deleteProgram);

  //single program
programRouter.route("/programs/single/:id").get(getOneProgram);

export { programRouter };
