import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  // const user = await UserModel.findOne({ email });

  // if (!user) {
  //   return res.status(401).json({
  //     message: "User not found ",
  //   });
  // }

  const otpCode = Math.floor(Math.random() * 1000000);

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "bbaagii0830@gmail.com",
        pass: "lqwrtecnlglqaned",
      },
    });
    const mailOptions = {
      from: "bbaagii0830@gmail.com",
      to: email,
      subject: "from Food Delivery",
      text: `One Time Password: ${otpCode}`,
    };
    await transporter.sendMail(mailOptions);
    res.json("Email sent!");
  } catch (error) {
    res.status(500).json(error);
  }
};
