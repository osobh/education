var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
var should = chai.should();
var server = require('../app');
var knex = require('../db/knex');
chai.use(chaiHttp);

function getPosts() {
  return knex('posts').select();
}

function getComments() {
  return knex('comments').select();
}

describe('Post Comments REST API', function() {
  beforeEach(function () {
    return knex.seed.run(knex.config);
  });
  it('should GET ALL comments for a post', function (done) {
    getPosts().then(function (posts) {
      var thePost=posts[1];
      chai.request(server).get('/api/v1/posts/'+thePost.id+'/comments')
        .end(function(err, response){
          response.should.have.status(200);
          response.body.should.have.status(200);
          response.body.results.should.have.length(2);
          response.body.results[0].should.have.property('post_id');
          response.body.results[0].should.have.property('commenter');
          response.body.results[0].should.have.property('body');
          done();
        });
    })
  });
  it('should POST a post comment', function(done) {
    var theComment = {
      'commenter': 'Oscar Wilde',
      'body': 'Be yourself; everyone else is already taken.'
    }
    getPosts().then(function (posts) {
      var thePost = posts[0];
      chai.request(server).post('/api/v1/posts/'+thePost.id+'/comments')
        .send(theComment).end(function(err, res){
          res.should.have.status(200);
          var id = res.body.results.id;
          res.body.should.have.status(201);
          var expectedLocation = 'http://localhost:3000/api/v1/posts/'+
          thePost.id+'/comments/'+id;
          res.body.results.location.should.equal(expectedLocation);
          done();
        });
    })
  });
  it('should GET a SINGLE post comment', function(done) {
    getComments().then(function (comments) {
      var theComment = comments[1];
      var post_id = theComment.post_id;
      chai.request(server).get('/api/v1/posts/'+post_id+'/comments/'+theComment.id)
        .end(function(err, res){
          res.should.have.status(200);
          res.body.should.have.status(200);
          res.body.results.should.be.a('object');
          res.body.results.id.should.equal(theComment.id);
          done();
        });
      })
    });
    it('should UPDATE a post comment', function(done) {
      getComments().then(function (comments) {
        var theComment = comments[0];
        var post_id = theComment.post_id;
        chai.request(server).put('/api/v1/posts/'+post_id+
        '/comments/'+theComment.id).send({commenter: 'Kurt Donald Cobain'})
          .end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.status(200);
            res.body.results.id.should.equal(theComment.id);
            var expectedLocation='http://localhost:3000/api/v1/posts/'+
            post_id+'/comments/'+theComment.id;
            res.body.results.location.should.equal(expectedLocation);
            done();
          });
      })
    });
    it('should DELETE a post comment', function(done) {
      getComments().then(function (comments) {
        var theComment = comments[0];
        var post_id = theComment.post_id;
        chai.request(server).delete('/api/v1/posts/'+post_id+'/comments/'+theComment.id)
          .end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.status(204);
            done();
          });
      });
    });
});
