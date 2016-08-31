// write a function declaration called squareMe that takes in a parameter
// and return that parameter squared

// write an anonymous function literal with the variable name cubeMe that
// takes in a parameter and returns that parameter cubed

// write a function declaration called addTwoNumbers that takes in two parameters
// and returns the sum of those parameters

// write a function declaration called addManyNumbers that takes in any number of parameters
// and returns the sum of the input parameters

// MUTIPLE CHOICE: INPUT THE LETTER OF THE CORRECT ANSWER INTO THE hoisting FUNCTION BELOW:
// Which one of these functions can you call above its definition in your code?
/*
    a) function iSeeALittleSilhouettoOfAMan() {
          return "Scaramouch, scaramouch will you do the fandango"
      }

    b) var ohHi = function () {
      return "Mark"
    }

    c) funct allYour (base) {
      return "are belong to us"
    }

    d) def trogdor () {
      return "the Burninator"
    }
*/
function squareMe(value){
  var numberSquared = value * value;
  return numberSquared;
}
squareMe(2);

var cubeMe = function(num){
  return num * num * num;
}
cubeMe(3);

function addTwoNumbers(num1, num2){
  var addingTwo = num1 + num2;
  return addingTwo;
}
addTwoNumbers(1,2);

function addManyNumbers(){
var i, sum = 0;
for(i = 0 ; i < arguments.length ; i++){
  sum += arguments[i];
}
return sum;
}
addManyNumbers(1,2,3,4,5);

function hoisting () {
  return ("a").toLowerCase();
}

module.exports = {
  attendance: "funk",
  squareMe:squareMe,
  cubeMe:cubeMe,
  addTwoNumbers:addTwoNumbers,
  addManyNumbers:addManyNumbers,
  hoisting:hoisting
};
