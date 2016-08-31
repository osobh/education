// Write a function that takes a string and returns an object 
// with the vowels in that string as keys and their value is how many times 
// they occurred in the string. The counter function should not care about case.
// The keys in the object should all be lowercase.
// Ex: countVowels('aAbcdade') -> {a:3,e:1}
function countVowels(s) {
//turn the input into a string
var string = s.toString();
var vowA = 0;
var vowE = 0;
var vowI = 0;
var vowO = 0;
var vowU = 0;
var countVowels = {};
//loop through the string
for(var i = 0; i < string.length; i++) {
var strChar = string.charAt(i).toLowerCase();
	if(strChar === "a"){
   		countVowels.a = vowA += 1;
    }else if(strChar == "e"){
  		countVowels.e = vowE += 1;
  	}else if(strChar == "i"){
   		countVowels.i = vowI += 1;
   	}else if(strChar == "o"){
   		countVowels.o = vowO += 1;
   	}else if(strChar == "u"){
   		countVowels.u = vowU += 1;
	   	}
  }
  return countVowels;
}

module.exports = {
  countVowels: countVowels,
  attendance: 'got'
};