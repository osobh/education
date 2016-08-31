var mongoose = require("mongoose");
mongoose.set("debug",true);
mongoose.connect("mongodb://localhost/angular_todo");

module.exports.Todo = require("./todo");