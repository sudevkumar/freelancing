import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    pan: {
      type: String,
    },
    frontAdhar: {
      type: String,
    },
    backAdhar: {
      type: String,
    },
    form_type: String,
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
