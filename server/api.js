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
  getUserIdFriendsWithDate,
  getUserIdFriendsWithPlanned,
  getDestinationByDestinationId,
  getDestinationIdByName,
  getDestinationNameById,
  getAllDestinationsName,
  getTheMostPopularDestinations,
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

router.get("/getUserByUserId/:userId", (req, res, next) => {
  const { userId } = req.params;
  getUserByUserId(knex, userId)
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
          getDestinationByDestinationId(knex, trip.destinationId).then(
            destination => {
              if (insertedTrip[0].planned === false) {
                insertReview(knex, emptyReview)
                  .then(insertedReview => {
                    res.send({
                      ...insertedTrip[0],
                      ...destination,
                      ...insertedReview[0]
                    });
                  })
                  .catch(e => next(e));
              } else
                res.send({
                  ...insertedTrip[0],
                  ...destination
                });
            }
          );
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
          return res.send({});
        })
        .catch(e => next(e));
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

/********************** FRIENDS ***********************/

router.get(
  "/getMyFriends/:destinationName/:dateFrom/:dateTo/:userId/:gender",
  (req, res, next) => {
    const { destinationName, dateFrom, dateTo, userId, gender } = req.params;

    getUserIdFriendsWithDate(knex, {
      destinationName,
      dateFrom,
      dateTo,
      userId,
      gender
    })
      .then(friendsWithDate => {
        getUserIdFriendsWithPlanned(knex, { destinationName, userId }).then(
          friendsWithPlanned => {
            res.send({
              friendsWithPlanned: friendsWithPlanned,
              friendsWithDate: friendsWithDate
            });
          }
        );
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

router.get("/getTheMostPopularDestinations/:limit", async (req, res, next) => {
  const { limit } = req.params;

  try {
    const theMostPopularDestinations = await getTheMostPopularDestinations(
      knex,
      limit
    );

    if (
      theMostPopularDestinations === null ||
      theMostPopularDestinations === undefined
    ) {
      res.send([]);
    }

    for (let destination of theMostPopularDestinations) {
      const reviews = await getReviewsByDestinationId(
        knex,
        destination.destinationId
      );
      destination.reviews = reviews;
      if (reviews === null || reviews === undefined) {
        destination.reviews = [];
      }
    }

    res.send(theMostPopularDestinations);
  } catch (e) {
    next(e);
  }
});

router.get("/getDestinationIdByTripId/:tripId", (req, res, next) => {
  const { tripId } = req.params;
  getDestinationIdByTripId(knex, tripId)
    .then(result => {
      res.send(result);
    })
    .catch(e => next(e));
});

router.get(
  "/getDestinationByDestinationId/:destinationId",
  (req, res, next) => {
    const { destinationId } = req.params;
    getDestinationByDestinationId(knex, destinationId)
      .then(destination => {
        getReviewsByDestinationId(knex, destinationId)
          .then(reviews => {
            res.send({ ...destination, reviews: reviews });
          })
          .catch(e => next(e));
      })
      .catch(e => next(e));
  }
);

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
