var express = require("express")
var router = express.Router();
var db = require("../models");

router.get('', function(req, res) {
  db.Icecream.find({},function(error,icecreams){
    res.render("index", {icecreams: icecreams});
  });
});

router.get('/new', function(req, res) {
  res.render("new", {error: null});
});

router.post('', function(req, res) {
  db.Icecream.create(req.body.icecream, function(err, icecream) {
    if (err) {
      res.render("new", {error: err});
    } else {
      if (icecream && !icecream.imageUrl) {
        icecream.imageUrl = "http://www.purpledooricecream.com/content/images/mystery-icecream_website(1).jpg";
        icecream.save();
      }
      res.redirect('');
    }
  });
});

router.get('/:id', function(req, res) {
  db.Icecream.findById(req.params.id, function(err, icecream) {
    if (err) console.log(err);
    res.render('show', {icecream: icecream});
  });
});

router.get('/:id/edit', function(req, res) {
  db.Icecream.findById(req.params.id, function(err, icecream) {
    if (err) console.log(err);
    res.render('edit', {icecream: icecream, error: null});
  });
});

router.put('/:id', function(req, res) {
  db.Icecream.findByIdAndUpdate(req.params.id, req.body.icecream, function(err, icecream) {
    if (err) {
      res.render("edit", {icecream: icecream, error: err});
    } else {
      if (icecream && !icecream.imageUrl) {
        icecream.imageUrl = "http://www.purpledooricecream.com/content/images/mystery-icecream_website(1).jpg";
        icecream.save();
      }
      res.redirect('');
    }
  });
});

router.delete('/:id', function(req, res) {
  db.Icecream.findById(req.params.id, function(err, icecream) {
    err ? console.log(err) : icecream.remove();
    res.redirect('');
  });
});
