/********************** USERS ***********************/

const getUserByEmail = (knex, email) => {
  return knex("users")
    .select("*")
    .where("email", email)
    .first();
};

const getUserByUserId = async (knex, userId) => {
  const user = await knex("users")
    .select("*")
    .where("userId", userId)
    .first();

  delete user.email;
  return user;
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

const getPlanningTripsByUserId = (knex, userId) => {
  return knex("trips as t")
    .select("*")
    .where("t.userId", userId)
    .andWhere("t.planned", false)
    .join("destinations as d", join => {
      join.on("t.destinationId", "d.destinationId");
    });
};

const getPlannedTripsByUserId = (knex, userId) => {
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

const getFriends = async (friendsId, knex) => {
  return Promise.all(
    friendsId.map(async element => {
      const friend = await getUserByUserId(knex, element.userId);
      if (element.tripId) friend.tripId = element.tripId;
      if (element.dateTo) friend.dateTo = element.dateTo;
      if (element.dateFrom) friend.dateFrom = element.dateFrom;
      return friend;
    })
  );
};

const filterFriends = (friends, gender) => {
  return friends.filter(friend => {
    return friend && (gender === friend.gender || gender === "I don't mind");
  });
};

const getUserIdFriendsWithPlanned = async (knex, query) => {
  const { destinationName, dateFrom, dateTo, userId, gender } = query;
  const { destinationId } = await getDestinationIdByName(knex, destinationName);

  const friendsId = await knex("trips")
    .select("tripId", "userId", "dateTo", "dateFrom")
    .whereNot("userId", "=", userId)
    .andWhere("planned", "=", true)
    .andWhere("destinationId", "=", destinationId)
    .andWhere("dateFrom", "<=", dateTo)
    .andWhere("dateTo", ">=", dateFrom);

  return filterFriends(await getFriends(friendsId, knex), gender);
};

const getUserIdFriendsWithPlanning = async (knex, query) => {
  const { destinationName, userId, gender } = query;
  const { destinationId } = await getDestinationIdByName(knex, destinationName);
  const friendsIdWithPlanning = await knex("trips")
    .select("tripId", "userId")
    .whereNot("userId", "=", userId)
    .andWhere("destinationId", "=", destinationId)
    .andWhere("planned", "=", false);

  const friendsIdWithPlanned = await knex("trips")
    .select("tripId", "userId", "dateTo", "dateFrom")
    .whereNot("userId", "=", userId)
    .andWhere("destinationId", "=", destinationId)
    .andWhere("planned", "=", true);

  return {
    friendsWithPlanning: filterFriends(
      await getFriends(friendsIdWithPlanning, knex),
      gender
    ),
    friendsWithPlanned: filterFriends(
      await getFriends(friendsIdWithPlanned, knex),
      gender
    )
  };
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
  return knex("destinations")
    .select("destinationId", "destinationName")
    .orderBy("destinationName", "ASC");
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
  getPlanningTripsByUserId: getPlanningTripsByUserId,
  getPlannedTripsByUserId: getPlannedTripsByUserId,
  getUserIdFriendsWithPlanned: getUserIdFriendsWithPlanned,
  getUserIdFriendsWithPlanning: getUserIdFriendsWithPlanning,
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
