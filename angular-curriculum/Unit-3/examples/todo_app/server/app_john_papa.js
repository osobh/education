var express = require("express");
var app = express();
var todoRoutes = require('./routes/todos');

var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");

app.use(express.static(path.join(__dirname, "../client_john_papa")));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/api/todos', todoRoutes);

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, "../client_john_papa", "index.html"));
});

app.listen(3000, function(){
  console.log("Server starting on port 3000");
});
