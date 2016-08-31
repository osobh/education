'use strict'

/*

Write a function that takes in a string in binary
And returns a number representing that number in decimal

Usage:

binaryToDecimal("010") => 2

You must not use `toString` or `parseInt` or any other
built-in method in javascript that could aid in the conversion.

*/

function binaryMath(){

    var ConvertBase = function (num) {
        return {
            from : function (baseFrom) {
                return {
                    to : function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
        
    // binary to decimal
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };
};

module.exports = function(str) {
}
