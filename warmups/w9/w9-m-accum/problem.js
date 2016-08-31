// Create a function accum that takes a string and outputs a string with the following:
// accum("abcd") --> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") --> "C-Ww-Aaa-Tttt"

function accum(string) {
	var newStr = [];
	for(var i = 0 ; i < string.length ; i++){
	newStr.push(string[i].toUpperCase() + string[i].toLowerCase().repeat(i));
	}
	var final_string = newStr.join('-');
	return final_string;
}

module.exports = {
  accum: accum,
  attendance: 'linkedin'
};