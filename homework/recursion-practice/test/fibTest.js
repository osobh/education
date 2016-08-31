var fibonacci = require('../scripts').fibonacci;
var expect = require('chai').expect;

describe("fibonacci", function() {
    it("Should return the correct value for the first 9 fibonacci numbers", function(){
        var fibTests = [1,1,2,3,5,8,13,21,34];
        for(var i = 0; i < fibTests.length; i++) {
            expect(fibonacci(i)).to.equal(fibTests[i]);
        }
    });
});
