'use strict'

const expect = require("chai").expect
const lib = require('../../src/recursion/recursion')

describe('factorial', function() {

  it('correctly handles the base case', function() {
    expect(lib.factorial(0)).to.eql(1);
  });

  it('correctly computes 1! = 1', function() {
    expect(lib.factorial(1)).to.eql(1);
  });

  it('correctly computes 2! = 2', function() {
    expect(lib.factorial(2)).to.eql(2);
  });

  it('correctly computes 3! = 6', function() {
    expect(lib.factorial(3)).to.eql(6);
  });

  it('correctly computes 4! = 24', function() {
    expect(lib.factorial(4)).to.eql(24);
  });

  it('correctly computes 5! = 120', function() {
    expect(lib.factorial(5)).to.eql(120);
  });

  it('correctly computes 10! = 3628800', function() {
    expect(lib.factorial(10)).to.eql(3628800);
  });

  it('correctly computes 15! = 1307674368000', function() {
    expect(lib.factorial(15)).to.eql(1307674368000);
  });

  it('correctly computes 20! = 2432902008176640000', function() {
    expect(lib.factorial(20)).to.eql(2432902008176640000);
  });

  it('correctly computes 50! = 3.0414093201713376e+64', function() {
    expect(lib.factorial(50)).to.eql(3.0414093201713376e+64);
  });
});
