const mysql2 = require("mysql2");
const db = mysql2.createPool({
  host: "localhost",
  user: "forum",
  password: "1234",
  database: "evangadi_forum",
});

module.exports = db.promise();
