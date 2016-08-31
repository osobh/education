var express = require('express'),
  app = express();

// WHEN a user visits the homepage (like http://localhost:3000)
app.get("/", function (req, res) {
  // THEN send back the response: 'Hello World'
  res.send("Hello World");
});

app.get("/add/:num1/:num2", function (req, res) {
	var num1 = req.params.num1;
	var num2 = req.params.num2;

  res.sendStatus(parseInt(num1) + parseInt(num2));
});

app.get("/sub/:num1/:num2", function (req, res) {
	var num1 = req.params.num1;
	var num2 = req.params.num2;

  res.sendStatus(parseInt(num1) - parseInt(num2));
});

app.get("/mult/:num1/:num2", function (req, res) {
	var num1 = req.params.num1;
	var num2 = req.params.num2;

  res.sendStatus(parseInt(num1) * parseInt(num2));
});

app.get("/div/:num1/:num2", function (req, res) {
	var num1 = req.params.num1;
	var num2 = req.params.num2;

  res.sendStatus(parseInt(num1) / parseInt(num2));
});




// Start the server and make our web app available on http://localhost:3000
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});