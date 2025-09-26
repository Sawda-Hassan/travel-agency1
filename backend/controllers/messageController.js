import Message from "../models/message.js";

export async function sendMessage(req, res) {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "name, email, message required" });
    }
    const msg = await Message.create({ name, email, subject, message });
    res.status(201).json({ ok: true, id: msg._id });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

export async function listMessages(req, res) {
  const msgs = await Message.find().sort({ createdAt: -1 });
  res.json(msgs);
}
