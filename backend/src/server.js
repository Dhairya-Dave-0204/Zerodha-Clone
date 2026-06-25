import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";
import mongoose from "mongoose";
import "./utils/dns.js";

dotenv.config({
  path: "./.env",
});

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION!");
  console.error(err);

  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION!");
  console.error(err);

  process.exit(1);
});

// ==============================
// Database Startup Configuration
// ==============================

const PORT = process.env.PORT || 3000;
const MAX_RETRIES = 5;
const RETRY_DELAY = 5000;

// ==============================
// Start Server
// ==============================

const startServer = async () => {
  let retryCount = 0;

  while (retryCount < MAX_RETRIES) {
    try {
      await connectDB();

      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(`Connection URL http://localhost:${PORT}`);
      });

      return;
    } catch (error) {
      retryCount++;

      console.error(
        `MongoDB connection failed! (${retryCount}/${MAX_RETRIES})`,
      );
      console.error(error.message);

      if (retryCount >= MAX_RETRIES) {
        console.error("Maximum retry attempts reached. Exiting process...");

        process.exit(1);
      }

      console.log(`Retrying connection in ${RETRY_DELAY / 1000} seconds...`);

      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
    }
  }
};

startServer();

// ==============================
// Graceful Shutdown
// ==============================

const gracefulShutdown = async (signal) => {
  console.log(`\n${signal} received. Shutting down server...`);

  try {
    await mongoose.connection.close();

    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error("Error while closing MongoDB connection:");
    console.error(error);
  }

  process.exit(0);
};

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
