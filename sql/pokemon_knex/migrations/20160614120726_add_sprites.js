exports.up = function(knex, Promise) {
  return knex.schema.createTable('sprites', function(table){
    table.increments();
    table.string('url');
    table.integer('pokemon_id').references('pokemon.id').notNullable();
    table.string('type');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sprites');
};

