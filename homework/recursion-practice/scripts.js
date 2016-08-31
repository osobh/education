
/**
 * This function should return the n-th number of the fibonacci sequence. 
 * This sequence is created by adding the previous two numbers in the sequence
 * together in order to get the next number. The first 2 are chosen to be 1 
 * arbitrarily. For example, the first few numbers are:
 *      1, 1, 2, 3, 5, 8, 13, 21
 * 
 * fibonacci(0) === 1
 * fibonacci(1) === 1
 * fibonacci(2) === 2
 * fibonacci(3) === 5
 * fibonacci(4) === 5
 ... and so on.
 */
function fibonacci(n) {
	if( n <= 1){
	return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);

fibonacci();

/**
 * When called this function should print the song "bottles of beer"
 * for as many bottles as there are 'bottlesRemaining'
 */
function bottlesOfBeer(bottlesRemaining) {
	if(numBottles === 0){
	return "Done Counting and No Bottles left to count";
	}	
	numBottles --;
	console.log(numBottles + " numbottles of beer on the Wall");
	return bBeer(numBottles);
}

/** 
 * This function should return true if the parameter testString is a palindrome
 * and should return false in all other cases. 
 */
function isPalindrome(testString) {
	if(array[0] !== array[array.length - 1]){
		console.log(array[0]);
		console.log(array[array.length-1]);
		console.log("is not a Palindrome");
		return false;
	}else if(array.length <= 1){
		console.log("is a palindrome");
		return true;
	}else{
		array = array.slice(1, array.length-1);
		isPalindrome(array);
	}

}

module.exports = {
    fibonacci: fibonacci,
    isPalindrome: isPalindrome
}