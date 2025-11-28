import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();


const PORT = process.env.PORT || 5001;

app.use(express.json({ limit: "10mb" })); // Base64 verisi için limiti artırın
app.use(express.urlencoded({ limit: "10mb", extended: true })); // İhtiyatlılık için bunu da artırın
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // Allow cookies to be sent
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
  connectDB();
});
