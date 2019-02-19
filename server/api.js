const express = require("express");
const knex = require("../knex/knex");
const { getUserByEmail, insertUser, updateUser } = require("./queries");

const router = express.Router();

router.get("/getUser/:email", (req, res, next) => {
  const { email } = req.params;
  getUserByEmail(knex, email)
    .then(result => {
      res.send(result !== undefined);
    })
    .catch(e => next(e));
});

router.post("/insertUser/:user", (req, res, next) => {
  const user = JSON.parse(req.params.user);
  insertUser(knex, user)
    .then(result => {
      console.log(result);
    })
    .catch(e => next(e));
});

router.put("/updateUser/:user", (req, res, next) => {});

module.exports = {
  router: router
};
