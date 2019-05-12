const config = require("../config");

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

const getUserIdByEmail = (knex, email) => {
  return knex("users")
    .select("userId")
    .where("email", email)
    .first();
};

const insertUser = (knex, user) => {
  return knex("users").insert(user);
};

const updateUser = (knex, user) => {
  return knex("users")
    .where({ userId: user.userId })
    .update(user);
};

const insertTrip = (knex, trip) => {
  return knex("trips").insert(trip);
};

const getTripsByUserId = (knex, userId) => {
  return knex("trips")
    .select("*")
    .where("userId", userId);
};

const getDestinationIdByName = (knex, destinationName) => {
  return knex("destinations")
    .select("destinationId")
    .where("destinationName", destinationName)
    .first();
};

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

const getAllDestinationsName = knex => {
  return knex("destinations").select("destinationName");
};

const getMostPopularDestinations = (knex, limit) => {
  return knex("destinations")
    .select("destinationId", "destinationName", "destinationPhoto")
    .limit(limit);
};

module.exports = {
  getUserByEmail: getUserByEmail,
  getUserByUserId: getUserByUserId,
  getUserIdByEmail: getUserIdByEmail,
  insertUser: insertUser,
  updateUser: updateUser,
  insertTrip: insertTrip,
  getTripsByUserId: getTripsByUserId,
  getDestinationIdByName: getDestinationIdByName,
  getUserIdFriends: getUserIdFriends,
  getAllDestinationsName,
  getMostPopularDestinations: getMostPopularDestinations
};
