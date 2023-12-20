import { Request, Response } from "express";
import catchAsyncFn from "../../../utils/cathAsynFn";
import { MobileService } from "./mobile.services";
import sendApiResponse from "../../../utils/apiResponse";
import { StatusCodes } from "http-status-codes";
import pick from "../../../utils/pick";
import { MobileFilterAbleFiled } from "./mobile.constants";
import { paginationSpeared } from "../../../constants/pagination";

const createMobile = catchAsyncFn(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await MobileService.createMobileFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Mobile create successfully",
    data: result,
  });
});
const getAllMobile = catchAsyncFn(async (req: Request, res: Response) => {
  // search and filter speared

  const filter: any = pick(req.query, MobileFilterAbleFiled);
  console.log(filter);
  // pagination speared
  const pagination = pick(req.query, paginationSpeared);
  const result = await MobileService.getAllMobileFromDB(filter, pagination);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Mobile Retrieve successfully",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleMobileById = catchAsyncFn(
  async (req: Request, res: Response) => {
    const result = await MobileService.getSingleMobileByIdFromDB(req.params.id);
    sendApiResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Mobile Retrieve successfully",
      data: result,
    });
  }
);

const updateMobileById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await MobileService.updateMobileByIdFromDB(
    req.params.id,
    req.body
  );
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Mobile update successfully",
    data: result,
  });
});

const deleteMobileById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await MobileService.deleteMobileByIdFromDB(req.params.id);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Mobile delete successfully",
    data: result,
  });
});

export const MobileController = {
  getAllMobile,
  getSingleMobileById,
  updateMobileById,
  deleteMobileById,
  createMobile,
};
