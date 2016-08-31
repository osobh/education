var app = require('../../server/app')
var db = require('../../server/models');
var request = require('supertest')(app)


describe("users", function() {

  var userJson = {username: "usertest554", password: "password"};

  beforeEach(function(done) {
    db.clearAllData(done);
  });

  describe("signup", function() {

    it("should return 400 if a ", function(done) {
      request.post('/api/users/signup')
        .set('x-requested-with', 'XMLHttpRequest')
        .send({password: "testing"})
        .expect(400)
        .end(function(err, res) {
          if (err) return done.fail(err);
          done();
        });
    });

    it("creates a new user with username and password", function(done) {
      request.post('/api/users/signup')
        .set('x-requested-with', 'XMLHttpRequest')
        .send(userJson)
        .expect(200)
        .end(function(err, res) {
          if (err) return done.fail(err);
          expect(res.body.token).toBeTruthy();
          done();
        });
    });
  });

  describe("login", function() {

    beforeEach(function(done) {
      db.User.create(userJson, function(err, user) {
        if (err) return done.fail(err);
        done();
      });
    })

    it("should authenticate if the username and password is provided", function(done) {
      request.post('/api/users/login')
        .set('x-requested-with', 'XMLHttpRequest')
        .send(userJson)
        .expect(200)
        .end(function(err, res) {
          if (err) return done.fail(err);
          expect(res.body.token).toBeTruthy();
          done();
        });
    });

    it("should not authnticate with a bad password", function(done) {
      request.post('/api/users/login')
        .set('x-requested-with', 'XMLHttpRequest')
        .send({username: userJson.username, password: "Password"})
        .expect(400)
        .end(function(err, res) {
          if (err) return done.fail(err);

          expect(res.body.error).toBeTruthy();
          done();
        });
    })
  });
});