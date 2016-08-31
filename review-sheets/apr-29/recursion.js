"use strict"
// Recursion is a programing technique where a function calls
// itself. Whenever we have a problem that can be broken into
// smaller subsets of itself, we can use recursion. 

// To use recursion properly, we need to have at least one
// "base case" and at least one "recursive step".

// Lets look at a common use case for recursion to examine
// these concepts. This function flattens an array such that
// any inner arrays found are flattened into a single array:
function flatten(array) {
    // Each time we call this function we need to 
    // keep track of it's flattened values.
    var flattened = [];

    // The input to this function must be an array
    // so we know we can loop.
    for(let i = 0; i < array.length; i++) {
        let currentVal = array[i];

        // This is our "recursive step".
        // If our currentVal is an array, we recursively
        // process that array.
        if(Array.isArray(currentVal)) {
            let flattenedInnerArray = flatten(currentVal);
            flattened = flattened.concat();

        }
        // This is one of our "base cases".
        // If the currentVal isn't an array, we push that value
        // into flattened directly.
        else {
            flattened.push(currentVal);
        }
    }

    // This moment represents our other "base case".
    // When we've reached the length of the current array
    // we exit. Implicitly this also means if the array is
    // length === 0, we never recurse at all. 
    return flattened;
}