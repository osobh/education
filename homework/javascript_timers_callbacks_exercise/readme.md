## Javascript Timers, Callbacks and Extras

For this assignment you will be combining everything you have learned so far in JavaScript to implement the following functions....but first - let's make sure we understand what we are talking about!

### Part 1 - Definitions 

Please define these terms in 1-3 sentences.

1. Function expression
A function expression is a function whose name has been omitted and is anonymous and held within a variable:
var x = func(y){
  return y*y;
};


2. Function declaration
A function declaration is a function declared with specified parameters:

function xSquared(x){
  return x*x;
} 

3. Asynchronous code

In synchronous programming, each step is performed one after the previous one is finished executing. In asynchroneous, step 2 will be performed even if step 1 isn't finished. 

4. Higher Order Function

A function that can return another function


5. The Call Stack


6. The Heap

7. The Queue

### Part 2 - Concepts

Please answer the following questions in 2-4 sentences.

- What is the difference between these two functions?

```js
 var sayHi = function(){
   return "Hi!";
 }
 
 function sayHello(){
   return "Hello!";
 }
```

- What is the difference between using the `var` keyword inside of a function vs. outside of a function?
- Why do we need/use higher order functions? What does it enable us to do? 
- Explain in your own words, what happens to the `stack` and `queue` when the following code is run (please also include what it will output)

```js
function logFirst(){
  console.log("first");
}

function logSecond(){
  console.log("second");
}

function logThird(){
  console.log("third");
}

logFirst();
setTimeout(logSecond,0);
logThird();
```

### Part 3 - Application (this will be tough!)

- Write a function called `liftoff` that starts at 10 and `console.log`s the previous number after a second. Once the count is at 0, the function should stop decrementing and `console.log("liftoff!")`

- Write a function called `each` which takes in an array and a callback, and invokes the callback on each element in the array.  This function should **not** return anything. This function should accept an array as its first parameter and a callback function as its second.

For example: 

```js
 each([1,2,3], function(element){
  	// this will console.log 1,2,3
    console.log(element);
    // but it will return undefined
 })
```

- Write a function called `transform` which takes in an array and a callback and **returns** a new array with the results of the invoked callback on each element in the array. This function should accept an array as its first parameter and a callback function as its second.

For example: 

```js
 transform([1,2,3], function(element){
  	return element * 3;
  	// this will return [3,6,9]
 })
```

### Bonus

- Refactor your each and transform function so that the callback function accepts the the index as a second parameter and the array you are iterating over as a third parameter 

- Write a function called `filter` which takes in an array and a callback and **returns** a new array with the results of the invoked callback on each element in the array **only** if they pass a condition. The callback you pass in **MUST** return `true` or `false`

For example:

```js
filter([1,2,3,4], function(element){
  return element % 2 === 0;
  // this will return [2,4] 
}) 
```

