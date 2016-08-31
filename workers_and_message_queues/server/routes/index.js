'use strict'
let express = require('express');
let router = express.Router();
let redis = require("../db/redis.js");
let Promise = require("bluebird");

router.get("/", function(req, res) {
  res.render("index", {user: req.session.user || null});
})


router.use(function (req, res, next) {
  if (!req.session.user) {
    res.redirect("/");
  } else {
    next();
  }
});


router.get('/reminders', function(req, res, next) {
  Promise.join(
    redis.lrangeAsync(["reminders:morning", 0, -1]),
    redis.lrangeAsync(["reminders:lunch", 0, -1]),
    redis.lrangeAsync(["reminders:evening", 0, -1]),
    redis.lrangeAsync(["reminders:late", 0, -1]),
    function(morning, lunch, evening, late) {
      morning = morning.map(JSON.parse)
      lunch = lunch.map(JSON.parse)
      evening = evening.map(JSON.parse)
      late = late.map(JSON.parse)

      res.render("reminders", {morning: morning, lunch: lunch, evening: evening, late: late})
    }
  );
});

router.post("/reminders", function (req, res, next) {
  let message = {
    phone: req.session.user.phone,
    body: req.body.body || "Generic Reminder",
    title: req.body.title || ""
  };
  if (!req.body.time) req.body.time = "morning";

  redis.rpush(["reminders:" + req.body.time, JSON.stringify(message)], function(err, replies) {
    res.redirect("/reminders")
  });
});

router.get("/verify", function (req,res) {
  console.log(req.session.user.phone, "Here is the users phone");
  let randomCode = Math.floor(Math.random()*10000+1);
  // console.log(randomCode, "This is the Verify route, and random code Generator.");
  let userPhone = req.session.user.phone;
  
  let verify = {
    phone: req.session.user.phone,
    code: randomCode
  }
  //JSON.stringify(verify)
  redis.rpushAsync(["userInfo:", JSON.stringify(verify)]).then(function(err, replies) {
  res.render('verify'); 
});
});

router.post("/verify", function (req,res) {
  //  let verifyCode = req.body.code;
  console.log(verifyCode);
  redis.getAsync(["verification:"+ req.session.user.phone]).then(function(err, code) {
          if(parseInt(code,10) === parseInt(verifyCode,10)){
              knex('users').where({id:userId}).update({verified: true}).then(function(){
                res.redirect('/users/login');
              });
            } 
          });
          console.log("have updated the verified value for the user and now they can proceed to login");
          console.log(verifyCode);
});
          

module.exports = router;