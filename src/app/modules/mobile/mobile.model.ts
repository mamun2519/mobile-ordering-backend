import { Schema, model } from "mongoose";
import { IMobile, MobileModel } from "./mobile.interface";

// User Schema
export const MobileSchema = new Schema<IMobile, MobileModel>(
  {
    name: {
      type: String,
      required: [true, " Name Is Required"],
    },

    release: {
      type: String,
      required: [true, "release Is Required"],
    },
    color: {
      type: String,
      required: [true, "color Is Required"],
    },
    price: {
      type: String,
      required: [true, "price Is Required"],
    },
    url: {
      type: String,
      required: [true, "url Is Required"],
    },
    connectivity: {
      network: {
        type: String,
        required: [true, "network Is Required"],
      },

      SIM: {
        type: String,
        required: [true, "SIM Is Required"],
      },
      bluetooth: {
        type: String,
        required: [true, "bluetooth Is Required"],
      },
      GPS: {
        type: String,
        required: [true, "GPS Is Required"],
      },
      radio: {
        type: String,
        required: [true, "radio Is Required"],
      },
    },
    display: {
      size: {
        type: String,
        required: [true, "size Is Required"],
      },
      resolution: {
        type: String,
        required: [true, "resolution Is Required"],
      },
      technology: {
        type: String,
        required: [true, "technology Is Required"],
      },
    },
    backCamera: {
      resolution: {
        type: String,
        required: [true, "resolution Is Required"],
      },
      features: {
        type: String,
        required: [true, "features Is Required"],
      },
      videoRecording: {
        type: String,
        required: [true, "videoRecording Is Required"],
      },
    },
    frontCamera: {
      resolution: {
        type: String,
        required: [true, "resolution Is Required"],
      },
      features: {
        type: String,
        required: [true, "features Is Required"],
      },
      videoRecording: {
        type: String,
        required: [true, "videoRecording Is Required"],
      },
    },
    body: {
      type: String,
      required: [true, "body Is Required"],
    },
    batteryCapacity: {
      type: String,
      required: [true, "batteryCapacity Is Required"],
    },
    ram: {
      type: String,
      required: [true, "ram Is Required"],
    },
    rom: {
      type: String,
      required: [true, "rom Is Required"],
    },
    processor: {
      type: String,
      required: [true, "processor Is Required"],
    },
    brand: {
      type: String,
      required: [true, "brand Is Required"],
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
export const Mobile = model<IMobile, MobileModel>("Mobile", MobileSchema);
