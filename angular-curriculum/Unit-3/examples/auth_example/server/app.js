var express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    morgan = require("morgan"),
    path = require("path"),
    routes = require('./routes/users.js'),
    bodyParser = require("body-parser");

app.use('/css',express.static(path.join(__dirname, '../client/css')));
app.use('/js',express.static(path.join(__dirname, '../client/js')));
app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')));

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Server is listening on port " + port);
});
