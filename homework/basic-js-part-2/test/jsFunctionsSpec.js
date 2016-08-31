var expect = require("chai").expect //jshint ignore:line
var methods = require("../script");

describe("#countChar", function(){
  it("returns the number of times a character exists in a string", function(){
    expect(methods.countChar("awesome","e")).to.equal(2);
  });
  it("distinguishes between upper and lower case", function(){
    expect(methods.countChar("Student","s")).to.equal(0);
  });
});

describe("#range", function(){
  it("returns a range of numbers based on a start end and step", function(){
    expect(methods.range(1,10,1)).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });
  it("returns a range of numbers based on a start end and step", function(){
    expect(methods.range(0,10,5)).to.eql([0,5,10]);
  });
  it("works with negative numbers", function(){
    expect(methods.range(10,5,-5)).to.eql([10,5]);
  });
});

describe("#sum", function(){
  it("returns the sum of all the values in an array", function(){
    expect(methods.sum([1,2,3,4])).to.equal(10);
  });
  it("works with negative numbers", function(){
    expect(methods.sum([1,2,3,-4])).to.equal(2);
  });
});

describe("#reverseArray", function(){
  it("reverses an array by creating a new array", function(){
    expect(methods.reverseArray([5,4,3,2,1])).to.eql([1,2,3,4,5]);
  });
});

describe("#reverseInPlace", function(){
  it("reverses an array in place (without creating a new array)", function(){
    expect(methods.reverseInPlace([5,4,3,2,1])).to.eql([1,2,3,4,5]);
  });
});

describe("#isPalindrome", function(){
  it("returns true if a string is a palendrome", function(){
    expect(methods.isPalindrome("tacocat")).to.equal(true);
  });
  it("returns false if a string is a not palendrome", function(){
    expect(methods.isPalindrome("newborn")).to.equal(false);
  });
  it("ignores spacing and capitalization", function(){
    expect(methods.isPalindrome("a Man A Plan A Canal Panama")).to.equal(true);
  });
});

describe("#isPrime", function(){
  it("returns false if the number is not prime", function(){
    expect(methods.isPrime(4)).to.equal(false);
  });
  it("returns true if the number is prime", function(){
    expect(methods.isPrime(3)).to.equal(true);
  });
  it("understands that 1 is not a prime number", function(){
    expect(methods.isPrime(1)).to.equal(false);
  });
});

describe("#findLongestWord", function(){
  it("finds the longest word", function(){
    expect(methods.findLongestWord(["test","awesome","thing","fun"])).to.equal("awesome");
  });
});

describe("#filterLongWords", function(){
  it("returns an array with words longer than the second parameter", function(){
    expect(methods.filterLongWords(["first", "second", "third", "fourth"],5)).to.eql(["second","fourth"]);
  });
});

describe("#createObject", function(){
  it("creates an object based on the two arguments", function(){
    expect(methods.createObject(1,"hi")).to.eql({"1":"hi"});
  });
  it("does not matter what the data types are", function(){
    expect(methods.createObject(undefined,null)).to.eql({"undefined":null});
  });
});

describe("#numberObject", function(){
  it("returns an object with values in multiples of 5 and keys incrementing by 1", function(){
    expect(methods.numberObject(5)).to.eql({0:0,1:5,2:10,3:15});
  });
});

describe("#reverseString", function(){
  it("returns the reversed string", function(){
    expect(methods.reverseString("awesome")).to.equal("emosewa");
  });
});

describe("#youngestPerson", function(){
  it("returns the name of the lowest age in the array of objects", function(){
    expect(methods.youngestPerson([{name:"tom",age:2},{name:"bob",age:12}])).to.include("tom");
  });
});

describe("#keys", function(){
  it("returns an array of the keys in an object", function(){
    expect(methods.keys({first:"awesome", 1:"sweet"})).to.include("first", "1");
  });
  it("returns an empty array if there are no keys", function(){
    expect(methods.keys({})).to.eql([]);
  });
});
