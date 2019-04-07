const express = require("express");
const knex = require("../knex/knex");
const bodyParser = require("body-parser");
const {
  getUserByEmail,
  getUserByUserId,
  getUserIdByEmail,
  insertUser,
  updateUser,
  insertTrip,
  getTripsByUserId,
  getDestinationIdByName,
  getUserIdFriends
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
  updateUser(knex, user).catch(e => next(e));
});

router.post("/insertTrip", (req, res, next) => {
  console.log(req.body);
  const trip = req.body;
  getDestinationIdByName(knex, trip.destinationName)
    .then(result => {
      trip.destinationId = result.destinationId;
      delete trip.destinationName;
      insertTrip(knex, trip).catch(e => next(e));
    })
    .catch(e => next(e));
});

router.get("/getTripsByUserId/:userId", (req, res, next) => {
  const { userId } = req.params;
  getTripsByUserId(knex, userId)
    .then(result => {
      res.send(result);
    })
    .catch(e => next(e));
});

router.get(
  "/getMyFriends/:destinationName/:dateFrom/:dateTo/:userId",
  (req, res, next) => {
    const { destinationName, dateFrom, dateTo, userId } = req.params;
    getUserIdFriends(knex, { destinationName, dateFrom, dateTo, userId })
      .then(result => {
        res.send(result);
      })
      .catch(e => next(e));
  }
);

module.exports = {
  router: router
};
