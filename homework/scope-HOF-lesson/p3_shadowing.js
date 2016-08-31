/*
 We know that functions can access outer scopes. Consider
 these next two examples:
*/
var newGlobal = "Original Value";

// Notice that there is a "name collision"
// in both of these functions. 
function shadowOne(newGlobal) {
    var localOne = "Value from shadowOne";
    newGlobal = localOne;
}

function shadowTwo() {
    var localOne = "Value from shadowTwo";
    var newGlobal = localOne;
}

// Predict the output of each of the console.log statements below:
shadowOne(newGlobal);
console.log("newGlobal after shadowOne: " + newGlobal);

shadowTwo();
console.log("newGlobal after shadowTwo: " + newGlobal);

// In javascript, name collisions result in the 
// "most local" version of the variable being used.
// Consider this more extreme example:
function outer() {
    var newGlobal = "outer";
    
    function mid() {
        var newGlobal = "mid";

        function inner() {
            var newGlobal = "inner";
            console.log(newGlobal);
        }

        inner();
    }

    mid();
}

outer(); // What will log as a result of this function call?

// With a partner draw a diagram of "The Stack" as these functions
// execute. 

