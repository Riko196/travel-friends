
exports.up = function(knex, Promise) {
    return knex.schema.createTable("trips", table => {
        table.increments("trip_id").primary();
        table.string("user_id").notNullable();
        table.string("destination_id").notNullable();
        table.string("planned");
        table.string("category");
        table.string("date_from");
        table.string("date_to");
        table.string("trip_info");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("trips");
};
