import { Schema, model } from "mongoose";
const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  iamge: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredient: {
    type: Number,
    required: true,
  },
});

export const FoodModel = model("food", foodSchema);
