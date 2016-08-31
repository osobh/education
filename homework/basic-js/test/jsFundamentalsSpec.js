var expect = require("chai").expect; //jshint ignore:line
var methods = require("../script");

describe("#sum", function(){
  it("adds two numbers", function(){
    expect(methods.sum(1,2)).to.equal(3);
  });
  it("works with negative numbers", function(){
    expect(methods.sum(-1,2)).to.equal(1);
  });
});

describe("#isEqual", function(){
  it("compares numbers", function(){
    expect(methods.isEqual(1,2)).to.equal(false);
  });
  it("compares strings", function(){
    expect(methods.isEqual(-1,-1)).to.equal(true);
  });
  it("compares booleans", function(){
    expect(methods.isEqual(true,true)).to.equal(true);
  });
  it("compares type and equality (using ===)", function(){
    expect(methods.isEqual("1",1)).to.equal(false);
  });
});

describe("#isEven", function(){
  it("returns true if a number is even", function(){
    expect(methods.isEven(2)).to.equal(true);
  });
  it("returns false if a number is not even", function(){
    expect(methods.isEven(3)).to.equal(false);
  });
});

describe("#isDivisible", function(){
   it("returns true if a number is divisible by the second argument", function(){
    expect(methods.isDivisible(2,2)).to.equal(true);
  });
  it("returns false if a number is not divisible by the second argument", function(){
    expect(methods.isDivisible(3,2)).to.equal(false);
  });
});

describe("#discountPercentage", function(){
  it("returns the discount for an amount", function(){
    expect(methods.discountPercentage(100,5)).to.equal(5);
  });
  it("returns a warning if the percentage is below 0", function(){
    expect(methods.discountPercentage(3,-5)).to.equal("please enter a number between 0 and 100");
  });
  it("returns a warning if the percentage is above 100", function(){
    expect(methods.discountPercentage(3,102)).to.equal("please enter a number between 0 and 100");
  });
});

describe("#isVowel", function(){
  it("returns true if a letter is a vowel", function(){
    expect(methods.isVowel("a")).to.equal(true);
  });
  it("returns false if a letter is not a vowel", function(){
    expect(methods.isVowel("z")).to.equal(false);
  });
});

describe("#celsiusToFahrenheit", function() {
  it('returns 86 when given 30', function() {
    expect(methods.celsiusToFahrenheit(30)).to.equal(86);
  });
  it('returns 23 when given -5', function() {
    expect(methods.celsiusToFahrenheit(-5)).to.equal(23);
  });
});

describe("#biggestOfThree", function() {
  it('returns 5 when given 1, 2, 5', function() {
    expect(methods.biggestOfThree(1, 2, 5)).to.equal(5);
  });
  it('returns 72 when given -3, 72, 42', function() {
    expect(methods.biggestOfThree(-3, 72, 42)).to.equal(72);
  });
});
// BONUS - write a test for the bonus question!
describe("#federalIncomeTaxCalculator", function(){
  it("returns 25000 when given 100000", function(){
    expect(methods.federalIncomeTaxCalculator(100000)).to.equal(25000);
  });
  it("returns 0.1 when given 1", function(){
    expect(methods.federalIncomeTaxCalculator(1)).to.equal(0.1);
  });
});