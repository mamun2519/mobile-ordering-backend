import { SortOrder } from "mongoose";
import { IPaginationOptions } from "../../../interface/pagination";

import { IGenericResponse } from "../../../interface/common";
import { IMobile, IMobileFilters } from "./mobile.interface";

import { PaginationHelper } from "../../../utils/pagination";
import { MobileSearchAbleFiled } from "./mobile.constants";
import { Mobile } from "./mobile.model";

const createMobileFromDB = async (data: IMobile): Promise<IMobile> => {
  const mobile = await Mobile.create(data);
  return mobile;
};

const getAllMobileFromDB = async (
  filter: IMobileFilters,
  pagination: IPaginationOptions
): Promise<IGenericResponse<any>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelper.calculatePagination(pagination);
  const { searchTerm, ...filtersData } = filter;

  console.log("filterData", filtersData);
  const andConditions = [];
  // Searching
  if (searchTerm) {
    andConditions.push({
      $or: MobileSearchAbleFiled.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  // FILTERING
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filter).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  console.log(andConditions[0]);
  // Sorting
  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  // where conditions
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const mobile = await Mobile.find(whereConditions).skip(skip).limit(limit);
  const total = await Mobile.countDocuments(whereConditions);
  const BrandCategory = await Mobile.distinct("brand");
  const ramCategory = await Mobile.distinct("ram");
  const romCategory = await Mobile.distinct("rom");
  const colorCategory = await Mobile.distinct("color");
  const batteryCategory = await Mobile.distinct("batteryCapacity");
  const brand = BrandCategory.map((title: string) => {
    return {
      title,
    };
  });
  const ram = ramCategory.map((title: string) => {
    return {
      title,
    };
  });

  const rom = romCategory.map((title: string) => {
    return {
      title,
    };
  });

  const color = colorCategory.map((title: string) => {
    return {
      title,
    };
  });
  const battery = batteryCategory.map((title: string) => {
    return {
      title,
    };
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: {
      mobile,
      brand,
      ram,
      rom,
      color,
      battery,
    },
  };
};
const getSingleMobileByIdFromDB = async (
  id: string
): Promise<IMobile | null> => {
  const mobile = await Mobile.findById(id);
  return mobile;
};
const updateMobileByIdFromDB = async (
  id: string,
  payload: Partial<IMobile>
): Promise<IMobile | null> => {
  const mobile = await Mobile.findByIdAndUpdate(id, payload, { new: true });
  return mobile;
};

const deleteMobileByIdFromDB = async (id: string): Promise<IMobile | null> => {
  return await Mobile.findOneAndDelete({ _id: id });
};
export const MobileService = {
  createMobileFromDB,
  getAllMobileFromDB,
  getSingleMobileByIdFromDB,
  updateMobileByIdFromDB,
  deleteMobileByIdFromDB,
};
