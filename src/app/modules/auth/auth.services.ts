import { StatusCodes } from "http-status-codes";

import { jwtHelpers } from "../../../utils/jwtToken";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import { IAuth, IPasswordChange } from "./auth.interface";
import { Auth } from "./auth.model";
import API_Error from "../../../error/apiError";

export const signUpUserFromDB = async (
  data: IAuth
): Promise<{ user: IAuth; accessToken: string }> => {
  const isExistUser = await Auth.findOne({ email: data.email });
  if (isExistUser) {
    throw new API_Error(StatusCodes.BAD_REQUEST, "User Already exist");
  }
  const createUser = await Auth.create(data);
  // generate access token
  const accessToken = jwtHelpers.createToken(
    { userId: createUser._id },
    config.jwt.secret_token as Secret,
    config.jwt.expire_in as string
  );
  return {
    user: createUser,
    accessToken,
  };
};
export const loginUserFromDb = async (
  data: IAuth
): Promise<{ user: IAuth; accessToken: string }> => {
  const isExistUser = await Auth.findOne({ email: data.email });
  if (!isExistUser) {
    throw new API_Error(StatusCodes.BAD_REQUEST, "User Not Found");
  }
  if (isExistUser.password !== data.password) {
    throw new API_Error(StatusCodes.BAD_REQUEST, "Password Incorrect");
  }
  // generate access token
  const accessToken = jwtHelpers.createToken(
    { userId: isExistUser._id },
    config.jwt.secret_token as Secret,
    config.jwt.expire_in as string
  );
  return {
    user: isExistUser,
    accessToken,
  };
};
export const forgetPasswordFromDB = async (
  data: IPasswordChange
): Promise<{ message: string }> => {
  console.log(data);
  const isExistUser = await Auth.findOne({ email: data.email });
  console.log(isExistUser);
  if (!isExistUser) {
    throw new API_Error(StatusCodes.BAD_REQUEST, "User Not Found");
  }
  const updatedUser = await Auth.updateOne(
    { email: isExistUser.email },
    { password: data.newPassword },
    {
      new: true,
    }
  );

  return {
    message: "Updated Success",
  };
};

export const AuthService = {
  signUpUserFromDB,
  loginUserFromDb,
  forgetPasswordFromDB,
};
