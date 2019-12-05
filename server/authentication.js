const knex = require("../knex/knex");
const axios = require("axios");

const authenticated = async (token, userId) => {
  if (!token || !userId) return false;
  const user = await knex("users")
    .select("*")
    .where("userId", userId)
    .andWhere("token", token)
    .first();

  return user !== undefined;
};

const facebookAuthenticated = async (req, email) => {
  const facebookToken = req.headers["facebooktoken"];

  if (facebookToken) {
    const path = `https://graph.facebook.com/me?fields=email&access_token=${facebookToken}`;
    const response = await axios.get(path);

    if(!response || !response.data)
      return { status: 500, message: "Unauthorized" };

    if (!response.data.email || !response.data.id) {
      return { status: 500, message: "Unauthorized" };
    } else {
      return { status: 200, message: "Authorized" };
    }
  } else return { status: 500, message: "Unauthorized" };
};

module.exports = {
  authenticated: authenticated,
  facebookAuthenticated: facebookAuthenticated
};
