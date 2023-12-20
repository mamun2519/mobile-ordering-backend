import { StatusCodes } from "http-status-codes";
import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import API_Error from "../../../error/apiError";

const createBookingFromDB = async (data: IBooking): Promise<IBooking> => {
  const existBooking = await Booking.findOne({
    product: data.product,
    user: data.user,
  });
  if (existBooking) {
    throw new API_Error(StatusCodes.BAD_REQUEST, "Already product added");
  }

  const booking = await Booking.create(data);
  return booking;
};

const myBookingFromDB = async (userId: string): Promise<IBooking[]> => {
  const myBooking = await Booking.find({ userId }).populate("product");
  return myBooking;
};

const deleteBookingFromDB = async (id: string): Promise<IBooking | null> => {
  console.log(id);
  const booking = await Booking.findOneAndDelete({ _id: id });
  return booking;
};

export const BookingService = {
  createBookingFromDB,
  myBookingFromDB,
  deleteBookingFromDB,
};
