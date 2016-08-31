# Testing With Mocha Chai

In script.js you'll find 3 functions which already have implementations. These functions may have errors, they may not. Your objective is to write tests using `Mocha` and `Chai` for each one that can prove they are correct or incorrect. 

If you find bugs in the original functions, you should fix the bugs by using the "Red Green Refactor" strategy. 

## Getting Started

Fork and clone this repository. Once you've got the code locally, install mocha and chai by using:

```
$ npm install -g mocha # Only needed if you don't already have mocha installed globally
$ npm install chai
```

Now, examine the three mostly empty files:

```
── test
    ├── testIsPrime.js
    ├── testReversInPlace.js
    └── testReverseArray.js
```

In each file you should put a mocha test suite associated with the function it is named for. Remember in `mocha` tests all start with a `describe` block, and each describe has `it` statemements. A shell for `testIsPrime.js` might look like:

```js
describe("isPrime", function() {
	it("should return true for prime numbers", function(){
		// tests here
	});
	
	it("should return false for non-prime numbers", function() {
		// tests here
	});
	
	it("should return false for non-number inputs", function(){
		// tests here
	});
}
```

## Resources

Rely heavily on the mocha and chai documentation for test writing, especially the `expect` section of `chai`.

* [http://chaijs.com/api/bdd/](http://chaijs.com/api/bdd/)
* [https://mochajs.org/#getting-started](https://mochajs.org/#getting-started)


## Turning This In

Once you've finished, be sure to push the latest code to your fork's master branch. Then, copy the github URL for that branch into the assignment submission box on Workbook. 
