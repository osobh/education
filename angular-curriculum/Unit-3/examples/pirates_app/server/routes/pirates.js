const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/', function(req, res) {
  knex('pirates').then(function(pirates) {
    res.send(pirates);
  }).catch(function(err) {
    res.send(err);
  });
});

router.get('/:id', function(req, res) {
  knex('pirates')
    .where({id: req.params.id})
    .first()
    .then(function(pirate) {
      res.send(pirate);
    }).catch(function(err) {
      res.send(err);
    })
})

router.post('/', function(req, res) {
  knex('pirates').insert(req.body, '*').then(function(pirate) {
    res.send(pirate);
  }).catch(function(err) {
    res.send(err);
  });
});

router.delete('/:id', function(req, res) {
  knex('pirates').where('id', req.params.id).first().del().then(function() {
    res.send("Pirate Deleted!");
  }).catch(function(err) {
    res.send(err);
  });
});

router.put('/:id', function(req, res) {
  knex('pirates')
    .where('id', req.params.id)
    .update(req.body)
    .then(function() {
      res.send("Pirate Updated!")
    }).catch(function(err) {
      res.send(err);
    });
});

module.exports = router;