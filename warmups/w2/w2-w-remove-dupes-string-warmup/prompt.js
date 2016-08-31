"use strict"
// Write a function named removeDupes which takes a string and removes 
// all duplicate characters in the String. Here are some examples:  
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes 
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AB'
//   removeDupes('cAtCaT'); // 'cAt'


function removeDupes(input){
<<<<<<< HEAD
<<<<<<< HEAD
	var unique='';
    for(var i=0; i<input.length; i++){
        if(unique.indexOf(input[i]) == -1){
            unique += input[i];
        }
    }
    return unique;
=======
	var obj = {};
  for (x in input) {
    if (obj[input[x]] === undefined) {
      obj[input[x]] = 1
    } else {
      obj[input[x]] += 1
=======
    var dupesRemoved = '';
    var lettersSeen = {};

    for(let i = 0; i < input.length; i++) {
        let currentChar = input[i];

        // If I haven't seen currentChar
        if(!lettersSeen[currentChar]) {
            dupesRemoved += currentChar;
            lettersSeen[currentChar] = true;
        }
>>>>>>> d5e2c50737799c14dcdd7499cf591db547c5fbd9
    }

<<<<<<< HEAD
  console.log (obj)
>>>>>>> aeaadd57e49048a3e53e609ee5b528e564284128
=======
    return dupesRemoved;
>>>>>>> d5e2c50737799c14dcdd7499cf591db547c5fbd9
} 


//CI for case insensitive
function removeDupesCI(input){
<<<<<<< HEAD
	var unique='';
    for(var i=0; i<input.length; i++){

    	if( unique.indexOf(input[i].toLowerCase()) === -1 && unique.indexOf(input[i].toUpperCase()) === -1 ){
    		
        unique += input[i];
    	}
    }
    return unique;
	 
}

module.exports = {removeDupes:removeDupes,
									removeDupesCI:removeDupesCI,
									attendance :"wilson"
								 };
=======
    var dupesRemoved = '';
    var lettersSeen = {};

    for(let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        let lowerCased = currentChar.toLowerCase();

        // If I haven't seen currentChar
        if(!lettersSeen[lowerCased]) {
            dupesRemoved += currentChar;
            lettersSeen[lowerCased] = true;
        }
    }

    return dupesRemoved;
}

module.exports = {
    removeDupes:removeDupes,
	removeDupesCI:removeDupesCI,
	attendance :"ENTER ATTENDANCE HERE"
};
>>>>>>> d5e2c50737799c14dcdd7499cf591db547c5fbd9
