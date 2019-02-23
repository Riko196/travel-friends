
exports.up = (knex, Promise) => {
    return knex.schema.createTable("reviews", table => {
        table.increments("review_id").primary();
        table.string("user_id").notNullable();
        table.string("trip_id");
        table.string("review_text");
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable("reviews");
};
