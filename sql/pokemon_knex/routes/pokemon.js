var express = require('express');
var router = express.Router();
var knex = require("../db/knex.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  knex("pokemon").select().from('pokemon').then(function(data) {
    res.send(data);
  })
});

module.exports = router;