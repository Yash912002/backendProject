import mongoose, { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User", // The one to who is subscribing
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: "User", // The one to whom "subscriber" is subscribing
    },
  },
  { timestamps: true }
);

export const Subscription = model("Subscription", subscriptionSchema);
