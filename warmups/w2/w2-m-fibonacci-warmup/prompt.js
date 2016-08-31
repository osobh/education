/* 
 The Fibbonacci sequence is a never ending numerical sequence generated by
 adding the previous two numbers together to get the next number in the sequence.
 For convience the sequence starts with two 1's. So the first few numbers are
 as follows:

 1,1,2,3,5,8,13,21,34 ... 

 Complete the function fibbonacci below such that it accepts an integer
 input parameter n and returns the nth number in the sequence. So

 fibbonacci(0); // should return 1
 fibbonacci(1); // should return 1
 fibbonacci(2); // should return 2
 fibbonacci(3); // should return 3
 fibbonacci(4); // should return 5
*/
"use strict"
function fibbonacci(n) {
<<<<<<< HEAD
 	var a = 0, b = 1, f = 1;
	for(var i = 2 ; i <= n ; i++){
        a = b;
        b = f;
        f = a + b;
    }
    return f;
=======
	// Finish this function
	var prev = 1;
	var current = 1;

	//  1, 2, ????
	for(let i = 1; i < n; i++) {
		let newFibNumber = prev + current;
		prev = current;
		current = newFibNumber;
	}

	return current;
}

function fibRecursive(n) {
	if(n <= 1) return 1;

	return fibRecursive(n-2) + fibRecursive(n-1);
>>>>>>> d5e2c50737799c14dcdd7499cf591db547c5fbd9
}
fibbonacci();


function fibRecursive(n){
	if(n < 1) return 1;
	return fibRecursive(n-2) + fibRecursive(n+1);

}



// Test function, checks the first few known values.
function testFib() {
	var fibTests = [1,1,2,3,5,8,13,21,34];
	var allPassing = true;
	
	for(var i = 0; i < fibTests.length; i++) {
		if(fibbonacci(i) !== fibTests[i]) {
			allPassing = false;
			console.log("failure for " + i + ".\n  Expected: " + fibTests[i] + "\n  Got: " + fibbonacci(i) + "\n");
		}
	}

	if(allPassing) {
		console.log("All tests passed");
	}
}

// Calls the test function
testFib();

module.exports ={
<<<<<<< HEAD
									fibbonacci: fibbonacci,
									attendance: "closure"
								};
=======
	fibbonacci: fibRecursive,
	attendance: 'closure'
};
>>>>>>> d5e2c50737799c14dcdd7499cf591db547c5fbd9