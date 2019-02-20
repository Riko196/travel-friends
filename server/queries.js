const config = require("../config");

const getUserByEmail = (trx, email) => {
  return trx("users")
    .select("*")
    .where("email", email)
    .first();
};

const getUserIdByEmail = (trx, email) => {
  return trx("users")
    .select("id")
    .where("email", email)
    .first();
};

const insertUser = (trx, user) => {
  return trx("users").insert(user);
};

const updateUser = (trx, user) => {
  return trx("users")
    .where({ id: user.id })
    .update(user);
};

module.exports = {
  getUserByEmail: getUserByEmail,
  getUserIdByEmail: getUserIdByEmail,
  insertUser: insertUser,
  updateUser: updateUser
};
