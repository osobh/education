var express = require("express");
var app = express();
var router = express.Router();
var knex = require("../db/knex");
var bcrypt = require("bcrypt");
var path = require("path");
var jwt = require('jsonwebtoken');
var secret = "awesomesauce";
var SALT_WORK_FACTOR = 10;
var token;

// only allow AJAX calls to prevent tampering in the browser bar
function checkHeaders(req,res,next){
  if(!req.headers["x-requested-with"]) {
    res.sendFile(path.join(__dirname, '../../client', 'index.html'));
  }
  else {
    next();
  }
}

// middleware to check the token against params to authorize a user
function checkToken(req,res,next){
  try {
    var decoded = jwt.verify(req.headers.authorization.split(" ")[1], secret);
    if(+req.params.id && decoded.id === +req.params.id){
      req.decoded_id = decoded.id;
      next();
    }
    else {
      res.status(401).send("Not Authorized");
    }
  } catch(err) {
    res.status(500).send(err.message);
  }
}

// middleware to check the token in general
function checkTokenForAll(req,res,next){
  try {
    var decoded = jwt.verify(req.headers.authorization.split(" ")[1], secret);
      next();
    }
   catch(err) {
    res.status(500).send(err.message);
  }
}

router.use(checkHeaders);

router.post('/signup',function(req,res){
  if(req.body.username.length < 4 || req.body.password.length < 4 ){
    res.status(400).send("Username and Password must be longer than 4 characters")
  }
  else {
    bcrypt.hash(req.body.password, 10, function(err,hashedPassword){
      knex('users').insert({
        username: req.body.username,
        password: hashedPassword
      }).returning("*").then(function(user){
        var listedItems = {id: user[0].id, username: user[0].username};
        token = jwt.sign({ id: user[0].id}, secret);
        res.json({token:token, user:listedItems});
      }).catch(function(err){
        res.status(400).send("Username/Password can't be blank and Username must be unique");
      })
    })
  }
});

router.post('/login',function(req,res){
  knex('users').where('username',req.body.username).first().then(function(user){
    if(!user){
      res.status(400).send("Invalid username or password");
    }
    else {
      bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
        if(err || !isMatch){
          res.status(400).send("Invalid username or password");
        }
        else{
          var listedItems = {id: user.id, username: user.username};
          token = jwt.sign({ id: user.id}, secret);
          res.json({token:token, user:listedItems});
        }
      })
    }
  }).catch(function(err){
    res.status(400).send(err);
  })
});

// this is for demonstration purposes....this is not a route you would have unless you SERIOUSLY secured it
router.get('/users', checkTokenForAll, function(req,res){
  knex('users').returning('username').then(function(users){
    res.status(200).send(users);
  }).catch(function(err){
    res.status(500).send(err);
  })
});

router.get('/users/:id', checkToken, function(req,res){
  knex('users').where('id', req.decoded_id).first().then(function(user){
    if (!user) res.status(401).send("Unauthorized");
    var listedItems = {id: user.id, username: user.username};
    res.status(200).send(listedItems);
  }).catch(function(err){
    if (err) res.status(500).send(err);
  })
});

router.put('/users/:id', checkToken, function(req,res){
  let err = ""
  if(req.body.username.length < 4){
    err = "Username and Password must be longer than 4 characters"
    return res.status(400).send(err)
  }
  knex('users').where('id', +req.decoded_id).update(req.body, "*").then(function(user){
    var listedItems = {id: user[0].id, username: user[0].username};
    res.status(200).send(listedItems);
  }).catch(function(){
    err = "Username already exists"
    res.status(400).send(err);
  })
});

router.delete('/users/:id', checkToken, function(req,res){
  knex('users').where('id', +req.decoded_id).del().then(function(user){
    if (!user) res.status(401).send(err);
    res.status(200).send("Removed");
  }).catch(function(err){
    res.status(500).send(err.data);
  })
});

module.exports = router;
