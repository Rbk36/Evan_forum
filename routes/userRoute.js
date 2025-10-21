const express = require("express");
const router = express.Router();

// importing controller functions
const { register, login, checkUser } = require("../controller/userController");

// register route
router.post("/register", register);
// login route
router.post("/login", login);

// check user route
router.get("/check", checkUser);
module.exports = router;
