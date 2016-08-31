var expect = require('chai').expect;
var isPrime = require('../script').isPrime;

describe("isPrime", function() {
    it("should return true for prime numbers", function(){
        expect(isPrime(7)).to.equal(true);
    });

    it("should return false for non-prime numbers", function() {
        expect(isPrime(8)).to.equal(false);
    });

    it("should return false for non-number inputs", function(){
        expect(isPrime("a")).to.equal(false);
    });
});
