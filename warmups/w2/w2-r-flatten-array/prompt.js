// Write a function that flattens an Array of Array objects into a flat Array. 
// Your function must only do one level of flattening. Some examples:
//  flatten([]) // should return []
//  flatten([1, 2, 3]) //should return [1,2,3]
//  flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]) //should return [1, 2, 3, "a", "b", "c", 1, 2, 3]
//  flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]) //should return [3, 4, 5, [9, 9, 9], "a,b,c"]

var a = [1, [2, [3,[4, [5]]]]]; // => [1,2,3,4,5]
function flatten(array) {
<<<<<<< HEAD
	var flattened=[];
	for (var i = 0; i < array.length; ++i){
		    if( Array.isArray(array[i])){
			    for (var j = 0; j < array[i].length; j++){
			    flattened.push(array[i][j]);
			    }
		}else{
			flattened.push(array[i]);
		} 
	}
return flattened;
=======
    var flattened = [];

    for(var outerIdx = 0; outerIdx < array.length; outerIdx++) {
        var outerVal = array[outerIdx];

        if(Array.isArray(outerVal)) {
            // One Level
            // flattened = flattened.concat(outerVal);

            // Totally flat
            flattened = flattened.concat(flatten(outerVal));

        }
        else {
            flattened.push(outerVal);
        }
    }

    return flattened;
>>>>>>> d5e2c50737799c14dcdd7499cf591db547c5fbd9
}

module.exports = {
  flatten:flatten,
  attendance:'paco'
};