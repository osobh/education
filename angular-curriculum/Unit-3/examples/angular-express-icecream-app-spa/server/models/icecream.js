var mongoose = require("mongoose");
var icecreamSchema = new mongoose.Schema({
  flavor: { type: String, required: true, trim: true},
  description: String,
  imageUrl: String
});

var Icecream = mongoose.model("icecream", icecreamSchema);

module.exports = Icecream;