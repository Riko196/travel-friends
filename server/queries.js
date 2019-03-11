const config = require("../config");

const getUserByEmail = (trx, email) => {
  return trx("users")
    .select("*")
    .where("email", email)
    .first();
};

const getUserIdByEmail = (trx, email) => {
  return trx("users")
    .select("userId")
    .where("email", email)
    .first();
};

const insertUser = (trx, user) => {
  return trx("users").insert(user);
};

const updateUser = (trx, user) => {
  return trx("users")
    .where({ userId: user.userId })
    .update(user);
};

const insertTrip = (trx, trip) => {
  return trx("trips").insert(trip);
};

module.exports = {
  getUserByEmail: getUserByEmail,
  getUserIdByEmail: getUserIdByEmail,
  insertUser: insertUser,
  updateUser: updateUser,
  insertTrip: insertTrip
};
