exports.up = (knex, Promise) => {
  return knex.schema.createTable("reviews", table => {
    table.increments("reviewId").primary();
    table.string("userId").notNullable();
    table.string("tripId");
    table.string("reviewText");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("reviews");
};
