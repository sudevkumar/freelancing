export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJSONWebToken();
  res.status(statusCode).json({
    succsess: true,
    message,
    user,
    token,
  });
};
