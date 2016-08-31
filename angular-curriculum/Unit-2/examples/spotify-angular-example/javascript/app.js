angular.module('spotifyApp',[])
  .controller("MainController", function($scope, $http){

    // Bound to the search box
    $scope.searchQuery = '';

    // Execute this function when the user clicks search
    $scope.performSearch = function(searchQuery) {
      var searchUrl = "https://api.spotify.com/v1/search?type=artist&q=" + searchQuery;

      // Use the $http module, which is built on promises
      spotifyQueryRequest = $http({
          method: "GET",
          url: searchUrl
      })
      .then(function(searchResponse){
        var artists = searchResponse.data.artists;

        // I want to extract a couple data points from each
        // And update the view with that data.
        $scope.artists = artists.items.map(function(artistObj) {
          return {
            name: artistObj.name,
            id: artistObj.id,
            url: artistObj.href
          }
        });
      });
    }

    // When a user clicks on an artist link
    $scope.fetchArtist = function(artist) {

      // Set the value bound to the artist header
      $scope.activeArtist = artist.name;

      // Fecth the albums
      var albumsUrl = 'https://api.spotify.com/v1/artists/' + artist.id + '/albums';
      spotifyQueryRequest = $http({
          method: "GET",
          url: albumsUrl
      })
      .then(function(albumsResponse) {
        // Again, I just want a subset of the data for each album
        albumsData = albumsResponse.data.items.map(function(albumObj) {
          return {
            name: albumObj.name,
            url: albumObj.href
          }
        });

        // Make one request per album, to get the tracks
        var albumPromises = [];
        for(i in albumsData){
          var curAlbum = albumsData[i];
          var curAlbumPromise = $http({
            method: 'GET',
            url: curAlbum.url
          });

          albumPromises.push(curAlbumPromise);
        }

        return Promise.all(albumPromises);
      })
      .then(function(resolvedAlbums) {
        // Process all the albums
        var expandedAlbumData = resolvedAlbums.map(function(albumResponse) {
          var obj = albumResponse.data;
          
          // Shorten the track list data significantly
          var tracks = obj.tracks.items.map(function(track){
            return track.name
          });

          // return the total mapping
          return {
            name: obj.name,
            releaseDate: obj.release_date,
            tracks: tracks,
            albumArt: obj.images[0]
          }

        });

        // Finally, tell the view about our new information
        $scope.currentArtistInfo = expandedAlbumData;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
});