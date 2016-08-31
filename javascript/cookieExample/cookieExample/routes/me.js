var express = require('express');
var router = express.Router();

router.use('/', function (req,res,next) {
	if(!req.session.views) res.redirect(401,'/')
	else next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.session.username = req.params.name;
  // res.redirect("/users/" + req.params.name);
  console.log(req.session.username);
  res.render('me', { username: req.session.username , views: (req.session.views || 0)+1});
});

// REALLY JUST CREATE A SEPERATE ROUTE THAN DO THIS AS CLINT HAD SHOWN YOU
// router.get('/me', function(req, res, next) {
//   res.send("Hello " + req.session.username);
// });

module.exports = router;
