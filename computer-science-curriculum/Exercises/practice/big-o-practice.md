# Big O Questions

We want you answer the following questions about a list of programs (provided separately).

1. Define `n` for this program. `n` must represent the "size" of the input to the program. Your definition should give someone enough information to give a number to `n` if you provide some sample input to the program. Provide 3 such examples for each problem.

1. Write a formula that estimates as accurately as possible the number of operations the provided program requires. (on the longer programs, it's okay for this to be off by a few).

1. Reduce this formula to a simplified estimate that you feel better captures the essence of the programs time complexity.

1. Reduce this estimate to it's __Big O__ notation.

### An Example of a Complete Answer:

```js
function printValuesAndMultiples(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      console.log(arr[i]*arr[j]);
  }
}
```

1. In this example, the size of the input can be defined as the length of the variable `arr`. In other words, `n=arr.length`.

  Examples:
  * `printValuesAndMultiples([1, 2, 3])` then `n=3`.
  * `printValuesAndMultiples([1, 2, 3, 4, 5])` then `n=5`.
  * `printValuesAndMultiples([1])` then `n=1`.  

1. The MOST detailed formula is: `2 + 7n + 6n^2`.   

  2 operations always happen exactly once:
   * `let i = 0` twice,

  4 operations happen once per n in the first loop:
  * `i < arr.length;`,
  * `i++`,
  * array access with `arr[i]`
  * `console.log`

  3 more operations occur once per n in the outer loop of the second loop blocks:
  * `let j = 0` (j, not i)
  * `i < arr.length` (i, not j)
  * `i++`

  6 operations happen n^2 times. These are the operations in the inner loop.
  * `j < arr.length`
  * `j++`
  * `arr[i]`
  * `arr[j]`
  * `console.log`
  * Multiplication

  And all of this makes a BIG assumption that `console.log` is a __constant time__ operation.

1. Simplified: `2n + 2n^2`.

  Drop the constants, because it's easy and if we're left with nothing after dropping them we'll know our big O is constant. Now we have 2 major operation per n:
  * `console.log` in the first loop
  * Array access in the first loop

  and we have 4 major operations per n^2:
  * `console.log` in the second loop
  * 2 Array Accesses `arr[j]`, `arr[i]`
  * The multiplication

  When estimating, it's fine to be off by a bit on the __scalar__ values, but getting the __powers__ or __logarithms__ right is crucial.

1. `O(n^2)`, as `n` grows, the operations done in the first loop contribute less and less to the overall performance of the algorithm. In our case, based on the complete formula, as soon as `n > 1`, the terms in `n^2` dominate the program. Consider our original formula again:

`2 + 7n + 6n^2`, when n = 1 this yields `2 + 7 + 6`
`2 + 7n + 6n^2`, when n = 2 this yields `2 + 14 + 24`

#### Food for thought:

Because BigO is concerned with asymptotic complexity, sometimes the nuance and impact on __actual performance__ can be lost. What if we did the initial analysis for a problem and found it was `10000000000000n + 1n^2`? In this case n has to be 3,162,277 before the n^2 term dominates, but we would still call this `O(n^2)`.

In practice these constants matter, and in practice the asymptotes also matter. If you forget to think about both, you might not solve the right performance problem.

# The Problems:

1. Fibbonacci Sequence Iteratively:

  ```js
  function fibbonacciIterative(n) {
  	if(n <= 1) {
  		return 1;
  	}

  	var fibNumber;
  	var numberOne = 1;
  	var numberTwo = 1;

  	for(var i = 1; i < n; i++) {
  		fibNumber = numberOne + numberTwo;
  		numberOne = numberTwo;
  		numberTwo = fibNumber;
  	}

  	return fibNumber;

  }
  ```

2. Counting all the characters in a string:

  ```js
  function countCharacters(input){

  	var characterCounts = {};

  	for(var i = 0; i < input.length; i++){
  		var c = input[i];

  		if(characterCounts[c] === undefined) {
  			characterCounts[c] = 1;
  		}

  		else {
  			characterCounts[c] += 1;
  		}
  	}

  	return characterCounts;
  }
  ```

3. Using `countCharacters`, report if all the characters are unique.
  > hint: Use the formula for countCharacters to determine the cost of calling that function.

  ```js

  function allUnique(input) {
  	var characterCounts = countCharacters(input);

  	for(character in characterCounts){
  		if(characterCounts[character] !== 1){
  			return false;
  		}
  	}

  	return true;
  }
  ```

4. Longest Palindromic Substring.
> hint: `_isPalindrome` is a sub-routine of longestPalindrome, so to determine the overall bigO of longestPalindrome, you must find the bigO of `_isPalindrome`

  ```js
  function longestPalindrome(str) {
    var longest = '';

    if(typeof str !== 'string') return longest;

    for(var start = 0; start < str.length; start++) {
        for(var end = start + 1; end < str.length + 1; end++) {
            var curSubString = str.substring(start, end)
            if(curSubString.length > longest.length && _isPalindrome(curSubString)) {
                longest = curSubString;
            }
        }
    }

    return longest;
  }

  function _isPalindrome(str) {
      var reversed = '';
      for (var i = str.length - 1; i >= 0; i--) {
          reversed += str[i];
      }

      return reversed === str;
  }
  ```

### Bonus

How do you determine the big O for recursive algorithms? Try the same process for this:

1. Recursive Fibbonacci.
  ```js
  function fibbonacciRecursive(n) {

  	if(n <= 1) {
  		return 1;
  	}

	 return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
  }
  ```
