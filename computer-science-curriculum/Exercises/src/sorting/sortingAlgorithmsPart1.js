'use strict'

const swap = require('./sort-helpers').swap;

function bubbleSort(arr){
  var length = arr.length;
  var finalArr = [];
  for (var i = 0; i < length; i++) { //Number of passes
    for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
      if(arr[j] > arr[j+1]) {
        var tmp = arr[j];  //Temporary variable to hold the current number
        arr[j] = arr[j+1]; //Replace current number with adjacent number
        arr[j+1] = tmp; //Replace adjacent number with current number
      }
    }        
  }
  return arr;
}

function selectionSort(arr) {
      var length = arr.length;
      
      for (var i = 0; i < length-1; i++) { //Number of passes
        var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
        for (var j = i+1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
          if(arr[j] < arr[min]) { //Compare the numbers
            min = j; //Change the current min number position if a smaller num is found
          }
        }
        if(min != i) { //After each pass, if the current min num != initial min num, exchange the position.
          //Swap the numbers
          var tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
        }
      }
      return arr;
    }

function insertionSort(arr) {
var length = arr.length, min;
    for (var i=0; i < length; i++){
        //set minimum to this position
        min = i;
        //check the rest of the array to see if anything is smaller
        for (var j=i+1; j < length; j++){
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min){
            swap(arr, i, min);
        }
    }

    return arr;
}


module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
};
