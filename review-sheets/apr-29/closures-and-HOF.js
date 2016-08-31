// Higer order functions and closures are closely related concepts.
// A "higher order function" is any function which:
//    * returns another function or,
//    * accepts a function as a parameter.

// A closure is created when a function is used outside it's 
// original scope. What makes a closure special is that it maintains
// access the variables from the original scope. 

// This higher order function returns a function
// that represents a closure.
function generateCounter() {
    // We first create a local variable which will be 
    // "closed over"
    var count = 0;

    // Now we return an anonymous function
    return function() {
        // When we call this function, we can reference
        // the var counter from outer scope.
        count++;
        console.log(count);
    }
}

// Now, counter is a "closure". That means counter is
// a function which has access to and alters variables
// in its original environment.
var counter = generateCounter();
counter(); // 1
counter(); // 2
counter(); // 3 

// We can generate a brand new closure, which gets 
// it's OWN environment, with a new var count = 0;
var secondCounter = generateCounter();
secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

// The second style of Higher Order Function is often called 
// a "callback" function. Here we pass a function IN as a 
// parameter, and the function calls that "callback" function.

// We will use this function as a callback.
function anyOldFunction() {
    console.log("anyOldFunction has been called.");
}

// This function accepts a callback.
function envokeCallback(callback) {
    callback();
}

envokeCallback(anyOldFunction);

// We could also use our counter functions as callbacks!
envokeCallback(counter);
envokeCallback(secondCounter);
