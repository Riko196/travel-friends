const express = require("express");
const knex = require("../knex/knex");
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

router.post("/insertUser/:user", (req, res, next) => {
  const user = JSON.parse(req.params.user);
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

router.put("/updateUser/:user", (req, res, next) => {
  const user = JSON.parse(req.params.user);
  updateUser(knex, user)
    .then(result => {
      res.send({});
    })
    .catch(e => next(e));
});

router.post("/insertTrip/:trip", (req, res, next) => {
  const trip = JSON.parse(req.params.trip);
  insertTrip(knex, trip)
    .then(result => {
      res.send(result);
    })
    .catch(e => next(e));
});

module.exports = {
  router: router
};
