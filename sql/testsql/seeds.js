"use strict"
var pg = require('pg');
var conString = "postgres://omarsobh@localhost/booklist";

pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }

  seedBooks(client).then(function(responses){
    for(let i = 0; i < responses.length; i++) {
      console.log(responses[i].text, responses[i].values.toString());
    }

    done().then(process.exit);
  });
});

// return a promise so we can call done in the enclosing connection.
function seedBooks(client) {

  // Array instead of object because of the expectation of pg modules prepared statements.
  var books = [
    [1, 'testing','horror'],
    [2, 'testing1','horror'],
    [3, 'testing2','death'],
    [4, 'testing3','murder'],
    [5, 'testing4','kill'],
    [6, 'testing5','comedy'],
  ];

  var insertPromises = [];
  for(let i = 0; i < books.length; i ++) {
    let book = books[i];

    // Parameterized SQL, as a "Prepared Statement".
    let curPromise = client.query({
      name: 'insertBookSeed',
      text: 'INSERT INTO book (book_id, title, genre) values ($1, $2, $3)'
    }, book);
    insertPromises.push(curPromise);
  }

  // MORE on promises on Monday.
  return Promise.all(insertPromises);
}