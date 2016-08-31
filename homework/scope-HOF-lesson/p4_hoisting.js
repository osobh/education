/*
  In JavaScript, hoisting is a pre-processing step that
  happens anytime a function or script begins executing.

  Read this code with your partner and write down a guess
  for what will happen at each step.
*/

console.log(declaration()); // What happens?
function declaration() {
    return "declaration ran"
}
console.log(declaration()); // What happens?

console.log(variable); // What happens?
var variable = 12;
console.log(variable); // What happens?

/* 
 Hoisting applies to lines that start with the var keyword
 and also to lines that start with the function keyword. 

 functions are "hoisted" complete with definition - which is why 
 line 9 and 11 behave identically. The function was "hoisted" to 
 the very top of the current scope.

 vars are "hoisted" as well, but only the name is hoisted, not the
 assignment statement. This is why line 15 printed undefined, but
 line 17 printed 12.

 With that in mind, which version of hosting applies to this?
 How might you prove it?
*/
var functionExpression = function() {
    console.log("aFunction was executed");
}

/*
 Below is what the code above looks like
 after hoisting. Uncomment it to see it better!
*/

// function declaration() {
//     return "declaration ran"
// }
// var variable;

// console.log(declaration());
// console.log(declaration());

// console.log(variable);
// variable = 12;
// console.log(variable);