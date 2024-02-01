import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Saruul:Pi12739@cluster0.xdbi0wh.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Database connection failed");
  }
};
