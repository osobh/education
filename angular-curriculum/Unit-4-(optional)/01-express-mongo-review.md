# Express Setup

In this unit, we'll be building an AngularJS app on top of Node and Express:

**Frontend**

* AngularJS
* Bootstrap

**Backend**

(Your computer should already have Node, MongoDB, and nodemon installed).

* Node & Express (server)
* MongoDB & Mongoose (database)


Let's start in terminal and create a new node and express app.

```
$ mkdir angular-express-icecream-app
$ cd angular-express-icecream-app
$ touch server.js
$ npm init
```
After you get through the prompts we want to add express, and some key middlewares:

 * body-parser
 * method-override
 * morgan (to automatically log requests)
 * mongoose
 
```
$ npm install --save express mongoose body-parser method-override morgan ejs
```

You should already be familiar with what is happening here.  We're both installing the middlewares and tracking it inside of the package.json file for reference.  This means you don't have to include the entire contents of the node_modules folder to github for others to clone and run your app.  People cloning/forking your repository will just need to make sure that they run `npm install`.  

If you are pushing this app up to a repository, don't forget to create a .gitignore file and include the node_modules folder:

```
$ touch .gitignore
$ echo "node_modules" >> .gitignore
```

Let's setup the middlewares in our server.js file.

**server.js:**

```javascript
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require('method-override'),
morgan = require("morgan")
```

Now we'll add a route and set the port.

**server.js:**


```javascript
 . . .
 
app.get('/', function(req,res){
  res.send("Hello!")
});

var PORT = 3001;

app.listen(PORT, function() {console.log("Listening on localhost:", PORT) });
```

Test what we have so far by running nodemon in your app directory in terminal:

```
$ nodemon
```

Check `localhost:3001` in your browser to see "Hello!".

Fix any errors if there are any, and then proceed to setup the middlewares on the app, **server.js:**

```javascript
var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require('method-override'),
morgan = require("morgan")
 
app.set('view engine', 'ejs'); 
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

 . . . 
 
```


## Database Setup

Make sure you have mongoDB running on your machine in the background, in terminal:

```
$ mongod
```

Go in to you app directory and create a models folder.  We're going to create a single model for this exercise called `icecream`.  

**models/icecream.js:** 

```javascript
var mongoose = require("mongoose");

var icecreamSchema = new mongoose.Schema({
                    flavor: { type: String, required: true, trim: true },
                    description: String,
                    imageUrl: String
                });

var Icecream = mongoose.model("icecream", icecreamSchema);

module.exports = Icecream;
```

As a best practice we'll create a `models/index.js` to connect to our database and include all of our models, **models/index.js:**

```javascript
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/icecream-db");

mongoose.set("debug", true);

module.exports.Icecream = require("./icecream");
```

Now we need to add our database inside of our `server.js`, add it where all of the other require lines are.

**server.js:**

```javascript
 . . . 
 db = require("./models");
 . . . 
```

**EXERCISE** Use this setup to build a simple CRUD app for your Ice cream model. Try not to look at any old notes or apps. You should also use partials for your header and footer.

**Bonus** Add some error handling to your app. This includes both rendering errors on form submissions, and including a 404 page.

**Bonus** Even though the `imageUrl` isn't mandatory, include a default image in your app that will get stored to your database in the event that the user doesn't specify an image url.


