'use strict'
/* In JavaScript there are 3 kinds of scope:
 *   global, local, and block
 *
 * Block scope is new to JS 2015, and so requires the
 * "use strict" directive. Strict mode does *a lot*
 * so if you're curious about it, read more:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
 */

// Why are these two variables considered global?
var globalOne = "This variable is in 'global' scope";
var globalTwo = "This is also in global scope";

// The two above variables can be accessed 
// inside of any function in this script.
// Try it:
function hasOuterScope() {
    // Prove that we can access globalOne 
    // and globalTwo from inner scope.
    var newTest = globalOne;
    globalOne = "This variable is from Global and is changed";
    console.log(globalOne);
    console.log(globalTwo);
}

// This function contains a local variable.
function doesNotLeakVariables() {
    var localOne = 42;
}

// Decide with a teammate what will happen when this
// line is uncommented and executed, then try it!
// var newGlobal = localOne;

// What happened? Did you guess correctly? 
// Inner scopes are invisible to outer scopes!

// The term "local scope" always applies to functions. 
// The third kind of scope is called "block scope".
// Block scope behaves just like local scope, but for 
// ANY set of curly braces not just the ones for 
// a function's body. Contrast these two examples:

for(var x = 0; x < 10; x++) {
    // Do nothing, we care about i
}
console.log(x); // What will print?

for(let i = 0; i < 10; i++) {
    // Do nothing, we care about i
}
console.log(i) // What will print?
