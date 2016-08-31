var mongoose = require("mongoose");
var databaseName = process.env.AUTH_DB_NAME || "angular_auth";
mongoose.connect("mongodb://localhost/" + databaseName);
mongoose.set("debug",true);

var user = require("./user");
var todo = require("./todo");

module.exports.User = user;
module.exports.Todo = todo;

//Clear data for testing
module.exports.clearAllData = function(callback) {
  user.remove({}, function() {
    todo.remove({}, function() {
      callback();
    })
  });
};