import { Model } from "mongoose";
// user interface
export type IAuth = {
  name: string;

  email: string;

  password: string;
};
export type AuthModel = Model<IAuth, Record<string, unknown>>;

export type IPasswordChange = {
  email: string;
  newPassword: string;
};
