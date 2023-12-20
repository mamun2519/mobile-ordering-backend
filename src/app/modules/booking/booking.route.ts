import express from "express";
import { BookingController } from "./booking.controller";
import AuthGard from "../../middleware/auth";

const router = express.Router();
router.post("/", BookingController.createBooking);
router.get("/my-booking", AuthGard(), BookingController.myBooking);
router.delete("/:id", BookingController.deleteBooking);
export const BookingRouters = router;
