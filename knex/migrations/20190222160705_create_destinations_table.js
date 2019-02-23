
exports.up = function(knex, Promise) {
    return knex.schema.createTable("destination", table => {
        table.increments("destination_id").primary();
        table.string("destination_name").notNullable();
        table.string("destination_photo");
        table.string("about_destination");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("destination");
};
