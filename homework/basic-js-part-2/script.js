module.exports = {

  countChar: function(string,char){
  	var charCount = 0;
	for(var i = 0 ; i < string.length ; i++)
	if( string.charAt(i) == char.toLowerCase() || string.charAt(i) == char.toUpperCase){
		//console.log("Found " + char);
		charCount++; 
		} else{
		//console.log("Did not find " + char);
		}
	return charCount;
  

},
  range: function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
  
},
  
  sum:  function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;


},

  reverseArray: function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;

},

  reverseInPlace: function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;

},
  
  isPalindrome: function isPalindrome (string) {
  /* remove special characters, spaces and make lowercase*/
  var removeChar = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  /* reverse removeChar for comparison*/
  var checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if myString is a Palindrome*/
if(removeChar === checkPalindrome){
   return true;
    }else{
      return false;
    }
  },

  isPrime: function(value){
  for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
  
  },
  
  findLongestWord: function(array){
  var largest = 0;
  var largestName = "";
    for (var i = 0; i < array.length; i++) {
      if (array[i].length > largest) {
          largest = array[i].length;
          largestName = array[i];
      }
    
  }
    return largestName;
  },

  filterLongWords: function(array, num){
  
  var largest = [];
  var largestName = "";
  for(var i = 0 ; i < array.length ; i++){
    //console.log(array[i].length);
    if(array[i].length > num){
      largest.push(array[i]);
    }
  }
 return largest;


  },

  createObject: function(prop, value){
    var object = {};
    object[prop]= value;
    return object;
  },

  numberObject: function(num){
    var numObj = {};
    for(var i=0; i<num-1 ; i++){
    numObj[i] = num * i;
    }
  return numObj;
  },
  reverseString: function(string){
     return string.split('').reverse().join('');
  },
  youngestPerson: function(array){
    var personAge = array[0].age;
    var personName = array[0].name;
  //console.log(personAge);
  for( var i = 0 ; i < array.length ; i++){
    currentElement = array[i].age;
    if (currentElement < personAge){
      personAge = currentElement;
      personName = array[i].name;
    } 
  }
  return personName;

  },
  keys: function(object){
  var newArr = [];
  for(var key in object){
    newArr.push(key);
  }
  return newArr;
  }
};
