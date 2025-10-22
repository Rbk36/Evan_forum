const mysql2 = require("mysql2");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// import db config
const db = require("./db/dbConfig");

// json middleware
app.use(express.json());

// user routes middleware file
const userRoutes = require("./routes/userRoute");

// user routes middleware
app.use("/api/users", userRoutes);

app.use(cors());
// question routes middleware
// app.use("/api/users", questionRoutes);

// answer routes middleware
async function start() {
  try {
    const result = await db.execute("select 'test' ");
    await app.listen(port);
    console.log("database connected successfully");
    console.log(`Listening on port ${port}`);
  } catch (error) {
    console.error(err.message);
  }
}
start();
