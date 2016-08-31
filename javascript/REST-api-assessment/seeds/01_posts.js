
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('posts').del(),

    knex('posts').insert({
      author: 'Gabrielle “Coco” Chanel',
      body: 'How many cares one loses when one decides not to be something but to be someone.'
    }),
    knex('posts').insert({
      author: 'Dr. Seuss',
      body: 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.'
    }),
    knex('posts').insert({
      author: 'Mark Twain',
      body: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.'
    })
  );
};
