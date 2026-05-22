import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";

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

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Connection URL http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed in server file!", err);
  });
