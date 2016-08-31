// You have to create a method "compoundArray" which should take as input 
// two int arrays of different length and return one int array with 
// numbers of both arrays shuffled one by one. 
// Example: 
// compoundArray([1,2,3,4,5,6],[9,8,7,6]) => [1,9,2,8,3,7,4,6,5,6];

function compoundArray(arr1, arr2) {
 	var finalArray = [];
  finalArray.push(arr1[0]);
  finalArray.push(arr2[0]);
  finalArray.push(arr1[1]);
  finalArray.push(arr2[1]);
  finalArray.push(arr1[2]);
  finalArray.push(arr2[2]);
  finalArray.push(arr1[3]);
  finalArray.push(arr2[3]);
  finalArray.push(arr1[4]);
  finalArray.push(arr1[5]);
 
  return finalArray;
}

module.exports = {
  compoundArray: compoundArray,
  attendace: 'weredoingitlive'
};
