import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

// ---------- Middlewares ----------
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://127.0.0.1:3000"], // allow both
    credentials: true,
  })
);
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// ---------- Routes ----------
app.get("/", (_, res) => res.send("Travel Agency API ✅"));
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/messages", messageRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// ---------- Connect DB and Start server ----------
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  }
};

startServer();
