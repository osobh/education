var request = require('request');

/**
 * This is a simple (not completely robust) method to use
 * promises with the request.get method.
 */
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

var artist = process.argv[2];
var url = 'https://api.spotify.com/v1/search?type=artist&q=' + artist

promisifyGet(url)
.then(function(searchResponse){
  let jsonBody = JSON.parse(searchResponse.body);
  console.log(jsonBody.artists.items[0].href);
  return promisifyGet(jsonBody.artists.items[0].href + '/albums');
})
.then(function(albumsResponse){
  let jsonBody = JSON.parse(albumsResponse.body);
  let albumNames = jsonBody.items.map(function(album) {
    return album.name
  })
  console.log(albumNames);
})
.catch(function(error){
  console.log(error);
});
