exports.up = function(knex, Promise) {
  return knex.schema.createTable('berries', function(table){
    table.increments();
    table.string('name');
    table.integer('size');
    table.string('effect');
    table.string('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('berries');
};
