# Promises Lecture Notes

## Objectives

* Use the `Promise` pattern to handle asychronous behavior in javascript.
	* "promisify" an HTTP request.
	* Use `.then()` to handle successful calls
	* Use `.catch()` to handle erronious calls
	* Use `Promise.all()` to wait for several asyc events to finish

## Part One: What is a Promise?

In JavaScript a promise is a way to attach callbacks to asychronous events. Promises give us additional flexibility in handling asyc data including:

* The ability to wait for many asyc events to complete before firing the handler.
* The ability to chain callbacks without deep nesting of code.
* A standard way of processing errors during asyc handling.
	* Including handling errors for an entier chain.

Consider this use of setTimeout:

```js
setTimeout(function() {
	console.log("roughly one second has passed");
}, 1000);
```

We pass the callback function into setTimeout. If we wanted to wait one second, then start waiting another second once we're sure the first setTimeout finished, then we'd have to nest calls to setTimeout:

```js
setTimeout(function() {
	console.log("roughly one second has passed");
	
	setTimeout(function() {
		console.log("a second second has passed...");
	}, 1000);

}, 1000);
```

The above is pretty hard to read, and in this example, it's easy to argue that we should simply re-write it like this:

```js
setTimeout(function() {
	console.log("roughly one second has passed");
}, 1000);

setTimeout(function() {
	console.log("a second second has passed");
}, 2000);
```

## Part 2: Which Pains Do Promises Address?

Lets make a server side HTTP request, using the `request` module:

```js
var request = require('request');

var artist = process.argv[2];
var url = 'https://api.spotify.com/v1/search?type=artist&q=' + artist

request.get(url, function(error, response, body){
	if(error) {
		console.log(error);
	}
	else {
    let jsonBody = JSON.parse(body);
		console.log(jsonBody.artists[0]);
	}
});
```

Lets say we want to search for the top matching artists tracks... the search API endpoint doesn't give us that information. We need the artist_id before we can make that search!

```js
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
          console.log(jsonBody.items);
        }
    });

	}
});
```

Do you hate this? I do! We can use promises to flatten this chain of asychronous behavior. First we have to understand how a promise works. 

## Promisification, setTimeout:

To use the Promise Pattern, we have to "promisify" the asychronous behavior first. Lets start simple, with setTimeout:

```js
function promisifyTimeout(fn, timeToWait) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      fn();
      resolve();
    }, timeToWait);
  });
}

promisifyTimeout(function() {
  console.log("A second has passed");
}, 1000)
.then(function() {
    return promisifyTimeout(function() {
      console.log("another second")
    }, 1000);
})
.then(function() {
  console.log("Now it's over!");
});
```

Lets look at the `new Promise` section. 

#### Reflect as a group:

* What is `resolve`?
	* A function
	* When called, it triggers the `.then` callback
	* In our case, we call resolve once the `setTimeout` has finished.
* What is `reject`?
	* A function
	* When called it triggers the `.catch` callback
	* Never happens in this example.

__Notice that we have added complexity for relatively low gain__. Promises have overhead, both in processing power, and in code complexity. For something like setTimeout, it may not always be worth it to promisify something in order to chain things. 

#### Think Pair Share:

* add 2 more links to this chain using promisifyTimeout
* if the function passed into promisifyTimeout returns the string `"error"`, `reject` the promise instead of calling `resolve`.
* add a `.catch()` to the promise chain.
* cause the function in `.catch()` to be called.

## Promisification 2: HTTP Requests

Lets look at the `request` version of promisification, where I think we gain a lot more value:

```js
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
```

#### Reflect as a Group

* What does promisifyGet return?
* What is `resolve` and when is it called?
	* What is being passed to `resolve`? 
* What is `reject` and when is it called?
	* What is being passed to `reject`?


Okay, so lets see how we can use this code to flatten the earlier spotify nesting:

```js
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
```

Is this easier to understand then the nested callbacks? I think so. 

#### Think Pair Share

* When would the `.catch()` function be called? 
* How can you change the code such that it is called?

## Last thing - Promise.all

Another benefit of promises is that they can be used to wait for many requests to finish before triggering a callback! Lets break down this code. 

Notice "additionalData" in promisifyGet, also notice `Promise.all`:

```js
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
```

#### Think Pair Share (perhaps make it a long one if you have time)

* What is the point of `additionalData`?
* What is `Promise.all` doing?
	* Can you print all the albums for each artist __without__ `promise.all`, 
	* How about without promises at all?

#### Reflect as a Group

* Can you think of a time you could have used `Promise.all`?
* Can you think of a time you could have used `Promise chaining`?

### Heavily Annontated Promises Example:

[https://github.com/gSchool/spotify-promises-example](https://github.com/gSchool/spotify-promises-example)

## Bonus Material -- HTTP Caching with Mongo and PromisifyGet

First install mongo

```
// update your packages
$ brew update

// install mongoDB
$ brew install mongodb
```

Now start mongo:

```
$ mongod
```

Now install `mongodb` for using mongo:

```
npm install mongodb
```

Now checkout the file `mongoCache.js`






