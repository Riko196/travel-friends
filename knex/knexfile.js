require("dotenv").config({ path: __dirname + "/../.env" });

module.exports = {
  development: {
    client: process.env.DB_CLIENT_DEVELOPMENT,
    connection: {
      host: process.env.DB_HOST_DEVELOPMENT,
      port: process.env.DB_PORT_DEVELOPMENT,
      user: process.env.DB_USER_DEVELOPMENT,
      password: process.env.DB_PASSWORD_DEVELOPMENT,
      database: process.env.DB_DATABASE_DEVELOPMENT
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  },

  production: {
    client: process.env.DB_CLIENT_PRODUCTION,
    connection: {
      host: process.env.DB_HOST_PRODUCTION,
      port: process.env.DB_PORT_PRODUCTION,
      user: process.env.DB_USER_PRODUCTION,
      password: process.env.DB_PASSWORD_PRODUCTION,
      database: process.env.DB_DATABASE_PRODUCTION
    },

    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  }
};
