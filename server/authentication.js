const knex = require("../knex/knex");
const axios = require("axios");

const facebookAuthenticated = async (req) => {
  const facebookToken = req.headers["facebooktoken"];
  const email = req.headers["email"];

  if (facebookToken) {
    const path = `https://graph.facebook.com/me?fields=email&access_token=${facebookToken}`;
    try {
      const response = await axios.get(path);

      if (!response || !response.data)
        return { status: 401, message: "Unauthorized" };

      if (!response.data.email || !response.data.id) {
        return { status: 401, message: "Unauthorized" };
      } else {
        return { status: 200, message: "Authorized" };
      }
    } catch (error) {
      return { status: 500, message: "Internal server error" };
    }
  }
  return { status: 500, message: "Internal server error" };
};

module.exports = {
  facebookAuthenticated: facebookAuthenticated
};
