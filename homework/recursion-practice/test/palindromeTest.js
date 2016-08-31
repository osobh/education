var isPalindrome = require('../scripts').isPalindrome;
var expect = require('chai').expect;

describe("isPalindrome", function() {
    it("return true for palindromic strings", function(){
        var testCases = [
            'a',
            'dad',
            'mom',
            'racecar',
            'wasitabatisaw',
            'amanaplanacanalpanama'
        ];
        for(var i = 0; i < testCases.length; i++) {
            var word = testCases[i];
            expect(isPalindrome(word)).to.equal(true);
        }
    });

    it("return false for non palindromic strings", function(){
        var testCases = [
            'aab',
            'dap',
            'mon',
            'ratrace',
            '1122',
            'whats up g?'
        ];
        
        for(var i = 0; i < testCases.length; i++) {
            var word = testCases[i];
            expect(isPalindrome(word)).to.equal(true);
        }
    });
});
