exports.up = (knex, Promise) => {
  return knex.schema.createTable("users", table => {
    table.increments("userId").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("aboutme");
    table.string("birthday");
    table.string("country");
    table.string("gender");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("users");
};
