const mysql2 = require("mysql2");
const db = mysql2.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit:10
});

module.exports = db.promise();
