exports.up = (knex, Promise) => {
  return knex.schema.createTable("trips", table => {
    table.increments("tripId").primary();
    table.integer("userId").notNullable();
    table.integer("destinationId").notNullable();
    table.boolean("planned");
    table.string("category");
    table.string("dateFrom");
    table.string("dateTo");
    table.string("tripInfo");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("trips");
};
