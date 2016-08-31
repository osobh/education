var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req,res,next){
    req.session.views = 'null';
    res.redirect('/');
});
module.exports = router;