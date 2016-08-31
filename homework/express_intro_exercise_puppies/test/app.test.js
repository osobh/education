var expect = require('chai').expect;
var code = require('../app');
var request = require('supertest');

describe('GET /', function() {
  before(function() {
    code.puppies.push({name: "Whiskey", age: 2, id: 1});
  });

  after(function() {
    code.puppies.pop();
  });

  it('should display information about all the puppies', function(done) {
    request(code.app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.text.toLowerCase()).to.contain('name');
          expect(res.text.toLowerCase()).to.contain('age');
          expect(res.text.toLowerCase()).to.contain('whiskey');
          done();
        }
      });

  });
});

describe('GET /puppies/new', function() {
  it('should display a form to save a new puppy', function(done) {
    request(code.app)
      .get('/puppies/new')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.text.toLowerCase()).to.contain('form');
          expect(res.text.toLowerCase()).to.contain('name');
          expect(res.text.toLowerCase()).to.contain('age');
          done();
        }
      });
  });
});

describe('GET /puppies', function() {

  after(function() {
    code.puppies.pop();
    code.puppies.pop();
  });

  it('should save the puppy to an array', function(done) {
    request(code.app)
      .get('/puppies?name=fido&age=8')
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.status).to.equal(302);
          expect(code.puppies[0].name).to.equal('fido');
          expect(code.puppies[0].age).to.equal('8');
          done();
        }
      });
  });

  it('should save the puppy with a unique id which increments', function(done) {
    request(code.app)
      .get('/puppies?name=lassie&age=2')
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(code.puppies).to.deep.include.members([{
            name: 'fido',
            age: '8',
            id: 1
          }, {
            name: 'lassie',
            age: '2',
            id: 2
          }]);
          done();
        }
      });
  });
});

describe('GET /puppies/:id', function() {

  before(function() {
    code.puppies.push({
      name: "Whiskey",
      age: 2,
      id: 1
    });
    code.puppies.push({
      name: "Huxley",
      age: 6,
      id: 2
    });
  });

  after(function() {
    code.puppies.pop();
    code.puppies.pop();
  });

  it('displays information on the puppy with the given id', function(done) {
    request(code.app)
      .get('/puppies/1')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.text.toLowerCase()).to.contain('whiskey');
          expect(res.text.toLowerCase()).not.to.contain('huxley');
          done();
        }
      });
  });
});

describe('GET /about', function() {
  it('displays info about your puppies app', function(done) {
    request(code.app)
      .get('/about')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.text.toLowerCase()).to.contain('about');
          done();
        }
      });
  });
});

describe('GET /contact', function() {
  it('diplays contact info', function(done) {
    request(code.app)
      .get('/contact')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.text.toLowerCase()).to.contain('contact');
          done();
        }
      });
  });
});