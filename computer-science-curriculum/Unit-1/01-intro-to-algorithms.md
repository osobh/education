# Intro to Algorithms

An [algorithm](https://en.wikipedia.org/wiki/Algorithm) is a well defined, step by step computational procedure for solving a problem.

Algorithms:

- have a goal ([deterministic](https://en.wikipedia.org/wiki/Deterministic_system)),
- terminate at some point in time,
- take an input, and
- produce output.

## Unit Objectives

In this unit we will:

- Define "Abstract Data Type" (ADT) and algorithm
- Discuss what Time Complexity and Space Complexity refer to and how they differ
- Describe Big O Notation and identify the complexity of any given function
- Describe what a pointer is
- Describe and implement recursive functions

Let's think about the idea of an "algorithm". Say you have a problem that you need to solve in your every day life. For instance, let's say you had a deck of cards that were shuffled. How would you approach collecting all of the suits together? Would your approach differ if you were ordering the cards by face value? What if you were ordering the cards by face value, and you always wanted the suits in the same order? Would you make several piles, and then sort the piles? Would you go through the deck many times, placing each card in it's proper place? If you were sorting groups of 5 cards instead of a whole deck, how might your approach change?

### Exercise
In everyday programming, we're often putting together simple algorithms to perform simple tasks. Consider the following:

- Ordering strings alphabetically
- Finding out if a number is a prime number
- Finding out if a number is a Harshad number
- Searching an array of users: `[{name, lastSeen}]` to find the top 5 most recently logged in users.
- Making a dictionary of users who share first names, and another of users who share last names
- Determining who won in a game of Tic Tac Toe

For as many of the above problems as you can, instead of _writing code_, try to describe how to solve these in plain english. Use step-by-step instructions to describe, and make yourself a visualization of the problem that you can test your step by step instructions on.

Now, for each set of instructions, find out the following:
- Identify the input of your problem
- Identify how to tell what the size of your input is (length of the array? Size of the number?)
- Given an input for your algorithm, determine the number of steps.
  - When you increase the size of the input by 1, how many more steps are added to the number of steps?
  - When you increase the size of the input by an order of magnitude, how many more steps are added?
- On a whiteboard, plot inputs to each algorithm given an input size of 10, 50, 100, 500, 1000, 10,000 on a graph, where the X axis is the input size and the Y axis is the number of steps.

After you have graphed these problems, move on to reading about [Big O Notation!](./02-big-o-notation.md)
