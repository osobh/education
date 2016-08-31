// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.  Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, 
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString() {
//   var ending = '...';
  var str02= arguments["1"];
  var str01 = arguments["0"];
  // var str01 = arguments["0"].slice(0,str02.length) + ending;
  if(str01.length > str02) {
    if(str02 <= 3) {
      str01 = str01.slice(0,str02) + '...';
    } else {
      str01 = str01.slice(0,str02-3) + '...';
    }
  }
  return str01;

};


module.exports = {
  attendance: "vote",
  truncateString: truncateString
};