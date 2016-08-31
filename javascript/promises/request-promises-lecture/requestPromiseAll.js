var request = require('request');

/**
 * This is a simple (not completely robust) method to use
 * promises with the request.get method.
 */
function promisifyGet(url, additionalData) {
	return new Promise(function(resolve, reject) {

		request.get(url, function(error, response, body){
			if(error) {
				reject(error);
			}
			else {
        response.additionalData = additionalData;
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
  let promises = [];

  // Get information about ALL the artists.
  for(let i = 0; i < jsonBody.artists.items.length; i++) {
    // sending artist name as additionalData
    let p = promisifyGet(jsonBody.artists.items[i].href + '/albums', jsonBody.artists.items[i].name);
    promises.push(p);
  }

  return Promise.all(promises);
})
.then(function(manyAlbumsResponse){
  for(let i = 0; i < manyAlbumsResponse.length; i++) {
    let albumsResponse = manyAlbumsResponse[i];
    let jsonBody = JSON.parse(albumsResponse.body);
    let albumNames = jsonBody.items.map(function(album) {
      return album.name
    })
    // name followed by albums!
    console.log(albumsResponse.additionalData);
    console.log(albumNames);
  }
})
.catch(function(error){
  console.log(error);
});
