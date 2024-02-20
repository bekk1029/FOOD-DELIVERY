import { Router } from "express";
import { login, signup } from "../controllers/auth.controller";
import exp from "constants";

const authRouter = Router();

authRouter.post("/signup", signup).post("/login", login);

export default authRouter;
