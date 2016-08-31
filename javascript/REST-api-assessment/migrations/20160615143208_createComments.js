exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.integer('post_id').unsigned().index().references('posts.id').onDelete('cascade');
    table.string('commenter');
    table.string('body');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts_comments');
};
