import { Router } from "express";
import {
  // addDoctor,
  deleteDoctor,
  editDoctor,
  getDoctors,
  getOneDoctor,
} from "../controllers/doctors.js";

const doctorRouter = Router();

doctorRouter
  .route("/doctors")
  .get(getDoctors)
  // .post(addDoctor) //this route is used to add a doctor to the database
  .put(editDoctor)
  .delete(deleteDoctor);

// This route is used to get a single doctor by ID
doctorRouter.route("/doctors/single/:id").get(getOneDoctor);

export { doctorRouter };
