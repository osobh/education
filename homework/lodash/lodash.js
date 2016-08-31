var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
};

 // Returns the first n number of elements in an array.
 // array = [2,5,1,2], n = 3 -> [2,5,1]
_.take = function(array, n) {
	if (!n) n = 1
	var newarr = [];
	for(var i = 0 ; i < n ; i++){
		newarr.push(array[i]);
	}
	return newarr;
};

// Returns the last element of an array.
_.last = function(array) {  
	return array[array.length-1]
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
	if (!n) n = 1
	var newArr = [];
	for( var i = array.length-n ; i < array.length ; i++){
		newArr.push(array[i]);
		}
	return newArr;
};

// Returns a new array with all falsey values removed. 
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
var newArr = [];
	for(var y = 0 ; y < array.length ; y++) {
		if (array[y]) newArr.push(array[y])
	}

	// for(var i = 0 ; i < array.length ; i++){
	// 	if(array[i] !== undefined && array[i] !== null && array[i] !== 0 && array[i] !== false && array[i] !== ""){
	// 		if(isNaN(array[i]) && typeof(array[i]) === "number"){ //NaN
			
	// 		} else {
	// 			newArr.push(array[i]);
	// 		}
	// 	}
	// }
	return newArr;
};

// Returns a new array of elements in the first argument, but 
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	newArr = [];
	for(var i = 0 ; i < arrayOne.length ; i++){
		var shouldRemove = false;
		for(var j = 0 ; j < arrayTwo.length ; j++){
				if( arrayOne[i] === arrayTwo[j]){
					shouldRemove = true;
				}
		}
			if(shouldRemove !== true){
				newArr.push(arrayOne[i]);
				
			}
	}

return newArr;

};

// Returns element with minimum
// value in an array.
_.min = function(array) {
 var lowest = 0;
 for (var i = 1; i < array.length; i++) {
  if (array[i] < array[lowest]) lowest = i;
 }
 return array[lowest];
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
 var highest = 0;
 for (var i = 1; i < array.length; i++) {
  if (array[i] > array[highest]) highest = i;
 }
 return array[highest];// Place your solution here	
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
	for(var i = 0 ; i < array.length; i++){
			if(array[i] === el){
				return array.indexOf(array[i]);
				}
	}
	return -1;
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
if(typeof collection == 'string'){
		return collection.length;
	}else if( collection.length > 0){
		return collection.length;
	} else if( typeof collection == 'object'){
		return(Object.keys(collection).length);
	}
	

};

// Iterates on each element of a collection and 
// then returns the original collection.
_.forEach = function(collection, callback) {
  var i;
   if(collection.length === 'undefined'){
		  for (i = 0; i < collection.length; i++) {
		      callback(collection[i], i, collection);
		  }
   }else{
			for(var key in collection){
				callback(collection[key], key, collection);
			}
   		}
  	return collection;
};

// Iterates on each element of a collection and 
// then returns a new array.
_.map = function(collection, callback) {
	var i;
	var newArr = [];
   if(collection.length === 'undefined'){
		  for (i = 0; i < collection.length; i++) {
		      newArr.push(callback(collection[i], i, collection));
		  }
   }else{
			for(var key in collection){
				newArr.push(callback(collection[key], key, collection));
			}
   		}
  	return newArr;
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
var newArr = [];
		for(var key in collection){
		  	if((callback(collection[key])) === true){
		  		newArr.push(collection[key]);
		  	} 
		}
	return newArr;
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	 var newArr = [];
    if (typeof collection === "object") {
        for (var key in collection) {
            if (!callback(collection[key])) {
                newArr.push(collection[key]);
            }
        }
    } else {
        for (var i = 0; i < collection.length; i++) {
            if (!callback(collection[i])) {
                newArr.push(collection[i]);
            }
        }
    }
    return newArr;
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here	
};

module.exports = _;
