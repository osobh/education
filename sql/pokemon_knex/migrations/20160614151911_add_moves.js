exports.up = function(knex, Promise) {
  return knex.schema.createTable('moves', function(table){
    table.increments();
    table.string('name');
    table.integer('type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('moves');
};