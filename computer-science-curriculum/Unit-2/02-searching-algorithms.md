# Searching Algorithms

Before we examine new data-structures, we're going to look at some algorithms for a data-structure we know and love: the Array. First we're examining how to search through an array to find a specific value. Later in this unit, we'll look at ways to sort arrays. 

## Linear Search

[Linear search](https://en.wikipedia.org/wiki/Linear_search) (or sequential) search is a method for finding a particular value in an array, that consists of checking every one of its elements, one at a time and in sequence, until the desired one is found. Linear search is the simplest search algorithm; it is a type of [brute-force search](https://en.wikipedia.org/wiki/Brute-force_search).

Linear search runs on average at [O(n)](https://en.wikipedia.org/wiki/Time_complexity#Linear_time).

In computer science, linear search or sequential search is a method for finding a particular value in a list that checks each element in sequence until the desired element is found or the list is exhausted.

https://en.wikipedia.org/wiki/Linear_search

## Binary Search

The key here is that we have a array of n element(s).

[Binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) or half-interval search finds the position of a specified input value (the search "key") within an array sorted by key value.

For binary search, the array should be arranged in ascending or descending order. In each step, the algorithm compares the search key value with the key value of the middle element of the array. If the keys match, then a matching element has been found and its index, or position, is returned. Otherwise, if the search key is less than the middle element's key, then the algorithm repeats its action on the sub-array to the left of the middle element or, if the search key is greater, on the sub-array to the right. If the remaining array to be searched is empty, then the key cannot be found in the array and a special "not found" indication is returned.

Binary search runs on average at [O(log n)](https://en.wikipedia.org/wiki/Time_complexity#Logarithmic_time) -> THIS IS [FAST](http://stackoverflow.com/a/2307314/1799408)!

The binary search algorithm begins by comparing the target value to the value of the middle element of the sorted array. If the target value is equal to the middle element's value, then the position is returned and the search is finished. If the target value is less than the middle element's value, then the search continues on the lower half of the array; or if the target value is greater than the middle element's value, then the search continues on the upper half of the array. This process continues, eliminating half of the elements, and comparing the target value to the value of the middle element of the remaining elements - until the target value is either found (and its associated element position is returned), or until the entire array has been searched (and "not found" is returned).

https://en.wikipedia.org/wiki/Binary_search_algorithm

## Exercise

Make the `array-search/search-algorithms` tests pass in the exercises directory.

### Visualization

- [Visualization](https://www.cs.usfca.edu/~galles/visualization/DFS.html)
- http://www.sorting-algorithms.com/
