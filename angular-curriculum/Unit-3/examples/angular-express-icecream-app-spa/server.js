var express = require('express'),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require('method-override'),
  db = require("./models"),
  path = require("path"),
  icecreamsRoutes = require("./routes/icecreams"),
  morgan = require("morgan");

app.use('/css',express.static(path.join(__dirname, '../client/css')));
app.use('/js',express.static(path.join(__dirname, '../client/js')));
app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')));

app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/icecreams', icecreamsRoutes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

var PORT = 3001;

app.listen(PORT, function() {
  console.log("Listening on localhost:", PORT);
});
