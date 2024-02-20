import { RequestHandler } from "express";

import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendOTP: RequestHandler = async (req, res) => {
  const { email } = req.body;

  try {
    // if (!email) {
    //   return res.json({ message: "Email not found" });
    // }

    const user = UserModel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({
        message: "User not found , Please sign in",
      });
    }

    const Otp = Math.floor(100000 + Math.random() * 900000);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      secure: true,
      port: 465,

      auth: {
        user: "bbaagii0830@gmail.com",
        pass: "lqwrtecnlglqaned",
      },
    });

    const mailOptions = {
      from: "bbaagii0830@gmail.com",
      to: email,
      subject: "Email verification one time code",
      text: `Your one time code is ${Otp}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Email sent", otp: Otp });
  } catch (error) {
    res.json({ message: error });
  }
};
