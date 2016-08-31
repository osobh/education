var express = require("express");
var router = express.Router();
var db = require("../models");

// INDEX GET /api/todos/
router.get('/', function(req,res){
  db.Todo.find({}, function(err,todos){
    res.status(200).send(todos);
  });
});

// CREATE POST /api/todos/
router.post('/', function(req,res){
  db.Todo.create(req.body, function(err, todo){
    res.status(201).send(todo);
  });
});

// GET SHOW /api/todos/:id

router.get('/:id', function(req,res){
  db.Todo.findById(req.params.id, function(err, todo){
    res.status(200).send(todo);
  });
});

// UPDATE PUT /api/todos/:id

router.put('/:id', function(req,res){
  db.Todo.findByIdAndUpdate(req.params.id, req.body, function(err,todo){
    res.status(200).send(todo);
  });
});

router.delete('/:id', function(req,res){
  db.Todo.findByIdAndRemove(req.params.id, function(err,todo){
    res.status(200).send(todo);
  });
});





module.exports = router;