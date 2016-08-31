// FIX THE BROKEN CODE (add a comment with what is wrong as well)

// var obj = {
//   firstName: "Matt",
//   sayHi: function(){
//     setTimeout(function(){
//       console.log(`Hi ${this.firstName}!`);
//     },1000);
//   }
// };

// sayHi's value was invoiking a function  which call the setTimeout method whose first parameter was a function which was incorrect.

var obj = {
  firstName: "Matt",
  sayHi: function(){
    setTimeout(console.log("Hi " + this.firstName + "!"),1000);
  }
};


// makeArray takes an array-like-object and returns an Array
function makeArray(arrayLikeObject){
      var newArr = [];
      if(Array.isArray(arrayLikeObject)){
        newArr = Array.prototype.slice.call(arrayLikeObject);
      }
      
      return newArr;  
} 


// sumNumbers takes in an unspecified # of arguments and returns the sum
  function sumNumbers(){
          var sumFinal = 0;
          for(var i = 0 ; i < arguments.length ; i++){
          //console.log(arguments[i]);
          sumFinal += arguments[i];
          }
    return sumFinal;
  }


// maxValue returns the highest value in the array
function maxValue(array){
  var highValue = 0;
  for(var i = 0 ; i < array.length ; i++){
    // console.log(array[i]);
    if(array[i] > highValue){
      highValue = array[i];
    }
  }
  return highValue;
}

// minValue returns the lowest value in the array
function minValue(array){
  var minValue = array[0];
  for(var i = 0 ; i < array.length ; i++){
    //console.log(array[i]);
    if(array[i] < minValue){
      minValue = array[i];
    }
  }
  return minValue;

}

// simpleBind takes in a function and a thisArg and returns a function with the thisArg bound to that function.
// Remember to think about arguments being passed to this function!

function simpleBind(fn, thisArg){
   var getSimpleBind = fn.bind(thisArg);
   return getSimpleBind;
}

// Creates a version of the function that can only be called one time. 
// Repeated calls to the modified function will have no effect, returning the value from the original call. 
// Useful for initialization functions, instead of having to set a boolean flag and then check it later.

// http://underscorejs.org/#once
function once (func) {
  funcCalled = false;
  return function(){
    if(!funcCalled){
      funcCalled = true;
      func();
    }
  };
};


// Much like setTimeout, delay invokes function after wait milliseconds. 
// If you pass the optional arguments, they will be forwarded on to the function when it is invoked.

// http://underscorejs.org/#delay
function delay(func, wait) {
  var args = Array.prototype.slice.call(arguments, 2);
  return setTimeout(function() {
    return func.apply(this, args);
  }, wait);
};

// BONUS
//
// Hint - you will have to use the .toString method on the Object function
// YOU SHOULD NOT USE Array.isArray to solve this!
function isArray(val){
     
        

};  

// SUPER BONUS

// http://www.sitepoint.com/currying-in-functional-javascript/
function simpleCurry(fn){

}

module.exports = {
  sumNumbers,
  maxValue,
  minValue,
  makeArray,
  once,
  delay,
  simpleBind,
  isArray,
  simpleCurry,
};
