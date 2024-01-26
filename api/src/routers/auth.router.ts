import { Router } from "express";
import { login, signUp } from "../controllers/auth.controller";
import exp from "constants";

const authRouter = Router();

authRouter.post("./signup", signUp).post("./login", login);

export default authRouter;
