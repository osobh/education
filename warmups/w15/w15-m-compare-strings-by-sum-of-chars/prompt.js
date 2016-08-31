
// Compare two strings by comparing the sum of their letter-Values (char-Value).
// For comparing treat all letters as UpperCase.

// Empty and null-Strings should be treated as they are equal.
// If the string contains other characters than letters, treat the whole string as it would be empty.

// Examples:

// "AD","BC" -> equal

// "AD","DD" -> not equal

// "gf","FG" -> equal

// "zz1","" -> equal

// "ZzZz", "ffPFF" -> equal

// "kl", "lz" -> not equal

// null, "" -> equal

function compare(s1, s2) {
finalS1 = s1.toUpperCase().charCodeAt(0) + s1.toUpperCase().charCodeAt(1);
finalS2 = s2.toUpperCase().charCodeAt(0) + s2.toUpperCase().charCodeAt(1);

console.log(finalS1)
console.log(finalS2)

if(finalS1 === finalS2){
	return true;
} else{
	return false;
}
}

module.exports = {
 compare: compare,
 attendance: "In order to succeed, we must first believe that we can."
}