var MongoClient = require('mongodb').MongoClient;
var request = require('request');

// Connection URL
var mongoUrl = 'mongodb://localhost:27017/spotify_cache';
// Use connect method to connect to the Server
MongoClient.connect(mongoUrl, function(err, db) {
  if(err) {
    console.log(err);
    return;
  }
  console.log("Connected correctly to server");
  main(db);
});

/**
 * This is a simple (not completely robust) method to use
 * promises with the request.get method.
 */
function promisifyGetWithCache(url, db) {
  return new Promise(function(resolve, reject) {
    var responseCollection = db.collection('responses');
    responseCollection.find({url: url}).toArray(function(err, docs) {

      // DB Error
      if(err) {
        console.log("Mongo error while fetching!");
        reject(err);
      }
      // Cached
      else if(docs.length > 0) {
        console.log("CACHED!");
        resolve(docs[0].body);
      }
      // Not Cached
      else {
        request.get(url, function(error, response, body){
          body = JSON.parse(body);
          if(error) {
            console.log("Error while performing request!");
            reject(error);
          }
          else {
            let respDocument = {
              url: url,
              body: body
            };

            responseCollection.insertOne(respDocument, function(err, result) {
              console.log("Trying to insert!");
              if(err) {
                console.log("Mongo error while inserting!");
                reject(err)
              }
              else {
                console.log("successful HTTP request, added to cache!");
                resolve(body);
              }
            });
          }
        });
      }
    });
  });
}

function main(db) {
  var artist = process.argv[2];
  var url = 'https://api.spotify.com/v1/search?type=artist&q=' + artist;
  promisifyGetWithCache(url, db)
  .then(function(resp) {
    // var names = resp.artists.items.map(function(artist){
    //   return artist.name;
    // });

    console.log(resp);
  }).catch(function(err) {
    console.log(err);
  });
}
