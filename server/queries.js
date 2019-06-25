/********************** USERS ***********************/

const getUserByEmail = (knex, email) => {
  return knex("users")
    .select("*")
    .where("email", email)
    .first();
};

const getUserByUserId = (knex, userId) => {
  return knex("users")
    .select("*")
    .where("userId", userId)
    .first();
};

const insertUser = (knex, user) => {
  return knex("users")
    .insert(user)
    .returning("*");
};

const updateUser = (knex, user) => {
  return knex("users")
    .where({ userId: user.userId })
    .update(user);
};

/********************** TRIPS ***********************/

const insertTrip = (knex, trip) => {
  return knex("trips")
    .insert(trip)
    .returning("*");
};

const deleteTrip = (knex, tripId) => {
  return knex("trips")
    .delete()
    .where("tripId", tripId);
};

const getTripsByUserId = (knex, userId) => {
  return knex("trips as t")
    .select("*")
    .where("t.userId", userId)
    .join("destinations as d", join => {
      join.on("t.destinationId", "d.destinationId");
    })
    .join("reviews as r", join => {
      join.on("t.tripId", "r.tripId");
    });
};

/********************** FRIENDS ***********************/

const getUserIdFriends = async (knex, query) => {
  const { destinationName, dateFrom, dateTo, userId } = query;
  const { destinationId } = await getDestinationIdByName(knex, destinationName);
  const friendsId = await knex("trips")
    .select("userId")
    .where("destinationId", "=", destinationId)
    .whereNot("userId", userId)
    .andWhere("dateFrom", "<=", dateFrom)
    .orWhere("dateTo", ">=", dateTo);

  let myFriends = [];
  for (index in friendsId) {
    const friend = await getUserByUserId(knex, friendsId[index].userId);
    if (friend !== undefined) myFriends.push(friend);
  }
  return myFriends;
};

/********************** DESTINATIONS ***********************/

const getDestinationById = (knex, destinationId) => {
  return knex("destinations")
    .select("*")
    .where("destinationId", destinationId)
    .first();
};

const getDestinationIdByName = (knex, destinationName) => {
  return knex("destinations")
    .select("destinationId")
    .where("destinationName", destinationName)
    .first();
};

const getDestinationNameById = (knex, destinationId) => {
  return knex("destinations")
    .select("destinationName")
    .where("destinationId", destinationId)
    .first();
};

const getAllDestinationsName = knex => {
  return knex("destinations").select("destinationName");
};

const getMostPopularDestinations = (knex, limit) => {
  return knex("destinations")
    .select("destinations.destinationId", "destinationName", "destinationPhoto")
    .count({ num: "*" })
    .join("trips", join => {
      join.on("trips.destinationId", "destinations.destinationId");
    })
    .groupBy("destinations.destinationId")
    .orderBy("num", "DESC")
    .limit(limit);
};

const getDestinationIdByTripId = (knex, tripId) => {
  return knex("trips")
    .select("destinationId")
    .where("tripId", "=", tripId)
    .first();
};

/********************** REVIEWS ***********************/

const getReviewsByDestinationId = (knex, destinationId) => {
  return knex("destinations")
    .where("destinationId", "=", destinationId)
    .join("trips", join => {
      join.on("trips.destinationId", "destinations.destinationId");
    })
    .join("reviews", join => {
      join.on("reviews.tripId", "destinations.tripId");
    })
    .join("users", join => {
      join.on("users.userId", "destinations.userId");
    })
    .select(
      "destinationId, destinationName, destinationPhoto, aboutDestination, name"
    );
};

const insertReview = (knex, review) => {
  return knex("reviews")
    .insert(review)
    .returning("*");
};

const deleteReview = (knex, tripId) => {
  return knex("reviews")
    .delete()
    .where("tripId", tripId);
};

const updateReview = (knex, userId, tripId, reviewText, rating) => {
  return knex("reviews")
    .update({ reviewText: reviewText })
    .where("tripId", "=", tripId);
};

module.exports = {
  getUserByEmail: getUserByEmail,
  getUserByUserId: getUserByUserId,
  insertUser: insertUser,
  updateUser: updateUser,
  insertTrip: insertTrip,
  deleteTrip: deleteTrip,
  getTripsByUserId: getTripsByUserId,
  getUserIdFriends: getUserIdFriends,
  getDestinationById: getDestinationById,
  getDestinationIdByName: getDestinationIdByName,
  getDestinationNameById: getDestinationNameById,
  getAllDestinationsName: getAllDestinationsName,
  getMostPopularDestinations: getMostPopularDestinations,
  getDestinationIdByTripId: getDestinationIdByTripId,
  getReviewsByDestinationId: getReviewsByDestinationId,
  insertReview: insertReview,
  deleteReview: deleteReview,
  updateReview: updateReview
};
