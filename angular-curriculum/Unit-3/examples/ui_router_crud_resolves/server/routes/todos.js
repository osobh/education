var express = require("express");
var router = express.Router();
var db = require("../models");

router.get('/', function(req,res){
  db.Todo.find({},function(err,todos){
    if (err) res.status(500).send({error: "Oops! Something went wrong"});
    res.status(200).send(todos);
  });
});

router.post('/', function(req,res){
  db.Todo.create(req.body, function(err,todo){
    if (err) res.status(500).send({error: "Oops! Something went wrong"});
    res.status(201).send(todo);
  });
});

router.get('/:id', function(req,res){
  db.Todo.findById(req.params.id, function(err,todo){
    if (err) res.status(500).send({error: "Oops! Something went wrong"});
    res.status(200).send(todo);
  });
});

router.put('/:id', function(req,res){
  db.Todo.findByIdAndUpdate(req.params.id, req.body, function(err,todo){
    if (err) res.status(500).send({error: "Oops! Something went wrong"});
    res.status(201).send(todo);
  });
});

router.delete('/:id', function(req,res){
  db.Todo.findByIdAndRemove(req.params.id, function(err,todo){
    if (err) res.status(500).send({error: "Oops! Something went wrong"});
    res.status(204).send("Deleted");
  });
});

module.exports = router;