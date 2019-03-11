exports.up = (knex, Promise) => {
  return knex.schema.createTable("trips", table => {
    table.increments("tripId").primary();
    table.string("userId").notNullable();
    table.string("destinationId").notNullable();
    table.string("planned");
    table.string("category");
    table.string("dateFrom");
    table.string("dateTo");
    table.string("tripInfo");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("trips");
};
