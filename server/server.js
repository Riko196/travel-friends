const express = require("express");
const config = require("../config");
const api = require("./api");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api.router);

app.listen(config.port, config.host, () => {
  console.log(`Server is running on http://${config.host}:${config.port}`);
});
