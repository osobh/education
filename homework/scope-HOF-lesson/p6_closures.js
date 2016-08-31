/*
 When we use "higher order functions" the variables that exist
 in their "enclosing scope", sometimes called the "environment"
 are captured as well. Lets see an example of this:
*/

function enclosingFunction() {
    var counter = 0;

    return function() {
        counter += 1;
        console.log(counter);
    }
}

var closure = enclosingFunction();

// What will log on these lines?
closure();
closure();
closure();
closure();
console.log("==========")

// What about these?
var closureTwo = enclosingFunction();
closureTwo();
closureTwo();
closureTwo();
closureTwo();

// Does that result surprise you? Does it make sense? Discuss with
// your partner why you think this happens.