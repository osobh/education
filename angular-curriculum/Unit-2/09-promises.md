# Promises Refresher

>A promise represents a value that may not be available yet. i.e. an action that is being executed asynchronously.

For example, you might have seen some `knex` code like this:

```js
knex('puppies')
  .where('breed', 'labrador')
  .then(function(puppies){
    console.log(puppies);
  }).catch(function(error){
    console.log(error);
  });
```

A `knex` query builder returns a promise.  If the query succeeds, the function specified by then will be called, otherwise, the catch function will be called.

A promise can either be:

`resolved` - the asynchronous action completed successfully

`rejected` - the asynchronous action failed

Promises can also be chained:

```js
getUserData()
  .then(function (userData) {
    return getUserMessages(userData.id).then(function(userMessages){
      return { userData: userData, userMessages: userMessages }
    });
  }).then(function (result) {
    return getUserLocation(result.userData.id).then(function(userLocation){
      result.userLocation = userLocation;
      return result;
    });
  }).then(function(result){
    renderData(result.userData, result.userMessages, result.userLocation)
  }).catch(function(error){
    console.log(error);
  });
```

In this example, getUserData, getUserMessages and getUserLocation all return a promise.

For example, getUserData might be implemented like so:

```js

function getUserData() {
  return new Promise(function(resolve, reject){
    someAsyncThing(function(error, userData){
      if(error) {
        reject(error);
      } else {
        resolve(userData);
      }
    });
  });
}
```

We chain promises by returning the resulting promise of each successive function call. Using promises in this way prevents what is known as `callback hell`, the `pyramid of doom` or `rightward drift`

For example, to do the same thing with callbacks:

```js
getUserData(function(userData){
  getUserMessages(userData.id, function(userMessages){
    getUserLocation(userData.id, function(userLocation){
      renderData(userData, userMessages, userLocation);
    });
  });
});
```

This is a simple example, but the more asynchronous functions we have that depend on previous asynchronous values, the farther right the code drifts.

Promises allow the implementer to chain methods together in a flat, more readable way.

Promises are native to the browser.  All popular browsers except for [IE11 and below](http://caniuse.com/#search=promise) have full support for promises. Take a look at the [MDN docs for promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

**EXERCISE:** Why would you prefer to use a promise over a callback?  What advantage does it have?

For more practice with promises, checkout the [promise-challenges repo](https://github.com/gSchool/promise-challenges).

# Promises in Angular

Recall from [Unit 2: Section 6](06-http-service.md) that the `$http` service method `get` returns a promise.

Let's create a service that uses `$http` to catch a specific pokemon using the [pokemon api](http://pokeapi.co/docs/).

The example below is a possible way to implement a service that
gets the first move for a pokemon and the first ability.  **THERE IS A MUCH BETTER WAY TO IMPLEMENT THE FOLLOWING CODE**.

```js
app.service("Pokemon", function($http) {

  var baseUrl = 'http://pokeapi.co/';

  // A number for the pokemon id needs to be added to the
  // this path.
  var pokemonInfoPath = 'api/v1/pokemon/';
  return {
    catchEm: function(pokemonId) {
      var pokeData;
      var fullUrl = baseUrl + pokemonInfoPath + pokemonId + '/';
      $http.get(fullUrl).then(function(baseData) {
        pokeData = baseData.data;
        var uri = pokeData.abilities[0].resource_uri;
        $http.get(baseUrl + uri).then(function(abilityData) {
          pokeData.abilities[0] = abilityData.data;
          // Notice that this get request doesn't depend on the
          // get request it is nested inside of.

          var uri = pokeData.moves[0].resource_uri;
          $http.get(baseUrl + uri).then(function(moveData) {
            pokeData.moves[0] = moveData.data;

            // Now we have a problem.  How do we signal that this
            // data is done?
          })
        });
      });
    }
  };
});
```

This deeply nested code is very hard to maintain and it doesn't really provide much benefit over normal callbacks.  The code above also has the problem that client of the service doesn't have a good way of knowing when all of the data has been loaded.  How can we make this better?

**EXERCISE**: Take a look at [this link about flattening promise chains](http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/).  Apply your newly found promise knowledge to improving the pokemon service.  Make the promise chain in the service not deeply nested. Remember that $http returns a promise.  Also, return a promise to the client so that the client can use `.then` to figure out when all of the data is done loading.  Also keep in mind that the get request for moves and the get request for abilities are not dependent on each other.

**EXERCISE** Now that we have a better idea of how to use promises, improve the code so that all move data, all ability data, and all sprite data gets returned by the service.  Create a page to display the results.

# $q

When learning about the [digest cycle](02-digest-cycle.md), you learned that changes to `$scope` using asynchronous APIs such as setTimeout, setInterval or XMLHttpRequest do _not_ automatically update the UI. This is because they are external to the angular digest cycle. i.e. Angular does not know when these asynchronous APIs are done executing, so you *must* manually call `$scope.$apply()` or `$scope.$digest()` to let angular know that some things have changed and the UI should be updated.

As you may recall, promises represent an asynchronous value. $q is angular's implementation of promises/deferred objects inspired by the [q](https://github.com/kriskowal/q) library. $q allows us to use promises within the digest cycle of angular without the need to call `$scope.$apply()` or `$scope.$digest()`

### Using $q

`$q` has a similar API to native promises.

Recall our example from earlier that returns a native promise:

```js
function getUserData() {
  return new Promise(function(resolve, reject){
    someAsyncThing(function(error, userData){
      if(error) {
        reject(error);
      } else {
        resolve(userData);
      }
    });
  });
}
```

The same function on an angular service would return the invocation of $q instead of a new instance of a promise:

```js
app.factory('UserService', function($q){
  return {
    getUserData: function() {
      return $q(function(resolve, reject){
        someAsyncThing(function(error, userData){
          if(error) {
            reject(error);
          } else {
            resolve(userData);
          }
        });
      });
    }
  }
});
```

**EXERCISE** What would happen if the `UserService` in the above example used a new `Promise` instead of $q?

In the example below, a $q promise is resolved by providing the result of getting the movie data from our movie cache or from an ajax request. The code demonstrates a good way to allow controllers to fetch data from services that may (or may not) need to fetch that data from an external source. In the following example, we'll cache the OMDB response for a search term, and avoid making calls to the API for the same data more than once. Our controller can treat the response the same way in both cases, it doesn't care where the data comes from, only that the search function will return a promise.

```js
app.controller('OmdbController', function($scope, omdbapi) {
  $scope.view = {};
  $scope.view.term = '';

  $scope.view.queryOmdb = function() {
    omdbapi.search($scope.view.term).then(function(data) {
      $scope.view.results = data;
    })
  }
});

app.factory('omdbapi', function($http, $q) {
  var omdbservice = {};
  var baseUrl = "http://www.omdbapi.com/?r=json&plot=long&s=";

  var cachedMovies = {};

  omdbservice.search = function(term) {
    var url = baseUrl + encodeURIComponent(term);

    return $q(function(resolve, reject){
      if (cachedMovies[term]) {
        resolve(cachedMovies[term]);
      } else {
        $http.get(url).success(function(data) {
          cachedMovies[term] = data.Search;
          resolve(cachedMovies[term]);
        }).error(function(error) {
          reject(error)
        });
      }
    })
  }

  return omdbservice;
});
```

**EXERCISE** What are some advantages of caching the data? What role does `$q` play in caching the data?
