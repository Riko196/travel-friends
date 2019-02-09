const express = require("express");

const cors = require("cors");
const router = express.Router();
const { db } = require("./database");

router.get("/getUser/:email", (req, res) => {
  const { email } = req.params;
  const sql = `SELECT * FROM Users WHERE Users.email = "${email}"`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    const data = {
      exists: result.length !== 0
    };

    res.json(data);
  });
});

router.post("/insertUser/:user", (req, res) => {
  const user = JSON.parse(req.params.user);

  const sql = `INSERT INTO Users(accessToken, name, email)
      VALUES('${user.accessToken}', '${user.name}', '${user.email}')`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    res.status(201).json({ result: "successful" });
  });
});

module.exports = {
  router: router
};
