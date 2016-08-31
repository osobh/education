// starting at index 0, put numbers 1-5 in order in the array variable below.
var array = [1,2,3,4,5];

// put the number 5 in index 5 in arrayTwo listed below
var arrayTwo = [0,0,0,0,0,5,0];
arrayTwo[5] - 5

// put 3 empty nested arrays in arrayThree listed below
var arrayThree = [[],[],[]];
arrayThree.push ([]);
arrayThree.push ([]);
arrayThree.push ([]);

// Starting at index 0 put a string with a length of 3, an empty object,
// and a number, into arrayFour listed below
var arrayFour = ["one",{},420];
arrayFour[0] = "one"
arrayFour[1] = {}
arrayFour[2] = 420

// put a key of foo and a value of "bar" into the object below
var object = {
	foo: "bar"
};

object.foo = "bar";


// put a key of nested with a value of an empty object into the object below
var objectTwo = {
	nested: {}
};
objectTwo.nested = {};

// put a key of superNested and a value of an object with a key of nested and a value of "data" into the object below
var objectThree = {
	superNested: { nested: "data"}
};

objectThree["superNested"] = { 
	"nested": "data"
}

// put a key of arrayTwo and a value of arrayTwo (not a string),
// and a second key of arrayThree and a value of arrayThree (not a string) into the object below

var objectFour = {};
var nameOfProperty = "arrayTwo";
objectFour[nameOfProperty] = arrayTwo
console.log(objectFour[nameOfProperty])


module.exports = {
 array: array,
 arrayTwo: arrayTwo,
 arrayThree: arrayThree,
 arrayFour: arrayFour,
 object: object,
 objectTwo: objectTwo,
 objectThree: objectThree,
 objectFour: objectFour,
 attendance: "arrays"
};
