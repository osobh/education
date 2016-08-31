var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  task: String
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

