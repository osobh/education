// A function receives an array of positive integers as input. The function should
// determine whether the numbers are in ascending order. Assume all inputs are valid.
//Ex: 
// inAscOrder([1,2,3,34]) -> returns true;
// inAscOrder([1,2,34,3]) -> returns false;
// PART TWO
// Write more tests! Test for invalid inputs, etc. 
function inAscOrder(arr) {
//Taking first 2 values of the array to start sorting
var superA = arr[0];
var superB = arr[1];
var finalArr = superA - superB;
if(finalArr > 0){
	arr.sort(function(superA,superB){
	  		return superA - superB;
	  	});
	} else {
		return false;
	}
	return true;
}

module.exports = {
  inAscOrder: inAscOrder,
  attendance: 'hats'
};