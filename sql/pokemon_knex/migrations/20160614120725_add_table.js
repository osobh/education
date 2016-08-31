exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', function(table){
    table.increments();
    table.string('name');
    table.integer('pokedex_number');
    table.string('type1');
    table.string('type2');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};

