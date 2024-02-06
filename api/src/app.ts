import express from "express";

import cors from "cors";

import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import userRouter from "./routers/users.router";
import { authMiddleware } from "./middlewares";
import emailRouter from "./routers/email.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);

app.use("/users", userRouter);

app.use("/email", emailRouter);

export default app;
