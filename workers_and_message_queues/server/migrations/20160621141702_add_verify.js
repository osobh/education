// Adds a boolean to verify that phone numbers belong to the user signing up
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table){
    table.boolean("verified");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('verified');
  })
};
