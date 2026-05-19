import mongoose from "mongoose";
import "dotenv/config"

export const connectDB = async () => {
  try {
    const dbName = process.env.DB_NAME
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${dbName}`,
    );
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};