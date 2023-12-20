import { Model, Types } from "mongoose";
import { IAuth } from "../auth/auth.interface";
import { IMobile } from "../mobile/mobile.interface";

export type IBooking = {
  user: Types.ObjectId | IAuth;
  product: Types.ObjectId | IMobile;
  quantity: string;
};

export type BookingModal = Model<IBooking, Record<string, unknown>>;
