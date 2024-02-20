import express from "express";

import cors from "cors";

import bodyParser, { json } from "body-parser";
import authRouter from "./routers/auth.router";
import userRouter from "./routers/users.router";
import { authMiddleware } from "./middlewares";
import { BodyParser } from "body-parser";
import emailRouter from "./routers/email.router";
import { sendEmail } from "./controllers/email.controller";
import { connect } from "./database";

const app = express();

connect();

app.use(cors());
app.use(json());
app.use(bodyParser.json());

app.use("/", authRouter);

app.use("/users", userRouter);
app.use("/", sendEmail);

app.use("/email", emailRouter);

export default app;
