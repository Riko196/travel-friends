exports.up = (knex, Promise) => {
  return knex.schema.createTable("destinations", table => {
    table.increments("destinationId").primary();
    table.string("destinationName").notNullable();
    table.string("destinationPhoto");
    table.text("aboutDestination");
    table.string("destinationLink");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("destinations");
};
