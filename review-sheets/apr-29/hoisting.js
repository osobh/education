"use strict"
// Hoisting is a process that applies to global scope
// as well as every function when it is called. This process
// allows JavaScript to allocate memory for variables and functions
// before a function or script runs.

// function declarations are hoisted in a way that makes them
// usable from anywhere, even prior to the line where the function
// is defined
hoistedWithDefinition();
function hoistedWithDefinition() {
    console.log("it works");
}

// This process happens inside functions as well
outer();
function outer() {
    inner();
    function inner() {
        console.log("it still works!");
    }
}

// variables are hoisted as well, but only the var declaration.
console.log(hoistAsUndefined); // undefined
var hoistAsUndefined = "some value";

// Now that the "assignment" statment (the '='' sign) has 
// occured, we will print "some value"
console.log(hoistAsUndefined);