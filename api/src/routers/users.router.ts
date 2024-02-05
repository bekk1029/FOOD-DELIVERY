import { Router } from "express";
import { getAllUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getAllUser);

export default userRouter;
