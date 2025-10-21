// import db connection
const db = require("../db/dbConfig");

const register = async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body || {};
  if (!username || !password || !email || !firstname || !lastname) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {
    await db.query(
      "INSERT INTO users (username,firstname, lastname, email,password ) VALUES (?,?,?,?,?)",
      [username, firstname, lastname, email, password]
    );
    return res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: "Something went wrong,try later" });
  }
};
const login = async (req, res) => {
  res.send("login user");
};

const checkUser = async (req, res) => {
  res.send("check user");
};

module.exports = { register, login, checkUser };
