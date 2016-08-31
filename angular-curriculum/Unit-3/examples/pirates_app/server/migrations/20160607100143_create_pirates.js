exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function(table) {
    table.increments().primary();
    table.text('name');
    table.text('poison');
    table.text('accessory');
    table.text('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};