const config = require("../config");
const express = require("express");
const app = express();

app.listen(config.port, config.hostname, () => {
  console.log(`Server is running on http://${config.hostname}:${config.port}`);
});
