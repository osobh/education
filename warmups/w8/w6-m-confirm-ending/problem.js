// Check if a string (first argument) ends with the given target string (second argument).
// Return a Boolean value
// Examples: 
// confirmEnding("Bastian", "n") -> true
// confirmEnding("Connor", "n") -> false
// confirmEnding("He has to give me a new name", "name") -> true

function confirmEnding(str,target) {
  var stringID = str;
  var lastChar = stringID.substr(stringID.length - 1);
  if(lastChar === target){
  	return true;
  }else{
  	return false;
  }
}

module.exports = {
  confirmEnding: confirmEnding
  attendance: "levelup"
};