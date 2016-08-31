"use strict";
/*
  Sometimes, when programming, we *EXPECT* some errors to
  occur. One common example of this is when we take user input. 

  In node, we can pass data into our scripts using command line
  arguments. Try this:

  node p3_try_catch.js helloWorld
*/

// process.argv is a variable that node creates for us
// any time we run a script using node. What is in there?
if(false) console.log(process.argv);

// Lets change this to true to experience an error due
// to user input. 
if(false) {
    var arraySize = parseInt(process.argv[2]);
    var array = new Array(arraySize);
}

// Our code expected the user to input a number, but instead
// we put in "helloWorld". Sometimes we can predict that an
// error will occur and simply avoid it:
if(false) {
    var arraySize = parseInt(process.argv[2]);
    if(isNaN(arraySize)){
        console.log("I can't let you do that...");
    } 
    else {
        var array = new Array(arraySize);
        console.log(array);
    }
}

// Sometimes though, we won't be able to perform such a simple 
// test to predict failure. Other times we'll want to handle
// the error somewhere further up the call stack. For these 
// cases, we use something called a try/catch/finally block.
// Lets intentionally create an error to see how one works.
if(true) {
    try {
        new Array[-1]; // We already know this breaks
        // The question is, what happens then?
    }
    catch(err) {
        var allProps = getAllProperties(err);
        for(var idx in allProps) {
            var propName = allProps[idx];
            var propVal = err[propName];
            console.log(propName, propVal);
            console.log(); // for a newline
        }
    }
    finally {
        console.log("After all of that, this happens.");
    }
}

// You can ignore this function. I'm using it to print the inherited
// properties of an error object. Feel free to try and parse it, but 
// it's not crucial right now.
function getAllProperties(obj){
    var allProps = []
      , curr = obj
    do{
        var props = Object.getOwnPropertyNames(curr)
        props.forEach(function(prop){
            if (allProps.indexOf(prop) === -1)
                allProps.push(prop)
        })
    }while(curr = Object.getPrototypeOf(curr))
    return allProps
} 