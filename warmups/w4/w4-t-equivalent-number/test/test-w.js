var expect = require('chai').expect;
var equivalent = require('../solution').equivalent;

describe('equivalent function', function() {
  it('should return a Boolean', function() {
    expect(equivalent(23,42)).to.be.a('boolean');
  });
  it('should return false for number that are not equivalent', function() {
    expect(equivalent(23,42)).to.be.false;
    expect(equivalent(203,003)).to.be.false;
  });
  it('should return true for an equivalent number', function() {
    expect(equivalent(23,32)).to.be.true;
<<<<<<< HEAD
    expect(equivalent(20000003,32)).to.be.false;
=======
    expect(equivalent(20000003,320)).to.be.true;
>>>>>>> f506a87b6cd681e5b9f4b9853888141d521a4ca2
  });
});