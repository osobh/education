var expect = require('chai').expect;
var reverseInPlace = require('../script').reverseInPlace;

describe("reverseInPlace", function() {

    it("return false if input is an number", function(){
        expect(reverseInPlace(8)).to.equal(false);
    });

    it("input array should be in reversed order", function(){
        expect(reverseInPlace([1,2,3,4])).to.deep.equal([4,3,2,1]);
    });


});