import nodemailer from "nodemailer";
import { RequestHandler } from "express";
export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;
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
      from: "dispositionz30k@gmail.com",
      to: email,
      subject: "Hello, This code",
      text: "882936",
    };
    await transporter.sendMail(mailOptions);
    res.json("Email sent!");
  } catch (error) {
    res.status(500).json(error);
  }
};
