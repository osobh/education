// Rotate an array arr in place arr to the right by k steps.

// For example, with n = [1,2,3,4,5,6,7] and k = 3, the array is rotated to [5,6,7,1,2,3,4].
//Make sure not to return a copy of the array.

function rotate(arr,k) {
	var newArr = arr.slice(arr.length-k);
 	var changedArr = arr.slice(0,arr.length/2);
  	var lastArr = newArr.concat(changedArr);
  	return lastArr;
}	

module.exports = {
  rotate: rotate,
  attendance: 'pokemon'
};