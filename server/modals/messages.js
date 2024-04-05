import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: String,
  address: String,
  message: String,
  pan: String,
  adhar: String,
  form_type: String,
});

export const Message = mongoose.model("Message", messageSchema);
