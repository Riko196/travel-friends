const config = require("../config");

const getUserByEmail = (trx, email) => {
  return trx("users")
    .select("*")
    .where("email", email)
    .first();
};

const insertUser = (trx, user) => {
  return trx("users").insert(user);
};

const updateUser = (trx, user) => {
  return trx("users").update(user);
};
module.exports = {
  getUserByEmail: getUserByEmail
};
