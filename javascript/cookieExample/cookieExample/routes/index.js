var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next){
    req.session.views = (parseInt(req.session.views || 0)+1);
    res.render('index', { title: 'Express', views: (req.session.views || 0)});
});

module.exports = router;
