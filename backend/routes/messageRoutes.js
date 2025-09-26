import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// POST /api/messages
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message received. Thank you!" });
  } catch (err) {
    console.error("❌ Error saving message:", err);
    res.status(500).json({ message: "Server error while saving message." });
  }
});

// (optional) GET all messages — for admin
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

export default router;
