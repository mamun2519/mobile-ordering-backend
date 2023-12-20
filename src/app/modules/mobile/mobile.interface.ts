import { Model } from "mongoose";
// user interface
export type IMobile = {
  name: string;
  release: string;
  color: string;
  price: string;
  url: string;
  connectivity: {
    network: string;
    SIM: string;
    bluetooth: string;
    GPS: string;
    radio: string;
  };
  body: {
    size: string;
    resolution: string;
    technology: string;
  };
  backCamera: {
    resolution: string;
    features: string;
    videoRecording: string;
  };
  frontCamera: {
    resolution: string;
    features: string;
    videoRecording: string;
  };
  batteryCapacity: string;
  ram: number;
  rom: number;
  processor: string;
  brand: string;
  security: {
    fingerprint: string;
    FaceUnlock: string;
  };
};
export type MobileModel = Model<IMobile, Record<string, unknown>>;

export type IMobileFilters = {
  searchTerm: string;
  price: string;
  ram: string;
  rom: string;
  brand: string;
  batteryCapacity: string;
  color: string;
};
