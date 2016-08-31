var jwt = require('jsonwebtoken');
var secret = "awesomesauce";

module.exports = {
  verify: function(req) {
    if (!!req.headers.authorization) {
      return jwt.verify(req.headers.authorization.split(" ")[1], secret);
    }
  },
  sign: function(id) {
    return jwt.sign({id: id}, secret);
  }
};