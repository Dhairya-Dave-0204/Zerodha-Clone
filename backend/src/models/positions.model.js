import mongoose, { Schema } from "mongoose";

const positionsSchema = new Schema(
  {
    product: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    average: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    net: {
      type: String,
      required: true,
      trim: true,
    },
    day: {
      type: String,
      required: true,
      trim: true,
    },
    isLoss: {
      type: Boolean,
      required: true,
      trim: true,
    },  
  },
  {
    timestamps: true,
  },
);

export const Position = mongoose.model("Position", positionsSchema);
