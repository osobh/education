// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function, 
// return "Ruh roh! That isn't a string!"

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// DONE?? Do it with a RegEx! (a 2 line solution is possible)

function doubleChar(str) {
	newArr = [];
	newString = "";
	if(typeof str != 'string'){
		return "Ruh roh! That isn't a string!";
	} else{
			for(var i = 0 ; i < str.length ; i++){
			    //str = str.toLowerCase();
			    newArr.push(str[i]+str[i]);
			}
			newString = newArr.join("");
		}
		return newString;
}

module.exports = {
  doubleChar:doubleChar,
  attendance:"thanksomar"
}