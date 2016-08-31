var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("HELLO WORLD!");
});

app.get('/:operation/:x/:y', function(req, res){
    var operators = {
        add: "+",
        sub: "-",
        mult: "*",
        div: "/"
    }
    var operator = operators[req.params.operation]

    try {
      var result = eval(req.params.x + operator + req.params.y);
      res.send(result.toString());
    }
    catch(error) {
      res.send(error);
    }

});

app.listen(3000, function(){
    console.log("STARTING SERVER ON 3000");
});
