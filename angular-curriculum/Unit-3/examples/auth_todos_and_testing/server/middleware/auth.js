var tokenLib = require('../lib/token');
var path = require('path');

module.exports = {
  checkToken: function(req,res,next) {
    try {
      var decoded = tokenLib.verify(req);
      if (decoded && decoded.id) {
        req.decoded_id = decoded.id;
        next();
      } else {
        res.status(401).send("Not Authorized");
      }
    } catch(err) {
      res.status(500).send(err.message);
    }
  },
  checkHeaders: function(req,res,next) {
    if(!req.headers["x-requested-with"]) {
      res.sendFile(path.join(__dirname, '../../client', 'index.html'));
    }
    else {
      next();
    }
  }
}