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
const {
  facebookAuthenticated
} = require("./authentication");

const router = express.Router();

/********************** USERS ***********************/

router.get("/getUser/:email", async (req, res, next) => {
  const { email } = req.params;
  const response = await facebookAuthenticated(req);

  if (response.status !== 200) {
    return res.send(response);
  }

  getUserByEmail(knex, email)
    .then(result => {
      if (!result) {
        return res.send({});
      } else {
        return res.send(result);
      }
    })
    .catch(e => next(e));
});

router.get("/getUserByUserId/:userId", (req, res, next) => {
  const { userId } = req.params;

  getUserByUserId(knex, userId)
    .then(result => {
      if (!result) {
        return res.send({});
      } else {
        return res.send(result);
      }
    })
    .catch(e => next(e));
});

router.post("/insertUser", async (req, res, next) => {
  const user = req.body;
  const response = await facebookAuthenticated(req);

  if (response.status !== 200) {
    return res.send(response);
  }

  insertUser(knex, user)
    .then(inserted => {
      return res.send(inserted[0]);
    })
    .catch(e => next(e));
});

router.put("/updateUser", async (req, res, next) => {
  const user = req.body;
  const userId = req.headers["userid"];
  const response = await facebookAuthenticated(req);

  if (response.status !== 200) {
    return res.send(response);
  }

  user.userId = userId;
  updateUser(knex, user)
    .then(result => {
      return res.send({});
    })
    .catch(e => next(e));
});

/********************** TRIPS ***********************/

router.post("/insertTrip", async (req, res, next) => {
  const trip = req.body;
  const userId = req.headers["userid"];
  const response = await facebookAuthenticated(req);

  if (response.status !== 200) {
    return res.send(response);
  }

  trip.userId = userId;
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
                    return res.send({
                      ...insertedTrip[0],
                      ...destination,
                      ...insertedReview[0]
                    });
                  })
                  .catch(e => next(e));
              } else
                return res.send({
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

router.delete("/deleteTrip/:tripId", async (req, res, next) => {
  const { tripId } = req.params;
  const userId = req.headers["userid"];
  const response = await facebookAuthenticated(req);

  if (response.status !== 200) {
    return res.send(response);
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

router.get("/getMyTrips", (req, res, next) => {
  const userId = req.headers["userid"];

  getUnplannedTripsByUserId(knex, userId)
    .then(unplannedTrips => {
      getPlannedTripsByUserId(knex, userId).then(plannedTrips => {
        return res.send(unplannedTrips.concat(plannedTrips));
      });
    })
    .catch(e => next(e));
});

router.get("/getTripsByUserId/:userId", (req, res, next) => {
  const { userId } = req.params;

  getUnplannedTripsByUserId(knex, userId)
    .then(unplannedTrips => {
      getPlannedTripsByUserId(knex, userId).then(plannedTrips => {
        return res.send(unplannedTrips.concat(plannedTrips));
      });
    })
    .catch(e => next(e));
});
/********************** FRIENDS ***********************/

router.get(
  "/getMyFriends/:destinationName/:dateFrom/:dateTo/:gender",
  (req, res, next) => {
    const { destinationName, dateFrom, dateTo, gender } = req.params;
    const userId = req.headers["userid"];

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
            return res.send({
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
      return res.send(result);
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

    if (!theMostPopularDestinations) {
      return res.send([]);
    }

    for (let destination of theMostPopularDestinations) {
      const reviews = await getReviewsByDestinationId(
        knex,
        destination.destinationId
      );
      destination.reviews = reviews;
      if (!reviews) {
        destination.reviews = [];
      }
    }

    return res.send(theMostPopularDestinations);
  } catch (e) {
    next(e);
  }
});

router.get("/getDestinationIdByTripId/:tripId", (req, res, next) => {
  const { tripId } = req.params;

  getDestinationIdByTripId(knex, tripId)
    .then(result => {
      return res.send(result);
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
            return res.send({ ...destination, reviews: reviews });
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
      return res.send(result);
    })
    .catch(e => next(e));
});

router.put("/editReview", async (req, res, next) => {
  const { tripId, reviewText, rating } = req.body;
  const facebookToken = req.headers["facebooktoken"];
  const email = req.headers["email"];
  const userId = req.headers["userid"];
  const response = await facebookAuthenticated(facebookToken, user.email);

  if (response.status !== 200) {
    return res.send(response);
  }

  updateReview(knex, userId, tripId, reviewText, rating)
    .then(statusCode => {
      return res.send({});
    })
    .catch(e => next(e));
});

/************************* FILE UPLOAD ********************/

router.post("/upload", async (req, res) => {
  const userId = req.headers["userid"];
  const response = await facebookAuthenticated(req);

  if (response.status !== 200) {
    return res.send(response);
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
