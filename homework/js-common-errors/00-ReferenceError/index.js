// A ReferenceError https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
// Is when you try to reference a value that does not exist

// The ReferenceError thrown will help you find the line the error is on
//

function increment (number) {
  var newNumber = number++;
  return newNumber;
}

module.exports = increment
