# Constraining Trees & Special Trees

Trees are a fairly general and flexible data structure. Trees can also have specializations. Trees are given __constraints__ (rules) on how they can behave and these constraints allow us to make powerful assumptions about our data.

## Objectives

* Define binary tree.
* Define binary search tree.
* Define trie.

### Binary Tree

Specializations of trees usually give constraints to nodes and their children. One common constraint is setting a limit on the __number of children__ each node can have. For example, a __binary tree__ is a type of tree where each node can have at maximum 2 children.

[binary tree](https://en.wikipedia.org/wiki/Binary_tree).

![Binary Tree](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/tree1.bmp)
> A tree in which each node can have at most 2 children is called a binary tree.

#### Binary Search Trees

In addition to setting limits on __children__ some trees give the __children__ an order. A binary search tree is one example:

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

> __Try to figure it out__: based on the image, what is special about a binary search tree?

A [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree) is a special type of binary tree which maintains a __sorted ordering of nodes__. In a __binary search tree__ every node satisfy the following constraints:

* The tree is a __binary tree__.
* Node's can have __left__ and/or __right__ children.
* A left child represents a smaller value than its parent.
* A right child represents a larger value its parent.

This constraint gives the tree a __sorted ordering__. This ordering gives us a nice structure for a very fast search we've already seen, called __binary search__.

To perform binary search in a binary search tree we start at the __root__ node and:

* If the node is the number we're searching for, we did it.
* If we are looking for a smaller number, we follow the left path.
* If we are looking for a larger number, we follow the right path.
* Repeat this process recursively until we are at a __leaf node__ or find the value we are searching for.

#### Practice - Write and Reflect

Answer these questions:

* How does this differ from doing binary search in a sorted Array?
* Binary search is __not__ strictly `O(log(n))` when using a binary search tree, knowing this:
  * Describe a valid binary search tree which would cause the algorithm have an `O(n)` time complexity.
  * Describe an additional constraint on the binary search tree which causes binary search algorithm to always have an `O(log(n))` time complexity.

Using at the binary search tree above:

* Redraw it on a white-board or paper.
* Identify all the numbers in the tree, and write them down in __sorted order__ from lowest to highest.
* Now __label each node__ with it's __position in the ordered list__.
* Can you identify a __pattern__ in the graph to describe how this tree encodes the order?

#### Practice - Implement

Make the `binary_tree.test.js` tests pass.  This assignment will require you to implement a binary tree with the following methods.

- `insertIteratively`: inserts a node in the proper location using iteration
- `insertRecursively`: inserts a node in the proper location using recursion
- `containsIteratively`: checks to see if the tree contains a node iteratively
- `containsRecursively`: checks to see if the tree contains a node recursively
- `findLowest`: finds the lowest value in the tree
- `findHighest`: finds the lowest value in the tree
- `breadthFirstSearch`: traverses through the tree and returns an array of all of the values using Breadth First Search (from left to right) - you can read more about it [here](https://en.wikipedia.org/wiki/Tree_traversal#Breadth-first)
- `DFSPreOrder`: traverses through the tree and returns an array of all of the values using Depth First Search Pre-order - you can read more [here](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first)
- `DFSInOrder`: traverses through the tree and returns an array of all of the values using Depth First Search In-order - you can read more [here](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first)
- `DFSPostOrder`: traverses through the tree and returns an array of all of the values using Depth First Search Post-order - you can read more [here](https://en.wikipedia.org/wiki/Tree_traversal#Depth-first)
- `size `: calculates how many nodes are in the tree (do this without adding a size property to your tree! Use a traversal method to calculate this!)
- `bfs-dfs` : Make all of these tests pass
- `remove`: removes a node from a binary tree. Remember that this method must take into account if the node has any children and if the node is a leaf. [Here](https://www.youtube.com/watch?v=3TOl3Fv4394) is a great video that explains this process.

#### Stretch Goals

- https://github.com/gSchool/maze-solvability
- https://github.com/gSchool/text-tree-parser
- https://github.com/gSchool/csv-to-tree

### Tries

In some Trees, nodes are given meaning by the  __path__ to them from the __root node__. In such trees any __single node__ only encodes one part of the meaning; the data from all the nodes in the __path__ must be combined to extract the complete message.

A __Trie__ is such a tree. In a Trie each __node__ encodes a single letter and each each __path__ represents a word. Because it's true that there is a __single path__ to any one node, it's fair to say that an individual __node__ represents a word, although it only encodes a single letter. Consider this example:

![Trie](http://www.cse.unsw.edu.au/~z5078476/shared/comp1927/html/Pics/tries/trie-example.png)

> A trie which represents several words: aces, ape, apes, app, apply, ear, earl, early, earth, east are all present

A __trie__ is an ordered tree data structure that is used to store strings. It can also be called a digital tree, radix tree, or prefix tree (as they can be searched by prefixes).

A trie is a special tree used for alphabetizing strings. The root represents an empty string, and as you traverse down the tree, each node adds a letter to the word. Each __internal__ (non-leaf) node is said to represent a __prefix__. Each node's prefix tells us what kind of words will follow as children.

![](https://upload.wikimedia.org/wikipedia/commons/b/be/Trie_example.svg)

>As we head to the left, words beginning with a lowercase "t" are displayed. At this point our prefix is "t".  
>
>Consider where you'd place the following words and what the paths to them would be: _Aruba, arguable, initialize, innards, isle, tail, tenant, top._

## Practice -- BONUS

Implement `Exercises/src/trees/tries/trie.js` until it passes the test suite in `Exercises/test/trees/tries/trie.test.js`!

### Bonus Trees

There are __many__ more kinds of trees. Consider researching these trees on your own!

####  AVL Tree

AVL (or height-balanced) binary search tree is any node-based binary search tree that automatically keeps its height (maximal number of levels below the root) small in the face of arbitrary item insertions and deletions

#### B Tree

B-tree is a tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. Unlike a binary tree, a node in the B-tree can have much more than two children (Comer 1979, p. 123). Unlike self-balancing binary search trees, the B-tree is optimized for systems that read and write large blocks of data. It is commonly used in databases and filesystems to make lookup of data faster.

## Resources

[http://visualgo.net/bst.html](http://visualgo.net/bst.html)

To run the tests for binary trees: run ```mocha test/trees``` from the Exercises folder of the CS curriculum.
