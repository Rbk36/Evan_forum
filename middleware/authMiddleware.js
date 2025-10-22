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
    const data = jwt.verify(authHeader, "secret");
    return res.status(StatusCodes.OK).json({ data });
    // req.user = { userId: data.userId, name: data.name };
    // next();
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Authentication invalid" });
  }
};
module.exports = authMidddleware;
