// import { RequestHandler } from "express";
// import { UserModel } from "../models";
// import jwt from "jsonwebtoken";

// export const signup: RequestHandler = async (req, res) => {
//   const { username, email, password, address } = req.body;

//   try {
//     const usercheck = await UserModel.findOne({ email: email });

//     if (usercheck) {
//       return res.status(409).send("User already exists");
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   const user = await UserModel.create({
//     username,
//     email,
//     password,
//     address,
//   });

//   return res.json(user);
// };

// export const login: RequestHandler = async (req, res) => {
//   // res.json({
//   //   message: "Login",
//   // });
//   const { email, password } = req.body;

//   const user = await UserModel.findOne({
//     email,
//     password,
//   });

//   if (!user) {
//     return res.status(401).json({
//       message: "",
//     });
//   }
//   const token = jwt.sign({ email }, "secret");
//   return res.json({ token, message: "amjilttai nevterle" });
// };

import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

export const signup: RequestHandler = async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (user) {
      return res.json({
        message: "Email already registered",
      });
    }

    const createdUser = await UserModel.create({
      username,
      email,
      password,
      address,
    });

    const id = createdUser._id;

    const token = jwt.sign({ id }, "secret-key");

    res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Error in backend",
    });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found , please sign up" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const id = user._id;

    const name = user.username;

    const token = jwt.sign({ id }, "secret-key");

    res.json({ token, name });
  } catch (error) {
    console.log(error, "Sign in error");
  }
};
