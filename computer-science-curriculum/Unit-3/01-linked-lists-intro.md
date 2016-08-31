# Linked Lists

A [linked list](https://en.wikipedia.org/wiki/Linked_list) is a data structure that helps keep an ordered list of data.  The linked list can be thought of as similar to other ordered data structures like arrays.  The key difference is how an array is stored verses a linked list.

## Objectives

By the end of this lesson you should be able to:

1. Implement linked lists using JavaScript
1. Write and describe basic algorithms associated with manipulating linked lists
1. Advanced: Reverse a linked list in place iteratively and recursively

## Data Structures And Memory

Modern programming languages hide a lot of the complexity of dealing with a computer.  In languages like JavaScript and Ruby we never have to worry about memory allocation, but it is important to know what is going on behind the scenes when you use it.

### Arrays

The classical definition of an Array is a statically sized, contiguous, block of memory. The block of memory is divided into evenly sized buckets, each of which holds one item. When you create an array, you're really __reserving a block of memory__. In a classical array, we request a block __of a specific size__. If we run out of space we have to __create a new__ (bigger) block of memory and copy all the values into this new memory location.

The JavaScript `Array` appears to hold an infinite amount of data simply by using the `push` method.  However, under the hood, there is a lot more going on.  When you first create an array, JavaScript allocates a certain amount of memory -- just like a classical array.

![](http://web.cs.ucla.edu/classes/winter12/cs111/scribe/1c/img4.jpg)

If you continue to push data, the allocated memory will eventually run out!  Once the memory runs out, JavaScript is still able to make the array larger, but the operation to make the array larger is [O(n)](https://en.wikipedia.org/wiki/Time_complexity#Linear_time).  The steps are as follows:

* Allocate more memory so we can fit the new item we want to push.
* If the array used to be of size z, an implementation might allocate 2 * z sized memory to leave some room to grow.
* For all n elements in the array, copy the values from the old memory to the new memory.
* Add the new value we want to push to the end of the new array.
* Update the size of the array.
* Delete the old memory

This process is a convenience for programmers, but it also has performance implications. For example, since the algorithm above iterates over all items in the array (in the worst case), the runtime is O(n).

If the runtime of pushing is important to your program, you may want to use a different data structure.  One option is a **linked list**; linked lists can ensure that `push` is __always__ constant time. Linked lists come in two styles, singly and doubly linked. We'll examine both.

### Singly Linked List

A singly linked list is stored in memory using __nodes__ and __references or pointers__ to other nodes. We think of these references as being __linear__, after all Linked Lists are alternatives to Arrays. In the drawing below, we see this "linearity" of __nodes__.

![](http://www.cs.usfca.edu/~srollins/courses/cs112-f07/web/notes/linkedlists/ll2.gif)

> Each Square is a node. Each node a reference to the item which comes next.

It looks like the nodes in our list are all in a line. In memory, the list is scattered all over the place. Recall that we do not have control over how Objects are stored in __The Heap__.

The first object could be at a very high memory address and the second object could be at a very low memory address.  The only thing that keeps the list together is the __next__ pointers.  The next pointers are references to where the next element in the linked list list is located.

Linked Lists typically have 2 very important pointers:

1. The __head__, a pointer to the __first__ node in the list. Equivalent to `myArray[0]`.
2. The __tail__, a pointer to the __last__ node. Equivalent to `myArray[myArray.length - 1]`.

A nice thing about the singly linked list is that inserting at the end of the list is always [O(1)](https://en.wikipedia.org/wiki/Time_complexity#Constant_time).  Why is appending to a singly linked list O(1)? Because of the tail pointer, we always have constant access to the end of the list.  

Whenever you need to add or remove an item from the end you follow 3 simple steps:

1. Give the current tail a __next__ pointer to the new node.
1. Change the tail to point to the new node.
1. Give the new node a __next__ pointer of `undefined` or `null`.

### Doubly Linked Lists

A [doubly linked list](https://en.wikipedia.org/wiki/Doubly_linked_list) is a list where each node has two pointers - a next pointer and a previous pointer.  Take a look at these two visualizations of doubly linked lists:

![https://www.cs.auckland.ac.nz/~jmor159/PLDS210/fig/dllist.gif](https://www.cs.auckland.ac.nz/~jmor159/PLDS210/fig/dllist.gif)

![](http://www.geeksforgeeks.org/wp-content/uploads/DLL3.jpg)

> Notice that in a doubly linked list `head.previous` and `tail.next` should both always be `undefined` or `null`.

Keeping track of next and previous has some advantages.  For example, the `pop` method is now much easier.  Since we have access to the element before, the operations is [O(1)](https://en.wikipedia.org/wiki/Time_complexity#Constant_time).  Instead of O(n) with a singly linked list.

To see why this is true, think about __push__ in singly linked lists. We grab the tail, and give it a brand new node as __next__. With doubly linked, we can __pop__ with the same pattern.

1. Grab the __tail__ node.
1. Use __tail.previous__ to get the *second to last* node.
1. Point the *second to last node's* __next__ to `undefined` or `null`, effectively breaking the chain to that node.
1. Point the __tail__ to the second to last node.

After that process, nothing points at the __original tail__, so it will eventually be garbage collected.

Here is an implementation of the push method for a doubly linked list (assuming a constructor function for Nodes):

```javascript
DoublyLinkedList.prototype.push = function(value) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = this.head;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;

  return this;
};
```

And here is an implementation of the pop method:

```javascript

DoublyLinkedList.prototype.pop = function() {
  if (!this.head) return undefined;

  // special case where the length of the list is 1
  // so the head and tail need to be set to null
  if (this.length === 1) {
    var returnValue = this.tail.value;
    this.length = 0;
    this.head = this.tail = null;
    return returnValue;
  }

  var oldTail = this.tail;
  this.tail = oldTail.previous;
  this.tail.next = null;
  oldTail.previous = null;
  var returnValue = oldTail.value;

  this.length--;

  return returnValue;
}
```

Notice that both `push` and `pop` are now constant time operations.

#### Fun Aside: Circular Linked Lists

A circular linked list is a list in which the tail element's `next` property is pointing to the `head` of the linked list, and the `previous` property of the `head` points to the `tail`. Can you think of a time you'd prefer to model things as a circularly linked list?

![circular linked list](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Circularly-linked-list.svg/700px-Circularly-linked-list.svg.png)

# EXERCISES

### Part 1 - Singly Linked Lists

Finish the `Exercises/src/linked-list/singly_linked_list.js` in this repo. You can run the tests associated with JUST the linked list exercise using this command:

`$ mocha Exercises/test/linked-list/singly_linked_list.test.js`

Use the Red Green Refactor methodology to build your list. Here are the methods you must complete:

`__getNodeAt`: A function for internal use to find a node at an index.  When implementing the function try to think of the most efficient way of finding the index.  For example, if the list has 3000 elements and the index that we want is at index 2950, does it make more sense to find the node by starting from the front or from the back?

`get`: Gets the value of a node at an index.  This method should  use `__getNodeAt` internally.

`set`: Sets the value at an index.  This method should use `__getNodeAt` internally.

`insert`: Inserts a value at a position.  For example, if the list is [3,7,8], `insert(0,10)` results in a list of [10,3,7,8].

`unshift`: Adds a value to the front of the list

`shift`: removes a value from the front of the list

`remove`: removes a value at an index

If you feel lost, try this process:

1. Pick a test from `Exercises/test/linked-list/singly_linked_list.test.js`
1. Read it carefully, try to understand what it does, and what that means your Linked List needs to do.
1. If you're still confused use Google, you should be able to find some reference implementations for clues on how to get started.

**Stretch Goal**

Implement reverse on a singly linked list: Write tests first then make the tests pass.

### Part 2 - Doubly Linked Lists

Doubly Linked Lists have the same API as Singly Linked Lists. Now that you've implemented Singly Linked Lists, extend your implementations to be doubly linked. Once again, there is a reference implementation in this repo called `doubly_linked_list_solution.js`. Use it for inspiration, but challenge yourself not to copy any code.

### Part 3 - Bonus Problems With Doubly Linked Lists

Red Green Refactor the following:

1. Write a reverse function that reverses the list in one pass.
1. Write a function to return the most frequent value in the linked list.
1. Write a function called rotate that takes 2 parameters.  The first is how many locations the list should rotate.  The second is true if the list should rotate forward and false if it should rotate backwards.  For example, if the list is 1,2,3,4,5,6,7 and `rotate(3,true)` is called, the list would become 5,6,7,1,2,3,4.  If `rotate(1,false)` is called on the same list, the new list would be 2,3,4,5,6,7,1.
1. Write a function that sorts the list (you can start with bubble sort, but try something more complicated like merge sort or quick sort).
1. Make another class that uses the `DoublyLinkedList` class.  The class should be a `SortedLinkList`.  The `SortedLinkList` will always maintain a sorted order for you.  For example, if the list contains 4,8,11,22,55 and `insert(13)` is called, the new list will be 4,8,11,13,22,55.  Since this is now a `SortedLinkList`, the following methods aren't needed: `push`, `pop`, `shift`, `unshift`.  Also, `set`, should be replaced with `insert`, which does not take an index.  Insert takes a value, only.
