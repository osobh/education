var express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    morgan = require("morgan"),
    path = require("path"),
    todoRoutes = require("./routes/todos"),
    bodyParser = require("body-parser");

app.use('/css',express.static(path.join(__dirname, '../client/css')));
app.use('/js',express.static(path.join(__dirname, '../client/js')));
app.use('/templates',express.static(path.join(__dirname, '../client/js/templates')));
app.use(morgan("tiny"));
app.use(bodyParser.json());


app.use('/api/todos', todoRoutes);

app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});


app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});
