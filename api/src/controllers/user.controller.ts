import { UserModel } from "../models";
import { RequestHandler } from "express";

export const getAllUser: RequestHandler = async (req, res) => {
  const users = await UserModel.find({});
  res.json(users);
};
