import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    profilePic: String,
    password: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

export const UserModel = model("user", userSchema);
