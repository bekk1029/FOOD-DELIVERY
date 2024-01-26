import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("");
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Database connection failed");
  }
};
