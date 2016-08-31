// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "wookiE", return "wEikoo".

function reverseVowels(s) {
	var vowelHolder = [];
	var newArr = [];
  
  for(var key in s){
  	var vowelKey = s[key];
  	vowelHolder.push(vowelKey);
  }
  
  for(var i = 0 ; i < vowelHolder.length ; i++){
  	var newV = (/[aeiou]/ig.test(s[i]));
  	if(newV){
  		newArr.push(s[i]);
  		vowelHolder[i] = null;
  	}
  }
  
  var reverseArr = newArr.reverse();
  console.log(reverseArr);
  
  for(var j = 0 ; i < vowelHolder.length ; i++){
  
	  if(vowelHolder[i] === null){
	  	vowelHolder[i] = reverseArr(shift);
	  	//console.log(vowelHolder);
	  }
  }
  //console.log(vowelHolder);
  //console.log(newArr);
}

module.exports = {
  reverseVowels: reverseVowels,
  attendance: 'conflict'
};