var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/angular_auth");
mongoose.set("debug",true);

module.exports.User =require("./user");
