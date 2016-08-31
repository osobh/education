
// Write a function that sums squares of numbers in list that may contain more lists

// Example:

// var l = [1,2,3]
// SumSquares(l) == 14

// var l = [[1,2],3]
// SumSquares(l) == 14

// var l = [[[[[[[[[1]]]]]]]]]
// SumSquares(l) == 1

// var l = [10,[[10],10],[10]]
// SumSquares(l) == 400
// Note: your solution must NOT modify the original list

function sumSquares(input){
var finalSum = 0
for(var i = 0 ; i < input.length ; i++){
// console.log(input[i]);
finalSum += Math.pow(input[i], 2);


console.log(finalSum, "This is Value Holder");
}
return finalSum;
}


module.exports = {
 sumSquares: sumSquares,
 attendance: 'wakawaka'
}