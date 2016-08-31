var request = require('request');

var artist = process.argv[2];
var url = 'https://api.spotify.com/v1/search?type=artist&q=' + artist

request.get(url, function(error, response, body){
	if(error) {
		console.log(error);
	}
	else {
    let jsonBody = JSON.parse(body);
		console.log(jsonBody.artists.items[0].href);

    request.get(jsonBody.artists.items[0].href + '/albums' , function(error, response, body){
        if(error) {
          console.log(error);
        }
        else {
          let jsonBody = JSON.parse(body);
          let albumNames = jsonBody.items.map(function(album) {
            return album.name
          })
          console.log(albumNames);
        }
    });

	}
});
