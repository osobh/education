
var express = require("express");
var app = express();
var puppies = [];

app.use(express.static('views/puppies/files/'));

app.set('view engine', 'ejs');


app.get("/", function (req, res) {
res.render('puppies/main', {allPups: puppies.join(" ")});
});

app.get("/puppies/new", function (req, res) {
  res.render('puppies/form', {puppyID: puppies.length});
  
});

app.get("/puppies", function (req, res) {
  var puppyName = req.query.name;
  var puppyNewID = req.query.id;
  var puppyAge = req.query.age;
  puppies.push([puppyNewID,puppyName,puppyAge]);
  //console.log(puppies);
  res.render('puppies/response', {puppyResponse: "Thank you for submitting your puppy, we will notify you when it's ready!"});
  res.redirect('/');
});

app.get("/puppies/:id", function (req, res) {

	var incomingID = req.params.id;
	res.render('puppies/id', {puppyFoundID: puppies[incomingID]});
	// res.send("we've found your puppy " + puppies[incomingID]);
  //console.log(incomingID);
});


app.get("/about", function (req, res) {
  // THEN send back the response: 'Hello World'
  res.render('site/about');
});

app.get("/contact", function (req, res) {
  // THEN send back the response: 'Hello World'
  res.render('site/contact');
});

// Start the server and make our web app available on http://localhost:3000
app.listen(8080, function () {
  console.log("Starting a server on localhost:8080");
});



module.exports = {
  app,
  puppies
};