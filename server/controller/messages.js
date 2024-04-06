import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import cloudinary from "cloudinary";
import { Message } from "../modals/messages.js";

export const createNewMessage = catchAsyncErrors(async (req, res, next) => {
  const { name, address, message, pan, frontAdhar, backAdhar, form_type } =
    req.body;

  if (!name || !address || !message) {
    return next(new ErrorHandler("Please fill the full form!", 400));
  }

  await Message.create({
    name,
    address,
    message,
    pan,
    frontAdhar,
    backAdhar,
    form_type,
  });
  res.status(200).json({
    success: true,
    message: "Message sent successfully!",
  });
});

export const getAllMessage = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});

export const getSingleMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const messages = await Message.findById(id);
  res.status(200).json({
    success: true,
    messages,
  });
});

export const deleteAMessage = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  let message = await Message.findById(id);
  if (!message) {
    return next(new ErrorHandler("Message not found!", 400));
  }

  await message.deleteOne();

  res.status(200).json({
    success: true,
    message: "Message deleted!",
  });
});
