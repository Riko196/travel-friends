const express = require("express");
const knex = require("../knex/knex");
const {
  getUserByEmail,
  getUserByUserId,
  getUserIdByEmail,
  insertUser,
  updateUser,
  insertTrip,
  deleteTrip,
  getTripsByUserId,
  getDestinationById,
  getDestinationIdByName,
  getDestinationNameById,
  getUserIdFriends,
  getAllDestinationsName,
  getMostPopularDestinations
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
  insertUser(knex, user)
    .then(inserted => {
      res.send(inserted[0]);
    })
    .catch(e => next(e));
});

router.put("/updateUser", (req, res, next) => {
  const user = req.body;
  console.log(user)
  updateUser(knex, user)
    .then(result => {
      res.send({});
    })
    .catch(e => next(e));
});

router.post("/insertTrip", (req, res, next) => {
  const trip = req.body;
  getDestinationIdByName(knex, trip.destinationName)
    .then(result => {
      trip.destinationId = result.destinationId;
      delete trip.destinationName;
      insertTrip(knex, trip)
        .then(insertedTrip => {
          getDestinationById(knex, trip.destinationId).then(destination => {
            res.send({ ...insertedTrip[0], ...destination });
          });
        })
        .catch(e => next(e));
    })
    .catch(e => next(e));
});

router.delete("/deleteTrip/:tripId", (req, res, next) => {
  const { tripId } = req.params;
  deleteTrip(knex, tripId)
    .then(result => {
      res.send({});
    })
    .catch(e => next(e));
});

router.get("/getTripsByUserId/:userId", (req, res, next) => {
  const { userId } = req.params;
  getTripsByUserId(knex, userId)
    .then(result => {
      console.log(result);
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

router.get("/getAllDestinationsName", (req, res, next) => {
  getAllDestinationsName(knex)
    .then(result => {
      res.send(result);
    })
    .catch(e => next(e));
});

router.get("/getMostPopularDestinations/:limit", (req, res, next) => {
  const { limit } = req.params;
  getMostPopularDestinations(knex, limit)
    .then(result => {
      res.send(result);
    })
    .catch(e => next(e));
});

module.exports = {
  router: router
};
