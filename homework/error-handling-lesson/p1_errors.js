"use strict";
/* 
 In JavaScript, some things are "illegal" or "impossible" for the
 machine to compute. When we encounter such a situation the JS
 interpreter will "throw an error".

 Lets look at a few common error types:
*/

// Whats wrong with this code?
// What type of error?
// How do we fix it?
var someObject = {
    property : 7
}
// colon not equals
// Unexpected Token
// 
// 
// 
// Whats wrong with this code?
// What type of error?
// How do we fix it?
var undef;
console.log(undef); // define with a variable

// Whats wrong with this code?
// What type of error?
// How do we fix it?
var sensibleArray = new Array(1); //Range Error

// Whats wrong with this code?
// What type of error?
// How do we fix it?
var num = 4;
function bigNum(num){
	console.log(num);
};
//num is not a function
// Okay, define Error in JavaScript.
// When does one occur?
// What does an error tell us?