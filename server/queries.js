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

const getPlannedTripsByUserId = (knex, userId) => {
  return knex("trips as t")
    .select("*")
    .where("t.userId", userId)
    .andWhere("t.planned", true)
    .join("destinations as d", join => {
      join.on("t.destinationId", "d.destinationId");
    });
};

const getUnplannedTripsByUserId = (knex, userId) => {
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

const getUserIdFriendsWithDate = async (knex, query) => {
  const { destinationName, dateFrom, dateTo, userId, gender } = query;
  const { destinationId } = await getDestinationIdByName(knex, destinationName);
  const friendsId = await knex("trips")
    .select("userId")
    .whereNot("userId", "=", userId)
    .andWhere("destinationId", "=", destinationId);

  const friendsIdWithDateFrom = await knex("trips")
    .select("userId")
    .where("dateTo", "<=", dateFrom)
    .andWhere("dateFrom", ">=", dateFrom);

  const friendsIdWithDateTo = await knex("trips")
    .select("userId")
    .where("dateTo", "<=", dateTo)
    .andWhere("dateFrom", ">=", dateTo);

  let myFriends = [];
  for (index in friendsId) {
    const friend = await getUserByUserId(knex, friendsId[index].userId);
    if (friend !== undefined) {
      if (
        friendsIdWithDateFrom.includes(index) ||
        friendsIdWithDateTo.includes(index)
      )
        myFriends.push(friend);
    }
  }
  return myFriends;
};

const getUserIdFriendsWithPlanned = async (knex, query) => {
  const { destinationName, userId } = query;
  const { destinationId } = await getDestinationIdByName(knex, destinationName);
  const friendsId = await knex("trips")
    .select("userId")
    .whereNot("userId", "=", userId)
    .andWhere("destinationId", "=", destinationId)
    .andWhere("planned", "=", true);

  let myFriends = [];
  for (index in friendsId) {
    const friend = await getUserByUserId(knex, friendsId[index].userId);
    if (friend !== undefined) myFriends.push(friend);
  }
  return myFriends;
};

/********************** DESTINATIONS ***********************/

const getDestinationByDestinationId = (knex, destinationId) => {
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
  return knex("destinations").select("destinationId", "destinationName");
};

const getTheMostPopularDestinations = (knex, limit) => {
  return knex("destinations")
    .select(
      "destinations.destinationId",
      "destinationName",
      "destinationPhoto",
      "aboutDestination"
    )
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
    .where("destinations.destinationId", "=", destinationId)
    .join("trips", join => {
      join.on("trips.destinationId", "destinations.destinationId");
    })
    .join("reviews", join => {
      join.on("reviews.tripId", "trips.tripId");
    })
    .join("users", join => {
      join.on("users.userId", "reviews.userId");
    })
    .select("users.name", "reviews.*");
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
    .update({ reviewText: reviewText, rating: rating })
    .where("tripId", "=", tripId);
};

module.exports = {
  getUserByEmail: getUserByEmail,
  getUserByUserId: getUserByUserId,
  insertUser: insertUser,
  updateUser: updateUser,
  insertTrip: insertTrip,
  deleteTrip: deleteTrip,
  getPlannedTripsByUserId: getPlannedTripsByUserId,
  getUnplannedTripsByUserId: getUnplannedTripsByUserId,
  getUserIdFriendsWithDate: getUserIdFriendsWithDate,
  getUserIdFriendsWithPlanned: getUserIdFriendsWithPlanned,
  getDestinationByDestinationId: getDestinationByDestinationId,
  getDestinationIdByName: getDestinationIdByName,
  getDestinationNameById: getDestinationNameById,
  getAllDestinationsName: getAllDestinationsName,
  getTheMostPopularDestinations: getTheMostPopularDestinations,
  getDestinationIdByTripId: getDestinationIdByTripId,
  getReviewsByDestinationId: getReviewsByDestinationId,
  insertReview: insertReview,
  deleteReview: deleteReview,
  updateReview: updateReview
};
