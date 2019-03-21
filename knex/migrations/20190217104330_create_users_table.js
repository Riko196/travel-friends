exports.up = (knex, Promise) => {
  return knex.schema.createTable("users", table => {
    table.increments("userId").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("profilePhoto").notNullable()
    table.string("aboutme");
    table.string("birthday");
    table.string("country");
    table.string("city");
    table.string("occupation");
    table.string("joined");
    table.string("gender");
    table.string("relationship");
    table.string("education");
    table.string("smoking");
    table.string("drinking");
    table.string("speaking");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("users");
};
