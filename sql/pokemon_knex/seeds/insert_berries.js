
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('berries').del(),

    // Inserts seed entries

    knex('berries').insert({name: 'black_berry', size: '4', effect: 'poison', image_url: 'none'}),
    knex('berries').insert({name: 'zzt_berry', size: '5', effect: 'sleep', image_url: 'instagram'}),
    knex('berries').insert({name: 'wild', size: '6', effect: 'death', image_url: 'none'})
    

  );
};
