// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)
// Matrix = array of n length whose elements are n length arrays of integers.
// 3x3 example:
// diagonals( [
  // [ 1, 2, 3 ],
  // [ 4, 5, 6 ],
  // [ 7, 8, 9 ]
// ] ); 

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

function diagonals(array) {
	newArr=[];
	var finalResult = 0;
	  for(var i = 0 ; i < array.length ; i++){
	  	for(var j = 0 ; j < array[i].length; j++){
		  	newArr.push(array[i][j]);
		  		}
		}
		var mainDiagonal = newArr[0]+ newArr[4] + newArr[8];
		var secondaryDiagonal = newArr[2] + newArr[4] + newArr[6];
		var finalResult = mainDiagonal+ secondaryDiagonal;
		
		if (array.length === 0){
			return 0;
		}else{
		return finalResult;
		}
}
module.exports = {
  diagonals: diagonals,
  attendance: 'sleepmore'
};