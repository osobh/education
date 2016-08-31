/*
  In p1, you should have gotten a message similar to this:

==========================================
  var newGlobal = localOne;
                ^
  ReferenceError: localOne is not defined
==========================================

  What is a "ReferenceError"?
    The ReferenceError object represents an error when 
    a non-existent variable is referenced.
  
  For more details:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
 */

// With reference errors in mind, predict what will happen
// when lines 21 and 22 are executed.
var notDefined;
console.log("notDefined: " + notDefined);  // What happens?
console.log("nonExistent: " + nonExistent); // What happens?
// Comment out the line that causes an error to continue.

// Lets revisit the code from part 1, with a twist:
var newGlobal;

function accessOuterScope() {
    var localOne = 42;
    newGlobal = localOne;
}

doesNotLeakVariables();
console.log("newGlobal: " + newGlobal); // What will print here?

// Because local scopes have access to their "enclosing" scopes,
// we can access newGlobal from inside the function.

// Move on to part 3.
