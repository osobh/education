"use strict"
// Scope Review Sheet!

// Variables declared outside of any function are said
// to be "global" and can be used anywhere.
var accessEverywhere = "I can be used or changed from anywhere";

// Every function creates a unique scope when it is called
// this scope is called "local" scope. Variables in local scope
// are said to be "local" to that particular function.
function uniqueScope(paramsAreLocal) {
    var varsAreLocal = 10;

    // If statements in JS2015 can create "block" scope 
    // when we "use strict" and the let keyword. 
    if(true) {
        let letsAreBlock = "Not available anywhere but here";
        varsAreLocal = "Changed the value";
    }
    // For loops, else statements, and really anything using 
    // curly braces can be used to create "block" scopes in 
    // JS2015.  

    // Inner (sometimes called nested) fuctions have 
    // access to the outer scopes, but outer scopes 
    // cannot see down into the inner function's scope
    function innerFunction() {
        var innerMostLocal = "Cannot be used in uniqueScope or Global"
        varsAreLocal = "Changed again";
    }

    console.log(varsAreLocal);
    innerFunction();
    console.log(varsAreLocal);
}

uniqueScope();

// These are not available on this line!
// varsAreLocal
// paramsAreLocal