import { Schema, model } from "mongoose";
import { AuthModel, IAuth } from "./auth.interface";

// User Schema
export const AuthSchema = new Schema<IAuth, AuthModel>(
  {
    name: {
      type: String,
      required: [true, " Name Is Required"],
    },

    email: {
      type: String,
      required: [true, "Email Is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Email Is Required"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// User Model
export const Auth = model<IAuth, AuthModel>("Auth", AuthSchema);
