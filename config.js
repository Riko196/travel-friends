require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT
};
