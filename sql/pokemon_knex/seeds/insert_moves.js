
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('moves').del(),

    // Inserts seed entries
    knex('moves').insert({name: 'cut', type: "1"}),
    knex('moves').insert({name: 'fly', type: "2"}),
    knex('moves').insert({name: 'sand attack', type: "1"}),
    knex('moves').insert({name: 'splash', type: "2"})

  );
};
