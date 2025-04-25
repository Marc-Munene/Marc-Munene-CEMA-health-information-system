import { Router } from "express";
import { addEnrollement, getEnrollment } from "../controllers/enrollment.js";

const enrollmentRouter = Router();

enrollmentRouter.route("/enrollment").get(getEnrollment).post(addEnrollement);

export { enrollmentRouter };
