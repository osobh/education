'use strict'
let express = require('express');
let router = express.Router();
let knex = require("../db/knex.js");
let redis = require("../db/redis.js");
let bcrypt = require("bcrypt")

router.use(function (req, res, next) {
  res.locals.error = "";
  next();
})

router.get("/login", function (req,res) {
  res.render('login');
});

router.post("/login", function (req,res) {
  console.log(req.body)
  if (req.body.password && req.body.phone) {
    knex('users').select().where({phone: req.body.phone}).then(function (users) {
      if (users.length > 0 && bcrypt.compareSync(req.body.password, users[0].password)) {
        req.session.user = users[0];
        res.redirect("/")
      } else {
        res.locals.error = "User/Password do not match"
        res.render('login');
      }
    })
  }
});

router.get("/logout", function (req,res) {
  req.session.user = null;
  res.redirect("/");
})

router.get("/signup", function (req,res) {
  res.render('signup');
});

router.post("/signup", function (req,res) {
  var currentPhone = req.body.phone;
  if (req.body.password === req.body.verifypassword && req.body.phone) {
    console.log("we have the pass " + req.body.password + "we have the phone number " + currentPhone);
    knex('users').where('phone',currentPhone)
    .then(function (users) {
      console.log("literaly anything", users)
      if (users.length !== 0) {
        res.locals.error = "That phone number has already been taken!";
        res.render("signup");
      } else {
        let hashedPassword = bcrypt.hashSync(req.body.password, 10);
        knex('users').insert({phone: currentPhone, password: hashedPassword, verified: false}).returning("*").then(function (user) {
          req.session.user = user[0];
          console.log(req.session.user, "Trying to get all the session information");
          res.redirect("/verify");
        });
      }
    })
  } else {
    res.locals.error = "Passwords did not match!"
    res.render("signup")
  }

});

module.exports = router;
