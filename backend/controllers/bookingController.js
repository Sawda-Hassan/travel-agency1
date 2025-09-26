import Booking from "../models/Booking.js";

export async function createBooking(req, res) {
  try {
    const { tourId, date, travelers, name, email, phone, notes } = req.body;
    const tour = await Tour.findById(tourId);
    if (!tour) return res.status(404).json({ message: "Tour not found" });

    const qty = Number(travelers) || 1;
    const totalAmount = tour.price * qty;

    const booking = await Booking.create({
      tour: tour._id,
      date,
      travelers: qty,
      name, email, phone, notes,
      totalAmount,
      user: req.user?.id || undefined
    });

    res.status(201).json(booking);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

export async function myBookings(req, res) {
  const list = await Booking.find({ user: req.user.id })
    .populate("tour", "title slug image")
    .sort({ createdAt: -1 });
  res.json(list);
}

export async function listAllBookings(req, res) {
  const list = await Booking.find()
    .populate("tour", "title slug")
    .populate("user", "name email")
    .sort({ createdAt: -1 });
  res.json(list);
}
