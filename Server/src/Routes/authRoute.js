import { Router } from "express";
import { currentDoctor, login, logOut, signUp } from "../controllers/auth.js";
import { doctorAuthentication } from "../middleware/AuthMiddleware.js";

const authRouter = Router();

authRouter.post("/auth/login", login);

authRouter.post("/auth/signup", signUp);

authRouter.get("/auth/me", doctorAuthentication, currentDoctor);

authRouter.delete("/auth/logout", logOut);

export { authRouter };
