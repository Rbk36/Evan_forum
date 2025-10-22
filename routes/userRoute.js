const express = require("express");
const router = express.Router();

// import auth middleware
const authMiddleware = require("../middleware/authMiddleware");
// importing controller functions
const { register, login, checkUser } = require("../controller/userController");

// register route
router.post("/register", register);
// login route
router.post("/login", login);

// check user route
router.get("/check", authMiddleware, checkUser);
module.exports = router;
