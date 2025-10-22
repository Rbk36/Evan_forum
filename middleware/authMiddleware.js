const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const authMidddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Authentication invalid" });
  }
  try {
    // const token = authHeader.split(" ")[1];
    const { username, userid } = jwt.verify(authHeader, "secret");
    next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Authentication invalid" });
  }
};
module.exports = authMidddleware;
