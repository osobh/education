## NOTE:

Planning to remove __Response Expectations__ portion of this readme and replace with API documentation. Between the docs and the tests, students will be expected to figure what their api should respond with.

## Set Up

__if you don't already have mocha__
`npm install -g mocha`

```
fork and clone
npm install
```

Create the database, migrate and seed:

```
createdb posts_development
knex migrate:latest
knex seed:run
```

## To run tests

```
npm test
```

## Assessment Overview

Your mission is to write a RESTful API for `posts` and `comments`. Your API should
follow RESTful design principals, using RESTful `http verbs`, sending `json` as a response.

A `post` has many comments and a `comment` belongs to a post.

Use the included tests to write your API using test driven development.

## How to take this assessment using TDD:

1. run the tests and read the error message
1. write code in your routes to make the test pass
1. `add`, `commit`, `push`
1. delete the `x` from the next `it` statement
1. rinse and repeat

## Response Expectations

What exactly should be returned from a RESTful API can vary from project to project.
Your API should return the following `json` responses:

### POSTS

__#1 GET ALL POSTS:__

A single object with the following properties:

* `statusCode` - everything ok
* `results` - all posts

__#2 POST a SINGLE POST:__

A single object with the following properties:

* `statuCode` - code for successful creation
* `results` - an object with two propterties:
  * `id` of the newly created post
  * `location` - a url of the location of the new post  

__#3 GET A SINGLE POST:__

A single object with the following properties:

UPON SUCCESS:
* `statusCode` - everything ok
* `results` - a single post

UPON FAILURE:
* `statusCode` - bad request

__#4 UPDATE A SINGLE POST:__

A single object with the following properties:

UPON SUCCESS:
* `statusCode` - everything ok
* `results` - an object with two propterties:
  * `id` of the newly updated post
  * `location` - a url of the location of the updated post

UPON FAILURE:
* `statusCode` - bad request

__#5 DELETE A POST:__

A single object with the following properties:

UPON SUCCESS:
* `statusCode` - Server has received the request but there is no information to send back

UPON FAILURE:
* `statusCode` - bad request

### POST COMMENTS

__#1 GET ALL COMMENTS FOR A POST:__

A single object with the following properties:

* `statusCode` - everything ok
* `results` - all comments

__#2 POST a SINGLE POST COMMENT:__

A single object with the following properties:

* `statuCode` - code for successful creation
* `results` - an object with two propterties:
  * `id` of the newly created post comment
  * `location` - a url of the location of the new post comment  

__#3 GET A SINGLE POST COMMENT:__

A single object with the following properties:

UPON SUCCESS:
* `statusCode` - everything ok
* `results` - a single post comment

UPON FAILURE:
* `statusCode` - bad request

__#4 UPDATE A SINGLE POST COMMENT:__

A single object with the following properties:

UPON SUCCESS:
* `statusCode` - everything ok
* `results` - an object with two propterties:
  * `id` of the newly updated post comment
  * `location` - a url of the location of the updated post comment

UPON FAILURE:
* `statusCode` - bad request

__#5 DELETE A POST COMMENT:__

A single object with the following properties:

UPON SUCCESS:
* `statusCode` - Server has received the request but there is no information to send back

UPON FAILURE:
* `statusCode` - bad request

## How to Submit

Subit a pull request to this repo.
