import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },            // optional (guest bookings allowed if you want)
  tour: { type: mongoose.Schema.Types.ObjectId, ref: "Tour", required: true },
  date: { type: Date, required: true },
  travelers: { type: Number, default: 1, min: 1 },
  name: { type: String, trim: true },   // contact snapshot
  email: { type: String, trim: true },
  phone: { type: String, trim: true },
  totalAmount: { type: Number, required: true, min: 0 },
  paymentStatus: { type: String, enum: ["unpaid", "paid", "failed"], default: "unpaid" },
  notes: String
}, { timestamps: true });

export default mongoose.model("Booking", bookingSchema);
