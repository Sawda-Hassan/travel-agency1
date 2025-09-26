import { Router } from "express";
import { createBooking, myBookings, listAllBookings } from "../controllers/bookingController.js";
import { protect, requireAdmin } from "../middlwares/Auth.js";

const r = Router();
r.post("/", protect, createBooking);       // create for logged-in user
r.get("/me", protect, myBookings);         // my bookings
r.get("/", protect, requireAdmin, listAllBookings);  // admin

export default r;
