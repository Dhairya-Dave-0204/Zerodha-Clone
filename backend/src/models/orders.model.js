import mongoose, { Schema } from "mongoose";

const ordersSchema = new Schema(
  {
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
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    mode: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export const Order = mongoose.model("Order", ordersSchema);
