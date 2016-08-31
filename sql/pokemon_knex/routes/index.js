var express = require('express');
var router = express.Router();
var knex = require("../db/knex.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  knex("pokemon").select().then(function(data) {
    res.render('index', { title: 'Express', pokemon: data });
  })
});

module.exports = router;
