// config/db.js
import mongoose from "mongoose";

export async function connectDB(uri) {
  if (!uri) throw new Error("Missing MONGO_URI in environment");

  // Optional: calm down some Mongoose deprecation warnings
  mongoose.set("strictQuery", true);

  // Connect
  await mongoose.connect(uri);

  // Connection events (nice for debugging)
  const { connection } = mongoose;
  console.log(`✅ MongoDB connected: ${connection.host}/${connection.name}`);

  connection.on("error", (err) => {
    console.error("❌ MongoDB error:", err?.message || err);
  });

  // Graceful shutdown
  const shutdown = async (signal) => {
    try {
      console.log(`\n${signal} received. Closing MongoDB connection…`);
      await connection.close();
      console.log("🛑 MongoDB connection closed. Bye!");
      process.exit(0);
    } catch (e) {
      console.error("Error during MongoDB shutdown:", e?.message || e);
      process.exit(1);
    }
  };

  ["SIGINT", "SIGTERM"].forEach((sig) => process.on(sig, () => shutdown(sig)));
}
