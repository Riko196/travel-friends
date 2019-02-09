const express = require("express");
const config = require("../config");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const api = require("./api");

app.use("/api", api.router);

app.listen(config.port, config.hostname, () => {
  console.log(`Server is running on http://${config.hostname}:${config.port}`);
});
