import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const getAllFoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

export const createFood: RequestHandler = async (req, res) => {
  const { name, discount, image, ingredient, price } = req.body;
  const food = await FoodModel.create({
    name,
    discount,
    image,
    ingredient,
    price,
  });

  res.json(food);
};
