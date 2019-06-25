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
  getUserIdFriends,
  getDestinationById,
  getDestinationIdByName,
  getDestinationNameById,
  getAllDestinationsName,
  getMostPopularDestinations,
  getDestinationIdByTripId,
  getReviewsByDestinationId,
  insertReview,
  deleteReview,
  updateReview
} = require("./queries");

const router = express.Router();

/********************** USERS ***********************/

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

router.post("/insertUser", (req, res, next) => {
  const user = req.body;
  insertUser(knex, user)
    .then(inserted => {
      res.send(inserted[0]);
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

/********************** TRIPS ***********************/

router.post("/insertTrip", (req, res, next) => {
  const trip = req.body;
  console.log(trip);
  getDestinationIdByName(knex, trip.destinationName)
    .then(result => {
      trip.destinationId = result.destinationId;
      delete trip.destinationName;
      insertTrip(knex, trip)
        .then(insertedTrip => {
          const emptyReview = {
            userId: insertedTrip[0].userId,
            tripId: insertedTrip[0].tripId,
            reviewText: null,
            rating: null
          };
          console.log("Inserted ", insertedTrip);
          getDestinationById(knex, trip.destinationId).then(destination => {
            insertReview(knex, emptyReview)
              .then(insertedReview => {
                res.send({
                  ...insertedTrip[0],
                  ...destination,
                  ...insertedReview[0]
                });
              })
              .catch(e => next(e));
          });
        })
        .catch(e => next(e));
    })
    .catch(e => next(e));
});

router.delete("/deleteTrip/:tripId", (req, res, next) => {
  const { tripId } = req.params;
  deleteTrip(knex, tripId)
    .then(deletedTrip => {
      deleteReview(knex, tripId)
        .then(deletedReview => {
          res.send({});
        })
        .catch(e => next(e));
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

/********************** FRIENDS ***********************/

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

/********************** DESTINATIONS ***********************/

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
      if (result === null || result === undefined) {
        res.send([]);
      }

      for (let destination of result) {
        destination.reviews = [];
      }

      res.send(result);
    })
    .catch(e => next(e));
});

router.get("/getDestinationIdByTripId/:tripId", (req, res, next) => {
  const { tripId } = req.params;
  getDestinationIdByTripId(knex, tripId)
    .then(result => {
      res.send(result);
    })
    .catch(e => next(e));
});

/********************** REVIEWS ***********************/

router.get("/getReviewsByDestinationId/:destinationId", (req, res, next) => {
  const { destinationId } = req.params;
  getReviewsByDestinationId(knex, destinationId)
    .then(result => {
      res.send(result);
    })
    .catch(e => next(e));
});

router.put("/editReview", (req, res, next) => {
  const { userId, tripId, reviewText, rating } = req.body;
  updateReview(knex, userId, tripId, reviewText, rating)
    .then(statusCode => {
      res.send({});
    })
    .catch(e => next(e));
});

module.exports = {
  router: router
};
