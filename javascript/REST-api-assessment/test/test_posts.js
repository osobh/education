var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = require('assert');
var should = chai.should();
var server = require('../app');
var knex = require('../db/knex');
chai.use(chaiHttp);

function getPosts(){
  return knex('posts').select();
}

describe('Posts REST API', function() {
  beforeEach(function () {
    return knex.seed.run(knex.config);
  });
  it('should GET ALL posts on /api/v1/posts', function (done) {
    chai.request(server).get('/api/v1/posts').end(function(err, res){
      res.body.should.have.status(200);
      res.should.be.json;
      res.body.results.should.have.length(3);
      res.body.results[0].should.have.property('id');
      res.body.results[0].should.have.property('author');
      res.body.results[0].should.have.property('body');
      done();
    });
  });
  it('should POST a SINGLE post to /api/v1/posts', function(done) {
    var thePost = {
      "author": "J.D Salinger",
      "body": "I like it when somebody gets ecited about something. It's nice."
    }
    chai.request(server).post('/api/v1/posts').send(thePost).end(function(err, res){
      var id = res.body.results.id;
      res.body.should.have.status(201);
      res.body.results.location.should.equal('http://localhost:3000/api/v1/posts/'+id);
      done();
    });
  });
  it('should GET a SINGLE post from /api/v1/posts/:id', function(done) {
    getPosts().then(function (posts) {
      var thePost = posts[0];
      chai.request(server).get('/api/v1/posts/'+thePost.id).end(function(err, res){
        res.should.have.status(200);
        res.body.results.author.should.equal(thePost.author);
        res.body.results.body.should.equal(thePost.body);
        done();
      });
    })
  });
  it('request should return status code 400 if post not found', function(done) {
    chai.request(server).get('/api/v1/posts/0').end(function(err, res){
      res.body.should.have.status(400);
      done();
    });
  });
  it('should UPDATE a SINGLE post to /api/v1/posts/:id', function(done) {
    getPosts().then(function (posts) {
      var thePost = posts[0];
      chai.request(server).put('/api/v1/posts/' + thePost.id)
      .send({ author: '"Coco" Chanel'}).end(function(err, response){
        response.should.have.status(200);
        response.body.should.have.status(200);
        response.body.results.id.should.equal(thePost.id);
        response.body.results.location.should.equal('http://localhost:3000/api/v1/posts/'+thePost.id);
        done();
      });
    })
  });
  it('UPDATE request should return status code 400 if post not found', function(done) {
    chai.request(server).put('/api/v1/posts/0').end(function(err, res){
      res.body.should.have.status(400);
      done();
    });
  });
  it('should DELETE a SINGLE post at /api/v1/posts/:id', function(done) {
    getPosts().then(function (posts) {
      var thePost = posts[0];
      chai.request(server).delete('/api/v1/posts/'+thePost.id)
        .end(function(err, response){
          response.should.have.status(200);
          response.body.should.have.status(204)
          done();
        });
    })
  });
  it('DELETE request should return status code 400 if post not found', function(done) {
    chai.request(server).delete('/api/v1/posts/0').end(function(err, res){
      res.body.should.have.status(400);
      done();
    });
  });
});
