'use strict';


var db = require('../../server/models');

describe('Users', function() {
  beforeEach(function(done) {
    db.clearAllData(done);
  });
  describe('login', function() {
    it('should have email and password form', function() {
      browser.get('/login');
      var emailInput = element(by.id('username'));
      var passwordInput = element(by.id('password'));

      expect(emailInput.isPresent()).toBeTruthy();
      expect(passwordInput.isPresent()).toBeTruthy();
    });

    describe('existing user', function() {
      var createdUser = {username: "testing", password: "password"};

      beforeEach(function(done) {
        db.User.create(createdUser, function(err, user) {
          if (err) return done.fail(err);
          done();
        });
      });

      it('allows an existing user to authenticate', function(done) {
        browser.get('/login');
        var form = element(by.css('form'));
        var emailInput = element(by.id('username'));
        var passwordInput = element(by.id('password'));

        emailInput.sendKeys(createdUser.username);
        passwordInput.sendKeys(createdUser.password);
        form.submit();
        browser.getCurrentUrl().then(function(url) {
          expect(url).toEqual('http://localhost:3000/users');;
          done();
        });
      });
      

    })
  });
});
