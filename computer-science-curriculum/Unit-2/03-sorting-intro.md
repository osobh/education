# Sorting Algorithms

When you're dealing with data, sorting is a very common task. While [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm) are well-understood, they also make great fodder for interview questions, so it's essential that you understand, implement, and talk about some simple sorting algorithms.

## Objectives

* Implement a bubble sort algorithm in JavaScript
* Implement a selection sort algorithm in JavaScript
* Implement an insertion sort algorithm in JavaScript

## Sorting Efficiency

There are several ways to sort data, some faster than others. Consider for example this horribly slow sorting algorithm, called [Bogosort](https://en.wikipedia.org/wiki/Bogosort):

1. Randomly shuffle the list.
2. Check if it is sorted.
  * If the list is not sorted, repeat steps 1 and 2.
  * If the list is sorted return the sorted list.

It's easy to understand that creating random permutations of the list is not an efficient way to sort data. When we talk about sorting data, we typically perform two major operations: __comparisons__ and __swaps__. We use comparisons to find where data is out-of-order, and we use swaps to get the data closer to being in order. Algorithms compete for efficiency by trying to minimize the number of swaps and comparisons that must be done before our data is completely sorted.

> Note: Because swapping is part of all these sorting algorithms it may be helpful to implement a function called `swap` which takes in an array and two indices, and swaps the values in the array at those two indices.

## The Intuitive Algorithms

Below you will see three common sorting algorithms (__bubble sort, selection sort, and insertion sort__) and some links to see them in action. These algorithms are presented before __quick sort__ and __merge sort__ because they are more intuitive.  

One of the best ways to learn these algorithms is to try to perform them yourself. Use sticky notes, pen and paper, cups, colored blocks, or whatever you find best and try to recreate these sorting scenarios. Not only will this help you tremendously in your understanding of the algorithm, but it is __essential__ to have a fundamental knowledge before trying to implement them in a programing language.

### Bubble Sort

Of the algorithms we'll be presenting, [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort) is the sorting algorithm with the worst complexity. The algorithm works by running through the array from left to right and swapping any two values it finds such that `array[i] > array[i+1]`. Each time you run this process, *at least* one element ends up in its sorted position.

##### Pseudo code

1. For each element in the list, look at the element to the right.
2. If the value on the left is greater than the value on the right, swap the two values.
3. Keep swapping until you're at the end of the array. Then move onto the next element in the array and repeat.

Bubble sort can be implemented using nested loops or recursion.

![bubble sort](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/175/bubblesort.gif)

> We know for sure that after 1 pass the rightmost element is sorted correctly, after 2 passes the right 2 elements are sorted correctly, and so on.

#### Complexity

Bubble sort is NOT an efficient algorithm. Its worst case performance is O(n<sup>2</sup>) ([quadratic time](https://en.wikipedia.org/wiki/Time_complexity)), because you have to make n iterations through a list checking all n elements each pass. This runtime means that as the number of elements sorted increase, the runtime increases quadratically. But if efficiency isn't a major concern or if you are sorting a small number of elements, bubble sort is a great way to start thinking about sorting.

### Selection Sort

[Selection sort](https://en.wikipedia.org/wiki/Selection_sort) is very similar to bubble sort. The difference is that instead of comparing each array item to its neighbor, the goal is to locate the *smallest* remaining value and drop it into the correct place in the array. This algorithm breaks the array into two sections, the __sorted__ and __unsorted__ sections. At the start of the algorithm, the whole array is the __unsorted__ section.

The basic algorithm looks like this:

#### Pseudo code

1. Pick the item at the left-most point in the __unsorted section__. Call this the __current minimum__.
1. Compare this current minimum to each item in the unsorted section.
  * If any item in the unsorted section is smaller than the  current minimum, set that item as the current minimum.
  * When you've reached the end of the __unsorted section__ the __current minimum__ must be the absolute minimum value in the unsorted section.
1. Swap the __absolute minimum__ to the left-most index in the __unsorted section__. This item is now the __right most__ member of the __sorted section__.

![selection sort](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/174/selectionsort.gif)

> The __sorted section__ is colored gold, the __current minimum__ is colored red, the __unsorted section__ is colored light blue.

>Practice with [this interactive card game](https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting)

#### Complexity

Since selection sort is so similar to bubble sort, you can probably guess what the complexity of this sorting algorithm is. Once you've gotten your tests to pass in the exercise below, try to analyze your code to determine the complexity a little more rigorously.

__Specifically, prove that this claim is true or false__: Although bubble sort and selection sort are both `O(n^2)`, bubble sort will __always__ perform more total operations (swaps + comparisons).

### Insertion Sort

[Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) works by taking your array and incrementally sorting the values on the left hand side. Similar to selection sort, this algorithm makes  distinction between a __sorted section__ and an __unsorted section__. Unlike selection sort, insertion sort grabs the __next unsorted item__ (as opposed to the smallest unsorted item) and places it into the correct place in the __sorted section__. Selection sort always places an item in the right-most position of the sorted section, insertion sort will search for the __right__ index within the __sorted section__.

#### Pseudo code

1. Select the left-most item in the __unsorted section__, call this the __current item__.
2. Select the right-most index of the __sorted section__ and call this element __current sorted item__.
  * Compare the __current item__ to the __current sorted item__
  * If __current item__ is less than the value of __current sorted item__, swap the two.
  * Now update __current sorted item__ to be the item to the left of __current item's__ new position.
  * Repeat this process until __current item__ is greater than or equal to the __current sorted item__. Now __current item__ is part of the __sorted section__.
3. Repeat until the __unsorted section__ is empty.

![insertion sort](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/173/insertionsort.gif)

> __current item__ turns gets pulled off the image to the bottom of the screen. __current sorted item__ is colored green. The __sorted section__ is colored gold, and the __unsorted section__ is colored light blue. 

Note that after step 1, the first two elements will be sorted. After step 2, the first three elements will be sorted. After repeating step 2 once, the first four elements will be sorted, and so on. After each step in the process, the sorted portion of the area increases in size by 1, until the entire array is sorted.

#### Complexity

If the array is already sorted, insertion sort is relatively fast at [O(n)](https://en.wikipedia.org/wiki/Time_complexity#Linear_time). But in general, the complexity here is [O(n<sup>2</sup>)](https://en.wikipedia.org/wiki/Time_complexity). Can you convince yourself why this is the case after you've implemented insertion sort on your own?

## Picking a Sorting Algorithm

With all of the sorting algorithms to choose from – and we've only named a few – which one is **best**? Well, it depends. This largely depends on the type of data we're sorting, how large the input is, and how much performance and speed matter to us.

> If you'd like to dig into sorting algorithms even more, consider watching [15 Sorting Algorithms in 6 Minutes](https://www.youtube.com/watch?v=kPRA0W1kECg) to see how some of them compare visually.

### Bonus question

Most programming languages have a sorting mechanism built in. What sorting algorithm does your language of choice use?

# Exercises:

Once you're comfortable with the general idea of sorting algorithms, the best way to solidify your understanding is to write one out in code.

# Implementing Sorting Algorithms in Javascript

Complete the `sorting/sortingAlgorithmsSpecPart1.js` tests.

## Part 1: Bubble Sort, Selection Sort, Insertion Sort

Try to implement bubble sort, selection sort, and insertion sort (if you need a refresher on these algorithms, check out the [computer science curriculum](https://github.com/gSchool/computer-science-curriculum/blob/master/Unit-2/04-sorting-intro.md)).

For each of these algorithms, you'll also find it helpful to implement a `swap` function which swaps to values in an array.

Your goal is to get the tests for `bubbleSort`, `selectionSort`, `insertionSort`, and `swap` to pass. Note: The tests for the three searching algorithms are the same, but don't use the same implementation for each! The goal of this exercise is for you to be able to implement the different algorithms, even though they have the same effect on the arrays in the tests.

### Helpful Resources

* [https://study.cs50.net](https://study.cs50.net)
* [http://www.sorting-algorithms.com/](http://www.sorting-algorithms.com/)
* [Bubble Sort in JavaScript](http://www.nczonline.net/blog/2009/05/26/computer-science-in-javascript-bubble-sort/)
* [Selection Sort in JavaScript](http://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/)
* [Insertion Sort in JavaScript](http://www.nczonline.net/blog/2012/09/17/computer-science-in-javascript-insertion-sort/)
* [Visual Sorting](http://visualgo.net/sorting)
