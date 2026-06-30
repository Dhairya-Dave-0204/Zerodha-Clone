import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import { ApiError } from "./utils/ApiError.js";

const app = express();
app.set("trust proxy", 1);

const corsOrigin = process.env.CORS_ORIGIN;

if (!corsOrigin) {
  throw new Error("CORS_ORIGIN missing in environment variables");
}

const allowedOrigins = process.env.CORS_ORIGIN.split(",").map((origin) =>
  origin.trim(),
);
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow Postman / server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(compression());
 app.use(helmet());

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Zerodha Clone Backend API",
    version: "1.0.0",
  });
});

import healthRouter from "./routes/healthCheck.route.js";
import holdingsRouter from "./routes/holdings.route.js";
import positionsRouter from "./routes/positions.route.js";
import userRouter from "./routes/user.route.js";

app.use("/api/v1/healthCheck", healthRouter);
app.use("/api/v1/holdings", holdingsRouter);
app.use("/api/v1/positions", positionsRouter);
app.use("/api/v1/user", userRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export { app };
