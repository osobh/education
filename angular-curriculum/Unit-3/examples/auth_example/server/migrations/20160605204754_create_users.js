exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments();
    t.text('username').unique();
    t.text('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.removeTable('users')
};
