/*
As a part of this warmup, you need to create three functions that one needs to be able to call upon an array:

all

This function returns true only if the predicate supplied returns true for all the items in the array

[1, 2, 3].all(isGreaterThanZero) => true
[-1, 0, 2].all(isGreaterThanZero) => false

none

This function returns true only if the predicate supplied returns false for all the items in the array

[-1, 2, 3].none(isLessThanZero) => false
[-1, -2, -3].none(isGreaterThanZero) => true

any

This function returns true if at least one of the items in the array returns true for the predicate supplied

[-1, 2, 3].any(isGreaterThanZero) => true
[-1, -2, -3].any(isGreaterThanZero) => false
You do not need to worry about the data supplied, it will be an array at all times.
******************************************************/


// [1, 2, 3].all(isGreaterThanZero) => true
// [-1, 0, 2].all(isGreaterThanZero) => false
// *** YOUR CODE HERE ***



// [-1, 2, 3].none(isLessThanZero) => false
// [-1, -2, -3].none(isGreaterThanZero) => true
// *** YOUR CODE HERE ***


// [-1, 2, 3].any(isGreaterThanZero) => true
// [-1, -2, -3].any(isGreaterThanZero) => false
// *** YOUR CODE HERE ***

// write some of your own invocations below, 
// do your results match the original expected results?
// *** YOUR CODE HERE ***
Array.prototype.none = function (predicate) {
  var count = 0
  for (var i = 0 ; i < this.length ; i++) {
    currentIndex = this[i]
    if (predicate(currentIndex) !== true) {
      count +=1 
    };
  }
  if (count !== this.length) {
    return false
  }
  return true
};

Array.prototype.any = function (predicate) {
    var count = 0
    for (var i = 0 ; i < this.length ; i++) {
      currentIndex = this[i]
      if (predicate(currentIndex) === true) {
        console.log(predicate(currentIndex),"true is true")
        count +=1 
      };
    }
    if (count > 0) {
      return true
    }
    return false
};

Array.prototype.all = function (predicate) {
  for (var i = 0 ; i < this.length ; i++) {
    currentIndex = this[i]
    if (predicate(currentIndex) === false) {
      return false
    };
  }
  return true
};

function isGreaterThanZero (num) {
  return num > 0;
}

function isLessThanZero (num) {
  return num < 0;
}

isGreaterThanZero();



module.exports = {
  attendance:"maythfourthbewith"
}