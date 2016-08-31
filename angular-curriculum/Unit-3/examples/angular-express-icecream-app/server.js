var express = require('express'),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require('method-override'),
  db = require("./models"),
  morgan = require("morgan");

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/icecreams', function(req, res) {
  db.Icecream.find({},function(error,icecreams){
    res.render("index", {icecreams: icecreams});
  });
});

app.get('/icecreams/new', function(req, res) {
  res.render("new", {error: null});
});

app.post('/icecreams', function(req, res) {
  db.Icecream.create(req.body.icecream, function(err, icecream) {
    if (err) {
      res.render("new", {error: err});
    } else {
      if (icecream && !icecream.imageUrl) {
        icecream.imageUrl = "http://www.purpledooricecream.com/content/images/mystery-icecream_website(1).jpg";
        icecream.save();
      }
      res.redirect('/icecreams');
    }
  });
});

app.get('/icecreams/:id', function(req, res) {
  db.Icecream.findById(req.params.id, function(err, icecream) {
    if (err) console.log(err);
    res.render('show', {icecream: icecream});
  });
});

app.get('/icecreams/:id/edit', function(req, res) {
  db.Icecream.findById(req.params.id, function(err, icecream) {
    if (err) console.log(err);
    res.render('edit', {icecream: icecream, error: null});
  });
});

app.put('/icecreams/:id', function(req, res) {
  db.Icecream.findByIdAndUpdate(req.params.id, req.body.icecream, function(err, icecream) {
    if (err) {
      res.render("edit", {icecream: icecream, error: err});
    } else {
      if (icecream && !icecream.imageUrl) {
        icecream.imageUrl = "http://www.purpledooricecream.com/content/images/mystery-icecream_website(1).jpg";
        icecream.save();
      }
      res.redirect('/icecreams');
    }
  });
});

app.delete('/icecreams/:id', function(req, res) {
  db.Icecream.findById(req.params.id, function(err, icecream) {
    err ? console.log(err) : icecream.remove();
    res.redirect('/icecreams');
  });
});

app.get('/', function(req, res) {
  res.redirect('/icecreams');
});

app.get('*', function(req, res) { res.render('404'); });

var PORT = 3001;

app.listen(PORT, function() {
  console.log("Listening on localhost:", PORT); 
});
