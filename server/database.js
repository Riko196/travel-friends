const mysql = require("mysql");
const config = require("../config");

const db = mysql.createConnection({
  host: config.hostname,
  user: config.user,
  database: config.database
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected!");
});

module.exports = {
  db: db
};
