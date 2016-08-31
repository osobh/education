# Fullstack CRUD

### Structuring a fullstack application

Now that we have a stronger understanding of how to wire up an express API, let's start moving our routing from the server to the client and leave our express backend as a simple API. In order to do this we need to do a couple of things, starting with configuring our express app, but before we do this, let's examine a new folder structure that we will be using going forward. This folder structure will let us separate the client side code (html/css/js) and our server side code. Folder structure is something that is done differently in all types of MEAN stack applications so it is very possible that you might not see this structure in future tutorials / applications. The structure is as follows

- firstapp
    - client
        + css/
        + js/
            * templates/
            * app.js
            * controllers.js
            * services.js
        + index.html
    - node_modules
    - server/
        + models/
        + routes/
        + app.js
    - package.json

### Some important changes on the backend

#### Package.json

First - in our package.json we will need to change the "main" starting point to be `"main": "server/app.js",` so that when we run `nodemon` from the root of our application it will know where to start the server.

#### server/app.js

Since we will be serving our static files from a different folder, we need to tell `express.static` where to find these files. We are also using `path` which is a built in node module. This means you have to add `path = require("path"),` at the top of your `app.js`. Your `express.static` code should look like this:

```js
app.use('/css',express.static(path.join(__dirname, '../client/css')));
app.use('/js',express.static(path.join(__dirname, '../client/js')));
app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')));
```

Since we will be sending JSON to our server when making POST requests, we will need to tell `body-parser` to parse JSON as well. In your `app.js` add the following code `app.use(bodyParser.json());`.

Finally, we need to make sure that when ANY route goes to our server (that is not part of the API), we send our `client/index.html` so that the angular router can take over. This means we need to add a catch-all route which looks like this `app.get('*')`. Also, since we will not be using a view engine, we do not need to render anything, we can simply send a file from the server using `res.sendFile`. Our catch all route should look like this:

```js
app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});
```

Remember that this route has to be the LAST route in your app.js so that requests made to the API can still run. Going forward, you should be using the express router so that you can encapsulate your routes. You can refresh your knowledge of the router [here](http://expressjs.com/guide/routing.html)(head towards the bottom of the page) or by reviewing the previous lesson.

### Wiring up the front end

This part should be much easier than the working on the backend since everything we are going to include here, we have seen before. If you are seeing errors like `Maximum Call Stack Exceeded` - make sure that your folder structure is correct and that your `express.static` code is correct as well (this happens when angular can not find something so it keeps making requests/ function calls and the stack overflows). Place your routing logic in the `app.js` and make sure to include `ngRoute` as a script in your `index.html` as well as a dependency to your module in your `app.js`

### Exercise

Answer the following questions:

- What is `express.static`?
- What does `bodyParser.json()` enable us to do?
- Why do we use a catch all route at the end of our app.js?
- What does the `path` module let us do?

### Exercise

1. Build a simple todo application using the `$http` service and the MEAN stack. A user should be able to see all todos, create new todos, edit a todo and delete a todo. The todos should be persistent and stored in a database. All routes should be handled by the angular router with the exception of your catch all and API. Use the express router for your API routes and use a service on the client side to manage your business logic.

1. Refactor your Icecream app from the previous lesson and move all of your view logic to the client side. The only routes you should have on your server are the catch all the API routes.
