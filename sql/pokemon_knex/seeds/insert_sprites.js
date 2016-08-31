var request = require('request');

exports.seed = function(knex, Promise) {
    var errCount = 0;
    var resultCount = 0;
    var pokePromises = [];
    // Deletes ALL existing entries
    knex('sprites').del();
    //get all the pokemon ids
    return knex('pokemon').select().then(function (pokemon) {
      return Promise.all(pokemon.map(function (p) {
        console.log(`http://pokeapi.co/api/v2/pokemon/${p.pokedex_number} id: ${p.id}`)
        return promisifyGet(`http://pokeapi.co/api/v2/pokemon/${p.pokedex_number}`)
        .then(function(response) {
          try {
            console.log(JSON.parse(response.body).sprites)
            return knex('sprites').insert({url: JSON.parse(response.body).sprites.front_default, pokemon_id: p.id, type:"front_default"})
          } catch (e) {
            console.log(e);
          }
        });
      }));
    });
};



function promisifyGet(url) {
    return new Promise(function(resolve, reject) {

        request.get(url, function(error, response, body){
            if(error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        });
    });
}
