// A TypeError https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
// Is caused when you try to operate on the wrong type.

// One cause is if you try to call a function on a value that is not a
// function

function increment () {
  var number = 1;
  return number++;
}

module.exports = increment
