import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

export const connectDB = async () => {
  const dbName = process.env.DB_NAME;
  const uri = process.env.MONGODB_URI;

  if (!dbName) {
    throw new ApiError(500, "Error in env DB_NAME");
  }

  if (!uri) {
    throw new ApiError(500, "Error in env MONGODB_URI");
  }

  const connectionInstance = await mongoose.connect(
    `${uri.replace(/\/$/, "")}/${dbName}`,
  );

  console.log(`MongoDB connected: ${connectionInstance.connection.host}`);

  return connectionInstance;
};
