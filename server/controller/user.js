import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/error.js";
import { User } from "../modals/user.js";
import { generateToken } from "../utils/jwt.js";
import cloudinary from "cloudinary";

export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, favourite } = req.body;

  if (!name || !email || !password || !favourite) {
    return next(new ErrorHandler("Please fill the full form!", 400));
  }

  let user = await User.findOne({ email });
  if (user) {
    return next(
      new ErrorHandler("User is already registered! Please login!", 400)
    );
  }

  user = await User.create({
    name,
    email,
    password,
    favourite,
  });

  generateToken(user, "User register successfully!", 200, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please fill the full form!", 400));
  }

  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(
      new ErrorHandler("User is not found! Please register first!", 400)
    );
  }

  const isPassword = await user.comparePassword(password);
  if (!isPassword) {
    return next(new ErrorHandler("Invalid email or password!", 400));
  }
  generateToken(user, `Welcome ${user.name}!`, 200, res);
});

