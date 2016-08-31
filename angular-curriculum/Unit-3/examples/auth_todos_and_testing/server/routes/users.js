var express = require("express");
var router = express.Router();
var db = require("../models");
var auth = require("../middleware/auth");
var tokenLib = require("../lib/token");
var token;

router.use(auth.checkHeaders);

router.post('/signup',function(req,res){
  db.User.create(req.body, function(err,user){
    if(err)
      return res.status(400).send("Username/Password can't be blank and Username must be unique");
    var listedItems = {id: user._id, username: user.username};
    token = tokenLib.sign(user._id);
    res.json({token:token, user:listedItems});
  });
});

router.post('/login',function(req,res){
  db.User.authenticate(req.body, function(err,user){
    if(err) return res.status(400).send(err);
    if (!user) return res.status(400).send({error: "Username/password invalid"});
    var listedItems = {id: user._id, username: user.username};
    token = tokenLib.sign(user._id);
    res.json({token:token, user:listedItems});
  });
});

// this is for demonstration purposes....this is not a route you would have unless you SERIOUSLY secured it
router.get('/', auth.checkToken, function(req,res){
  // only send back usernames and id's
  db.User.find({}, 'username _id', function(err,users){
    if (err) res.status(500).send(err);
    res.status(200).send(users);
  });
});

router.get('/:id', auth.checkToken, function(req,res){
  db.User.findById(req.decoded_id, function(err,user){
    if (err) res.status(500).send(err);
    if (!user) res.status(401).send(err);
    var listedItems = {id: user._id, username: user.username};
    res.status(200).send(listedItems);
  });
});

router.put('/:id', auth.checkToken, function(req,res){
 db.User.findByIdAndUpdate(req.decoded_id, req.body, {new: true}, function(err,user){
   if (err) res.status(400).send(err);
   else {
    var listedItems = {id: user._id, username: user.username};
    res.status(200).send(listedItems);
   }
 });
});

router.delete('/:id', auth.checkToken, function(req,res){
  db.User.findByIdAndRemove(req.decoded_id, function(err,user){
    if (err) res.status(500).send(err);
    if (!user) res.status(401).send(err);
    res.status(200).send("Removed");
  });
});

module.exports = router;
