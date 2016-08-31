/*
  We saw that try catch blocks can be used to intercept an 
  error, and handle it gracefully instead of terminating the node
  process (the default behavior).

  What happens if we experience an error somewhere deeper in the 
  call stack? 

  Lets add a try/catch to the p2 code:
*/
try {
    first();
}
catch (err) {
    console.log(err);
    console.log(err.stack);
}

console.log("\n\nSOMETIMES WE FAIL.");
console.log("BUT THE SHOW MUST GO ON!\n\n");

// Now that we've seen a try/catch trigger the outermost 
// catch, I want you to add try/catch blocks of your own
// inside these functions. Think about these questions:

// Which catch will trigger first? 
// Will more than one trigger? or just one?

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