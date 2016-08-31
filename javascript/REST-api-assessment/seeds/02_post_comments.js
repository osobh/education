var config = require('../knexfile')['development'];
var db = require('knex')(config);

exports.seed = function(knex, Promise) {
  return db('posts').select().then(function (posts) {
    return Promise.join(
      knex('comments').del(),

      knex('comments').insert({post_id: posts[0].id, commenter: 'David Bowie', body: 'I don\'t know where I\'m going from here, but I promise it won\'t be boring.'}),
      knex('comments').insert({post_id: posts[1].id, commenter: 'Kurt Cobain', body: 'Wanting to be someone else is a waste of who you are.'}),
      knex('comments').insert({post_id: posts[1].id, commenter: 'William Shakespeare', body: 'This above all: to thine own self be true.'}),
      knex('comments').insert({post_id: posts[2].id, commenter: 'Socrates', body: 'To find yourself, think for yourself.'})
    );
  })
};
