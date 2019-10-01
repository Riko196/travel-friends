const express = require("express");
const knex = require("../knex/knex");
const {
  getUserByEmail,
  getUserByUserId,
  insertUser,
  updateUser,
  insertTrip,
  deleteTrip,
  getPlannedTripsByUserId,
  getUnplannedTripsByUserId,
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
const multer = require("multer");
const { authenticated, facebookAuthenticated } = require("./authentication");

const router = express.Router();

/********************** USERS ***********************/

router.get("/getUser/:email", async (req, res, next) => {
  const { email } = req.params;
  const response = await facebookAuthenticated(req, email);
  if (response.status !== 200) {
    return res.send(response);
  }

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

router.post("/insertUser", async (req, res, next) => {
  const user = req.body;
  const response = await facebookAuthenticated(req, user.email);

  if (response.status !== 200) {
    return res.send(response);
  }

  user.token = req.headers["facebooktoken"];
  insertUser(knex, user)
    .then(inserted => {
      res.send(inserted[0]);
    })
    .catch(e => next(e));
});

router.put("/updateUser", (req, res, next) => {
  const user = req.body;
  const token = req.headers["token"];
  if (!authenticated(token, user.userId)) {
    return res.send({ message: "Unauthorized" });
  }
  updateUser(knex, user)
    .then(result => {
      res.send({});
    })
    .catch(e => next(e));
});

/********************** TRIPS ***********************/

router.post("/insertTrip", (req, res, next) => {
  const trip = req.body;
  const token = req.headers["token"];
  if (!authenticated(token, trip.userId)) {
    return res.send({ message: "Unauthorized" });
  }
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
  const userId = req.headers["userId"];
  const token = req.headers["token"];
  if (!authenticated(token, userId)) {
    return res.send({ message: "Unauthorized" });
  }
  deleteTrip(knex, tripId)
    .then(deletedTrip => {
      if (deleteTrip.planned === false) {
        deleteReview(knex, tripId)
          .then(deletedReview => {
            return res.send({});
          })
          .catch(e => next(e));
      } else return res.send({});
    })
    .catch(e => next(e));
});

router.get("/getTripsByUserId/:userId", (req, res, next) => {
  const { userId } = req.params;
  getUnplannedTripsByUserId(knex, userId)
    .then(unplannedTrips => {
      getPlannedTripsByUserId(knex, userId).then(plannedTrips => {
        res.send(unplannedTrips.concat(plannedTrips));
      });
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
        getUserIdFriendsWithPlanned(knex, { destinationName, userId, gender })
          .then(friendsWithPlanned => {
            res.send({
              friendsWithPlanned: friendsWithPlanned,
              friendsWithDate: friendsWithDate
            });
          })
          .catch(e => next(e));
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
  const token = req.headers["token"];
  if (!authenticated(token, userId)) {
    return res.send({ message: "Unauthorized" });
  }
  updateReview(knex, userId, tripId, reviewText, rating)
    .then(statusCode => {
      res.send({});
    })
    .catch(e => next(e));
});

/************************* FILE UPLOAD ********************/

router.post("/upload", (req, res) => {
  const { userId } = req.body;
  const token = req.headers["token"];
  if (!authenticated(token, userId)) {
    return res.send({ message: "Unauthorized" });
  }
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../src/images/profilePhotos");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });

  const upload = multer({ storage: storage }).single("blob");

  upload(req, res, err => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

module.exports = {
  router: router
};
