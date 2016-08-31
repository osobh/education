// Description:

// Welcome. In this warmup you are required to, given a 
// string, replace every letter with its position 
// in the alphabet. If anything in the text isn't a letter, 
// ignore it and don't return it. a being 1, b being 2, 
// etc. As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 
// 23 5 12 22 5 15 3 12 15 3 11" (As a string.)

function alphabetPosition(text) {
var resultString = "";
	for(var i = 0 ; i < text.length ; i++){
			
			if (/[a-z]/.test(text[i])) {
		  	//console.log(text[i]);
		  	var code = text[i].charCodeAt();
		  	var lowerCode = code - 97;
		  	//console.log(code);
		  	resultString = resultString + " " + lowerCode;
			} else if(/[A-Z]/.test(text[i])){
			var codeUp = text[i].charCodeAt();
		  	var upperCode = codeUp - 65;
		  	console.log(code);
		  	resultString = resultString + " " + upperCode;
			}
			
	}
	return resultString;
}


//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }

//   return result.slice(0, result.length-1);
// }
// }

module.exports = {
  attendance: "hat",
  alphabetPosition:alphabetPosition
}