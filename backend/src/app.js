import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApiError } from "./utils/ApiError.js";

const app = express();

const corsOrigin = process.env.CORS_ORIGIN;

if (!corsOrigin) {
  throw new Error("CORS_ORIGIN missing in environment variables");
}

app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello");
});

import healthRouter from "./routes/healthCheck.route.js";
import holdingsRouter from "./routes/holdings.route.js";
import positionsRouter from "./routes/positions.route.js";
import userRouter from "./routes/user.route.js";

app.use("/api/v1/healthCheck", healthRouter);
app.use("/api/v1/holdings", holdingsRouter);
app.use("/api/v1/positions", positionsRouter);
app.use("/api/v1/user", userRouter);

export { app };
