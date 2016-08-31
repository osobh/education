# Recursion

## Background

[Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)) is a technique where a method can call itself. Recursion can be used to traverse tree structures. For example, take the following tree, where each letter represents a node in the tree:

```
      A
  ____|____
  |       |
  B       C
__|__   __|__
|   |   |   |
D   E   F   G
            |
            H
```

In this tree, we can say that-

* `A` is the "root" node
* `A` has two child nodes: `[B, C]`
* `B` has two child nodes: `[D, E]`
* `C` has two child nodes: `[F, G]`
* `G` has one child node:  `[H]`

Let's say you wanted to go over the entire tree and print the letters out... you could write (pseudo) code like this:

```
print the root node's letter
for each child node in the root node's children
  print the child node's letter (B, C)
  for each child in the child node's children
    print the granchild's letter (D,E,F,G)
    for each child in the grandchild's children
      print the letter (H)
```

You can see that this only works if the tree has 4 levels.  But what if it had 8 levels? Or 100?  Basically that code is doing the same thing, but from a different starting point:

1. Start with `A`, print `A`'s letter
1. Go over all of `A`'s children and repeat step 1, but start with `B`, then with `C`

We could write that in JavaScript like so:

```js
function printLetters(node) {
  console.log(node.name);
  node.children.forEach(function(childNode){
    printLetters(childNode)
  }
}
```

Make sense?

> Check out the [CMU Recursion Slides](http://www.cs.cmu.edu/~15110-f12/Unit05PtA-handout.pdf) for more.

## Quick Start

For recursion we need:

1. A base case(s)
1. Recursive step

The recursive step ensures that we progress.  The base case ensures that our recursion eventually exits, preventing an infinite loop.  Also we usually want to pass some data/information around - we do this with function returns.

### Approach #1 - Start at the bottom

1. Pretend you are at the solution
  * For example:
    * This can be a node you are searching for
    * The end of a recursive data structure
1. How do you know you found the solution (what's your base case)
1. Now that you have you answer, how do you get this answer back to the top
1. Since you have solved the problem, assuming you are at the solution...
1. How do you get to the solution
  * Easier to think one step at a time
  * How do I go one step further
  * If you know how to get from one step to the next, and know when to stop...
1. $$$

> [Sparknotes on Recursion](http://www.sparknotes.com/cs/recursion/whatisrecursion/section1.rhtml)

### Approach #2 - Identify sub-problems

Often times recursive problems require you to split a big problem into smaller problems.  For example, let's say you were trying to write a recursive function that would find the first element of an array greater than a specific number.  The `for` loop would look like this:

```js
function firstGt(array, number) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > number) {
      return array[i]
    }
  }
}
```

Here, you could split this into two sub-problems:

- Problem #1 is to take the first element of the array and see if it's bigger.  
- Problem #2 is to take the rest of the array (all _except_ the first element), and repeat Step #1.

```js
function firstGt(array, number) {
  if (array[0] > number) {
    return array[0]
  } else {
    return firstGt(array.slice(1), number)
  }
}
```

## Recursive Problem Set

First, practice a bit with the following challenges:

1. Define a recursive function that takes an argument n and prints the lyrics to 99 bottles of beer on the wall, starting with that number `n`
1. Define a recursive function that takes an argument n and returns the fibonacci value of that position. The fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21... So fib(5) should return 5 and fib(6) should return 8.
1. Define a recursive function that returns true if a string is a palindrome and false otherwise.
1.  Get the JSON data from this Reddit post using an http request: `http://www.reddit.com/r/aww/comments/zzg3k/my_local_humane_society_posts_pictures_of_new/.json`.  Write code to print out the text of each comment in your terminal.  Write code that counts the number of comments, as well.

Then make all of the tests pass in [Exercises/src/recursion/recursive-iteration.js](../Exercises/src/recursion/recursive-iteration.js).

> If you like, you can write an iterative solution to the problem first, then write the recursive solution.

For further practice you can also do:

[https://github.com/gSchool/js-hof-filter-map-reduce](https://github.com/gSchool/js-hof-filter-map-reduce)

#### Stretch goals

1. Convert Roman Numerals to Integers
1. [Recursion exercises](https://roman01la.github.io/recursion-exercises/)

## Recursion Write Up

* Why is recursion a useful technique for solving a big problem?
* What are the limitations of using recursive solutions?
* What types of problems are more suited for simple loops than recursion?
* What is meant by "recursive depth?"
* What is a "stack overflow" (the concept, not the website)? And why is that relevant to a recursive problem?
