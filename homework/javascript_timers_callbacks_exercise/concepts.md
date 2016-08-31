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

one is a named function and the other is an anonymous function.


- What is the difference between using the `var` keyword inside of a function vs. outside of a function?

exposing the variable to the global scope vs. local scope

- Why do we need/use higher order functions? What does it enable us to do? 

to enable the use of functions within functions

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
The first function will execute and logFirst will print "first";
Then the second operation will trigger an event loop of 0 seconds that will execute logSecond and will print "second";
Then the final function will execute and log out the string "third";
first
second
third