import { Request, Response } from "express";
import catchAsyncFn from "../../../utils/cathAsynFn";
import { BookingService } from "./booking.services";
import sendApiResponse from "../../../utils/apiResponse";
import { JwtPayload } from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const createBooking = catchAsyncFn(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await BookingService.createBookingFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Booking  successfully",
    data: result,
  });
});

const myBooking = catchAsyncFn(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await BookingService.myBookingFromDB(user.userId as string);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "my Booking Fetch successfully",
    data: result,
  });
});
const deleteBooking = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await BookingService.deleteBookingFromDB(req.params.id);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "deleteBooking successfully",
    data: result,
  });
});

export const BookingController = {
  createBooking,
  myBooking,
  deleteBooking,
};
