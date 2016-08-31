var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  text: {
    type:String
  },
  done: {
    type: Boolean,
    default: false
  }
});

var Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;