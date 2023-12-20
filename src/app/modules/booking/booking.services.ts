import { Schema, model } from "mongoose";
import { BookingModal, IBooking } from "./booking.interface";

// team Schema
export const BookingSchema = new Schema<IBooking, BookingModal>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Mobile",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// Team Model
export const Booking = model<IBooking, BookingModal>("Booking", BookingSchema);
