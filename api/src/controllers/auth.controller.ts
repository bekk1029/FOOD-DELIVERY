import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

export const signUp: RequestHandler = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await UserModel.create({
    username,
    email,
    password,
  });

  return res.json(user);
};

export const login: RequestHandler = async (req, res) => {
  // res.json({
  //   message: "Login",
  // });
  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email,
    password,
  });

  if (!user) {
    return res.status(401).json({
      message: "",
    });
  }
  const token = jwt.sign({ email }, "secret");
  return res.json({ token, message: "amjilttai nevterle" });
};
