# Sorting Algorithms, Part 2

## Objectives

* Implement a merge sort algorithm in Javascript
* Implement a quicksort algorithm in Javascript

## Introduction

In [Part 1](../Unit-2/04-sorting-intro.md), you learned about three relatively straightforward sorting algorithms: bubble sort, selection sort, and insertion sort. Compared to other sorting algorithms, these three are some of the most approachable and easy to reason about. However, if you're trying to sort an array with millions of values, these algorithms are also not terribly efficient: on average, all three of them are O(n<sup>2</sup>), where n represents the size of the array being sorted.

In this section, we'll learn about two other sorting algorithms: merge sort and quicksort. These two algorithms perform better on average as the size of the array grows, but they're also a bit more complicated. Let's talk about these algorithms conceptually and create some pseudo-code; you'll be asked to implement each of these algorithms at the end.

## Merge Sort

Merge sort works by decomposing the array into smaller chunks, which are then sorted and merged together. This process goes all the way down to arrays of size 1, which are super easy to sort!

Here's a step-by-step description of merge sort:

**Pseudo Code:**

1. If your array has a length less than 2, congratulations! It's already sorted.
2. Otherwise, cut your array in half, and consider the two sub-arrays separately.
3. Sort each of your smaller subarrays using merge sort.
4. Merge your two subarrays together, and return the merged array.

![merge sort](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/172/mergesort.gif)

Through this recursive process, you'll wind up with a sorted array!

In order to implement this function, it's useful to have a helper function that takes two sorted arrays and merges them together to create a new, larger sorted array. Here's some pseudo-code to get you started:

```js
function merge(arr1, arr2) {

	// 1. declare a new empty array, and pointers corresponding to indices in arr1 and arr2 (set them both to 0)
	// 2. if the first element in arr1 is less than the first element in arr2, push the first element in arr1 to the new array, and move the pointer for arr1 one spot to the right. Otherwise, do this for arr2.
	// 3. Repeat this process until you've gone through one of the arrays
	// return the new array, concatenated with whatever elements are remaining from the array that you haven't exhausted yet.

}
```

Once you've implemented this merge function, you can implement merge sort using the pseudo code outlined above.

**Time Complexity**

Determining the time complexity of merge sort requires some careful thought. From a high level, merge sort works by subdividing the original array into subarrays that are half as long, until the subarrays can't be divided any further and are therefore already sorted.

Then comes the merging. At each level (1-element arrays to 2-element arrays, 2-element arrays to 4-element arrays, and so on), there are O(n) operations that need to be performed. And how many levels are there? Well, the number of levels equals the number of times you can divide n by 2 before you get a quotient that's less than or equal to 1. But this is just log<sub>2</sub>(n). Therefore, the time complexity is log(n) copies of O(n), a.k.a. O(n log(n))!

![http://i.stack.imgur.com/rPhxO.png](http://i.stack.imgur.com/rPhxO.png)

Vieiwing the image above as a tree, its height is roughly equal to log<sub>2</sub>(n).

(For some more discussion on this, check out this [programmers stackexchange](http://programmers.stackexchange.com/questions/297160/why-is-mergesort-olog-n) The above image comes from that conversation).

**Space Complexity**

Because merge sort requires the use of a merge function which takes two arrays and creates a new array that's (roughly) twice as large, the space complexity of merge sort is O(n).

## Quicksort

Quicksort is probably the least straightforward of all the sorting algorithms we'll consider here. Like merge sort, the time complexity for quicksort is typically O(n log(n)) (though in the worst case, it can be O(n<sup>2</sup>)). However, when sorting an array in place using quicksort, the space complexity is better than merge sort: O(log(n)) rather than O(n).

Before diving into the algorithm, you whould watch [this video from Computerphile](https://www.youtube.com/watch?v=XE4VP_8Y0BU), which does a great job of explaining how quicksort works.

Here's the gist of how quicksort works:

1. Take an element in the array and refer to it as the "pivot." For simplicity, we'll take the first element in the array to be the pivot. (As you'll see, this is a bad choice if the array is already sorted. It makes the algorithm a little easier to reason about though, so we'll take the tradeoff.)
2. Compare every other element to the pivot. If it's less than the pivot value, move it to the left of the pivot. If it's greater, move it to the right. Don't worry about where on the left or right you're putting these values; the only thing that matters is comparisons to the pivot.
3. Once you're done, the pivot will be in the right place, and you can then recursively repeat this process with the left and right halves of the array.

![quicksort](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/171/quicksort.gif)

(Note: for arrays with unique values, you can think of this process as generating a binary search tree. The root node is the first pivot, and every subsequent node is a subsequently chosen pivot.)

Before worrying about implementing a quicksort with the best possible space complexity, let's write a quicksort that just gets the job done with O(n) space complexity. Here's some pseudo code:

```js
function quickSort(arr) {
  /* 1. If the length of the array is less than 2, it is already sorted, so return it.
  2. Otherwise, create two empty arrays (one for the left and one for the right), and set the first value in arr equal to the pivot.
  3. Compare every element in the array to the pivot. If the element is less than the pivot, push it into the left array. Otherwise, push it into the right array.
  4. Recrusively call quickSort on the left array and the right array, then concatenate these arrays together with the pivot value in between them, and return this larger array. */
}
```

The downside with the above approach is that when we pass an array into `quickSort`, we're getting a new array back, which requires more memory. If space complexity is important (for example, if you're trying to sort an array with millions of elements), then it might be better to try to implement quicksort on an array _in place_.

This approach is a bit more complicated, and is typically done with the addition of a helper function called `partition`, which handles arranging the values in a given section of an array so that they are moved to the either side of a given pivot based on their values.

This will be easier to understand with some more pseudo code:

```js
// left and right indicate the left and rightmost indices in the sub-array that you're partitioning.

function partition(arr, left, right) {
  /* 1. Set the pivot value to be the value at the left index, and set a varaible called partitionIndex equal to left. The partitionIndex will help us keep track of where to perform our swaps so that we wind up with values correctly placed on either side of the pivot.
  2. For every index greater than left and less than right + 1, compare the array value to the pivot value.
  3. If the array value at the given index is less than the pivot value, increment the partition index and swap the array value with the value at the partition index.
  4. At the end, swap the pivot value with the value at the partition index (this ensures that the pivot ends up in between values less than it and values greater than it).
  5. Return the partition index. */
}

function quickSort(arr, left=0, right=arr.length - 1) {
  /* 1. If left is less than right, declare a variable called partitionIndex which is equal to the result of a call to partition, passing in arr, left, and right. After the call to partition, perform a quicksort to the two subarrays to the left and right of the partitionIndex.
  2. Return arr. */
}
```

Hopefully this should be enough to get you on your way to implementing quicksort with O(log(n)) space complexity. If you're still stuck, consult some of the references below.

## What about `Array.prototype.sort`?

As you may know, Javascript (along with most other languages) has a built-in sort method on arrays. This raises a question: what sorting method is being used under the hood?

Well, it depends. As of 2012, according to Nicholas C. Zakas (reference below):

> Quicksort is generally considered to be efficient and fast and so is used by V8 as the implementation for Array.prototype.sort() on arrays with more than 23 items. For less than 23 items, V8 uses insertion sort. Merge sort is a competitor of quicksort as it is also efficient and fast but has the added benefit of being stable. This is why Mozilla and Safari use it for their implementation of Array.prototype.sort().

# Exercises:

Complete the `sorting/sortingAlgorithmsSpecPart2.js` tests.

## Stretch Goal: Merge Sort, Quicksort

Try to implement two more advanced sorting algorithms: merge sort and quicksort.

For merge sort, you'll find it helpful to implement a `merge` function which takes two sorted arrays and merges them into one sorted array.

Your goal is to get the tests for `mergeSort`, `quickSort`, and `merge` to pass. Note: As in Part 1, don't use the same implementations for these searching algorithms!

## Resources:

* [Merge Sort in JavaScript](http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/)
* [Merge Sort Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
* [Quick Sort in JavaScript](http://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/)
* [Quicksort in Javascript](https://en.wikibooks.org/wiki/Algorithm_Implementation/Sorting/Quicksort#JavaScript)
* [JS Front-end Interview Questions: Quicksort](http://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort
)
