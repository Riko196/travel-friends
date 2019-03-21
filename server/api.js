const express = require("express");
const knex = require("../knex/knex");
const bodyParser = require("body-parser");
const {
  getUserByEmail,
  getUserIdByEmail,
  insertUser,
  updateUser,
  insertTrip
} = require("./queries");

const router = express.Router();

router.get("/getUser/:email", (req, res, next) => {
  const { email } = req.params;
  getUserByEmail(knex, email)
    .then(result => {
      if (result === undefined) {
        res.send({});
      } else {
        res.send(result);
      }
    })
    .catch(e => next(e));
});

router.post("/logIn", (req, res, next) => {
  const user = req.body;
  getUserByEmail(knex, user.email)
    .then(result => {
      if (result === undefined) {
        insertUser(knex, user)
          .then(inserted => {
            getUserByEmail(knex, user.email)
              .then(userWithId => {
                res.send(userWithId);
              })
              .catch(e => next(e));
          })
          .catch(e => next(e));
      } else {
        res.send(result);
      }
    })
    .catch(e => next(e));
});

router.put("/updateUser", (req, res, next) => {
  const user = req.body;
  updateUser(knex, user)
    .then(result => {
      res.send({});
    })
    .catch(e => next(e));
});

router.post("/insertTrip", (req, res, next) => {
  console.log(req.body);
  const trip = req.body;
  insertTrip(knex, trip)
    .then(result => {
      res.send(result);
    })
    .catch(e => next(e));
});

module.exports = {
  router: router
};
