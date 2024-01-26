import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const FoodModel = model("user", foodSchema);
