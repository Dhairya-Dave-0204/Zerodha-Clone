import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

let retryCount = 0;
const MAX_RETRIES = 5;

export const connectDB = async () => {
  try {

    const dbName = process.env.DB_NAME;
    const uri = process.env.MONGODB_URI;

    if (!dbName) {
      throw new ApiError(400, "Error in env DB_NAME");
    }

    if (!uri) {
      throw new ApiError(400, "Error in env MONGODB_URI");
    }

    const connectionInstance = await mongoose.connect(
      `${uri.replace(/\/$/, "")}/${dbName}`
    );

    console.log(
      `MongoDB connected: ${connectionInstance.connection.host}`
    );

    retryCount = 0;

  } catch (error) {

    console.error("MongoDB connection failed!");
    console.error(error.message);

    retryCount++;

    if (retryCount > MAX_RETRIES) {

      console.error(
        "Maximum retry attempts reached. Exiting process..."
      );

      process.exit(1);
    }

    console.log(
      `Retrying connection (${retryCount}/${MAX_RETRIES}) in 5 seconds...`
    );

    setTimeout(connectDB, 5000);
  }
};