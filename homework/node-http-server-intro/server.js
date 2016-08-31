'use strict'
var http = require('http');
var fs = require("fs");
var url = require("url");
http.createServer(function(req, res) {

fs.readFile("about.html", function(err, data){
  

    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'
      console.log(req.url);
      var currentHTML = req.url;
      fs.readFile(__dirname + `/${currentHTML}`, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }

    else if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'
      var currentJS = req.url.split("/")[3];
      //console.log(typeof currentJS);
      fs.readFile(__dirname + `/assets/js/${currentJS}`, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });

    }

    else if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'
      var currentCSS = req.url.split("/")[3];
      fs.readFile(__dirname + `/assets/css/${currentCSS}`, function (err, data) {
        if (err) {
          console.log(err);
          res.writeHead(500, {'Content-Type': 'text/css'});
          res.write(err.toString());
        }else{
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
        }
        res.end();
      });

    }
});




}).listen(8000);

