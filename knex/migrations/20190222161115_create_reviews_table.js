exports.up = (knex, Promise) => {
  return knex.schema.createTable("reviews", table => {
    table.increments("reviewId").primary();
    table.integer("userId").notNullable();
    table.integer("tripId").notNullable();
    table.string("reviewText");
    table.integer("rating");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("reviews");
};
