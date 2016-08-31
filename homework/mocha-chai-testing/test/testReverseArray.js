var expect = require('chai').expect;
var reverseArray = require('../script').reverseArray;

describe("reverseArray", function() {

    it("should return false for non-number inputs", function(){
        expect(reverseArray("a")).to.equal(false);
    });

    it("should return true for reversed array elements", function(){
        expect(reverseArray([1,2,3,4])).to.deep.equal([4,3,2,1]);
    });


});