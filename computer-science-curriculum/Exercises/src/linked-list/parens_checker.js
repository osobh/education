'use strict'

/* Using your implementation of a Linked List.
   Using only push and pop to add and remove things from the List
   will cause your code to behave like a Stack.
*/
let Stack = require('./doubly_linked_list');

/*
  Testing for matched parenthesis is part of linting as well as part of language design.
  When you run a JS file you are notified if you have mis-matching parenthesis,
  square brackets or curly braces. Usually this notification comes in the form of a syntax error.

  A common way of solving this problem is to use a stack, and you will do so here.
  Complete this function which returns true if a list of characters represents a group
  of properly nested parenthesis/brackets/braces. See the associated test file for
  sample input/output: test/parens_checker.js
*/
var list = new Stack();
var closeStuff;

function __check(str){
  if (str === ")"){
    return "(";
  } else if (str === "]"){
    return "[";
  } else if (str === "}"){
    return "{";
  }
}

function parensChecker(input) {
  if(list.length % 2 === 1 || typeof input !== 'string' || !input.length){
    return false;
  }

  for (var i = 0 ; i < input.length ; i++){
    var currentElement = input[i]
      if(currentElement === "[" || currentElement === "(" || currentElement === "{"){
        list.push(currentElement);
    
    } else if (currentElement === "}" || currentElement === ")" ||currentElement === "]"){
      if (!list.tail) {
        return false
      }
      if(list.tail.val === __check(currentElement)){
        list.pop();
      } else {
        return false
      }
    } else {
      return false; 
      }
  }
    if(list.length){
    return false;
    }else 
    return true;
}

module.exports = parensChecker;
