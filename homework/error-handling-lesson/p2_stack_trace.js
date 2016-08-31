/* 
 When an error occurs (programmers say an error is "thrown"),
 information about the error is typically printed to the console
 for the developer. This information comes in a format called
 a "stack trace".

 Look at this code, walk through it's execution path, then
 run it and try to make sense of the "stack trace" you see.
*/

first();

function first() {
    second();
}

function second() {
    third();
}

function third() {
    fourth();
}

function fourth(){
    console.log(referenceError);
}

/*
Here are the first several lines of my stack trace:

/Users/Tyler/Desktop/error-handling/p2_stack_trace.js:26
    console.log(referenceError);
                ^

ReferenceError: referenceError is not defined
    at fourth (/Users/Tyler/Desktop/error-handling/p2_stack_trace.js:26:17)
    at third (/Users/Tyler/Desktop/error-handling/p2_stack_trace.js:22:5)
    at second (/Users/Tyler/Desktop/error-handling/p2_stack_trace.js:18:5)
    at first (/Users/Tyler/Desktop/error-handling/p2_stack_trace.js:14:5)
    at Object.<anonymous> (/Users/Tyler/Desktop/error-handling/p2_stack_trace.js:11:1)
*/

// Why do we call this a "stack trace"? 
// What stack is it in reference to?
// Why is this such a helpful tool in tracking down errors?