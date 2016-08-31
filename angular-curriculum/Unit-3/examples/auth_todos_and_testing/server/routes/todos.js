var express = require("express");
var router = express.Router();
var db = require("../models");
var auth = require("../middleware/auth");

router.use(auth.checkHeaders);

function todoToJSON(mongoTodo) {
  return {id: mongoTodo._id,
          title: mongoTodo.title,
          text: mongoTodo.text,
          done: mongoTodo.done
         };
}

router.get('/', auth.checkToken, function(req, res) {
  db.Todo.find({}, function(err, todos) {
    if (err) return res.status(500).send(err);
    todos = todos.map(function(todo) {
      return todoToJSON(todo);
    })
    res.status(200).send(todos);
  });
});

router.post('/', auth.checkToken, function(req, res) {
  var todo = new db.Todo(req.body);
  todo.save(function(err, todo) {
    if (err) return res.status(400).send(err);
    res.send(todoToJSON(todo));
  });
});

router.delete('/:id', auth.checkToken, function(req, res) {
  db.Todo.findByIdAndRemove(req.params.id, function(err,todo){
    if (err) return res.status(500).send(err);
    res.send(todoToJSON(todo));
  });
});

router.put('/:id', auth.checkToken, function(req,res){
  db.Todo.findByIdAndUpdate(req.params.id, req.body, function(err,todo){
    if (err) return res.status(500).send(err);
    res.send(todoToJSON(todo));
  });
});

module.exports = router;