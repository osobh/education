## Please define the following:
### Function expression

A function expression is a function whose name has been omitted and is anonymous and held within a variable:
var x = func(y){
  return y*y;
};

### Function declaration
A function declaration is a function declared with specified parameters:

function xSquared(x){
  return x*x;
}

### Asynchronous code
Start something with a dependency of the other happening when the first completes.

Fuctnion log2() { console.log("2")};
console.log(1)
setTimeout(log2, 0)
console.log("3")


### Higher Order Function
a function that returns another function as an arguement, or a function that returns another function.

function(callback){
	callback();
}

function() {
	return function() {
	console.log("cool");
	}
}

### The Call Stack
An ordered place where temporary memory is stored . A new stack frame is added every time a function is called. a stack is popped off the stack every time a function "returns".

the data stored in the frame are the variables defined in the functions scope.

### The Heap

Global location to store program data, there is no ordering to the data, every object and function is stored in the heap.


### The "Event" Queue

Sometime called the event queue, first in first out (FIFO). IN JS the event queue manages all async events.any setTimeout or other calls create "events: on the queue which are executed when the processor has "free" time.


