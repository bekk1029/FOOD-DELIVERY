import express from "express";

import cors from "cors";

import bodyParser, { json } from "body-parser";
import authRouter from "./routers/auth.router";
import userRouter from "./routers/users.router";
import emailRouter from "./routers/email.router";
import passwordRouter from "./routers/password.router";
import { connect } from "./database";

const app = express();

connect();

app.use(cors());
app.use(json());
app.use(bodyParser.json());

app.use("/", authRouter);

app.use("/users", userRouter);

app.use("/email", emailRouter);
app.use("/email", passwordRouter);

export default app;
