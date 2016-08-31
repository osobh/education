// In this warmup you will have to change every letter in a given string to the
// next letter in the alphabet. You will write a function nextLetter to do this.
// The function will take a single parameter str (string).
//
// EXAMPLES:
//
// "Hello" --> "Ifmmp"
//
// "What is your name?" --> "Xibu jt zpvs obnf?"
//
// "zoo" --> "app"
//
// "zzZAaa" --> "aaABbb"
//
// Note: spaces and special characters should remain the same. Capital letters
// should transfer in the same way but remain capitilized.

function nextLetter(str) {
var letterHolder = []
for(var i = 0 ; i < str.length ; i++){
	letterHolder.push(String.fromCharCode(str.charCodeAt(i)+1));
}

var finalWord = letterHolder.join('');
return finalWord
}

module.exports = {
 nextLetter: nextLetter,
<<<<<<< HEAD
 attendance: "cloudy-with-a-chance-of-meatlballs"
=======
 attendance: "cloudy-with-a-chance-of-meatballs"
>>>>>>> 53ae931304d6346694862629a117ea28ab246858
}
