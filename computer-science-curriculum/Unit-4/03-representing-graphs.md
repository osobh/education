# Representing Graphs in Memory

Graphs are an abstract concept. In order to actually write programs using graphs, we have to represent these graphs within the constructs available to us in a programming language like JavaScript or Python.

Unlike the mathematical notation we learned previously, these __concrete__ representations can be used directly by computers. We will present three such concrete representations.

## Objectives

* Define and use the following to represent graphs:
  * Adjacency Matrix
  * Adjacency List
  * Edge List

## Interactive Learning

Visualgo gives us a wonderful tool for drawing graphs and viewing several different ways to represent the graph. Check it out, try and figure out what the three formats presented there represent.

[Visualgo graph tool](http://visualgo.net/graphds)

## Adjacency Matrix

An adjacency matrix is a square matrix (or a square grid if you prefer). Each row represents a node, each column represents a node. The value in `matrix[row][col]` represents the edge between the row node and the column node. Typically a nested array is used to represent the matrix.

### Adjacency Matrix: Undirected, Unweighted Graph

<img src="http://i.imgur.com/yjiu6g3.png" style="height: 300px;background: white;" />

In this image, a 0 represents no connection between two nodes and a 1 represents a connection. Notice that this matrix is symmetrical along the diagonal from top-left to bottom-right. This is because the graph is not directed. If we go from 2 to 1 we can always go from 1 to 2, therefore `matrix[1][2] === matrix[2][1]`. This **must** be true, otherwise the graph could not be undirected.

Instead of 0, some adjacency matrices might represent no connection with `null` or `undefined`.

### Adjacency Matrix: Directed, unweighted.

<img src="http://i.imgur.com/UNrHEtS.png" style="height: 300px;background: white;" />

In this example, going from 1 to 2 is represented at `matrix[1][2]` (the top row, the second column) and has a value of 1. The reverse, going from 2 to 1 is represented at `matrix[2][1]` (the second row, the first column) and has a value of -1. This is an unweighted graph, so -1 isn't a cost -- it's a way to represent the fact that there IS an edge between these nodes, but that it can't be traveled in the 2 to 1 direction.

Some adjacency matrices might not encode that information, choosing to leave `matrix[2][1] === 0` would not be wrong. You cannot travel from node 2 to node 1. What's the advantage and disadvantage of using `-1`?

### Adjacency Matrix: Weighted Directed

<img src="http://i.imgur.com/SIKGgHb.png" style="height: 300px;background: white;" />

In a weighted graph, we store the edge weight instead of 0 or 1. This graph does highlight one danger of the choice to store negative weights to mean that an edge goes the other direction.

To see this weakness, consider the values at `matrix[2][1]` and `matrix[2][4]`. Both have a value of `-1`, but if you look at the picture of the graph its clear that you __can__ go from 2 to 4, but you cannot go from 2 to 1.

Can you think of a way to encode the relationship between `2` and `1` without creating this ambiguity?

#### Practice

Go back to this [Visualgo](http://visualgo.net/graphds) graph. Try each of these steps, but before you do each one try to __predict__  how the __adjacency matrix__ will change with each step.

1. Click the screen 3 times to add 3 nodes.
2. Click a node and drag to another node to create an edge.
  * Make at least 3 new edges.
3. Now, at the top click on the `D/W` to switch to a __directed weighted__ graph and repeat steps 1 and 2.
  * Do this for U/W and D/U as well.
  * How does Visalgo deal with the `-1` ambiguity we pointed out in the matrix above?

## Adjacency List

An adjacency list is a list of lists, or a collection of lists. Each node is given a list of nodes it has an edge to.

### Adjacency List: Unweighted Directed

<img src="http://i.imgur.com/0ro7KHC.png" style="height: 300px;background: white;" />

For each node in the graph, we have a list of it's edges. In JavaScript this graph could be represented with an Object or an Array. Consider these:

Object:
```js
var graphLookup = {
  1: [2,3],
  2: [4],
  3: [4],
  4: [5],
  5: [6],
  6: []
}
```

Array:
```js
var graphList = [
  undefined,
  [2,3],
  [4],
  [4],
  [5],
  [6],
  []
]
```

The only real noteworthy difference is that in the Array version we explicitly set the value at `graphList[0]` to `undefined`. This is because there is no node with a label `0`.

If we want to encode weighted graphs using Adjacency Lists we must use a complex data type, like JSON. For example:

```js
var graphList = [
  [{node: 2, weight: 5}, {node: 3, weight: 14}],
  [{node: 4, weight: 3}]
  // and so on...
]
```

#### Practice

Go back to this [Visualgo](http://visualgo.net/graphds) graph. Try each of these steps, but before you do each one try to __predict__  how the __adjacency list__ will change with each step.

1. Click the screen 3 times to add 3 nodes.
2. Click a node and drag to another node to create an edge.
  * Make at least 3 new edges.
3. Now, at the top click on the `D/W` to switch to a __directed weighted__ graph and repeat steps 1 and 2.
  * Do this for U/W and D/U as well.
  * How does Visalgo deal with the `-1` ambiguity we pointed out in the matrix above?

## Edge Lists

Edge Lists are a way to represent graphs by keeping track of only the edges. In this representation, the list of nodes is *implied* rather than made explicit. Consider our example from before:  

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important">

An edge list for this graph would look like this:

```js
var edgeList = [
  [1,2],
  [1,3],
  [3,4],
  [4,2],
  [4,5],
  [5,6]
]
```

One drawback of edge lists is that it can be very difficult to determine all the nodes. In fact, if you have a graph where a single node has no inbound or outbound nodes, the edge list cannot be used to appropriately encode that information!

If we wish to encode weight data, once again we'd use something like JSON as we did for adjacency lists.

#### Practice

Go back to this [Visualgo](http://visualgo.net/graphds) graph. Try each of these steps, but before you do each one try to __predict__  how the __edge list__ will change with each step.

1. Click the screen 3 times to add 3 nodes.
2. Click a node and drag to another node to create an edge.
  * Make at least 3 new edges.
3. Now, at the top click on the `D/W` to switch to a __directed weighted__ graph and repeat steps 1 and 2.
  * Do this for U/W and D/U as well.
  * How does Visalgo deal with the `-1` ambiguity we pointed out in the matrix above?

## Pointers

The final way we'll present for representing graphs is one you're familiar with already. Representing nodes as Objects and giving each Node a list of edges. This is how we've been representing Trees and Linked Lists, which you now know are simply restricted graphs.

```js
function Node(cityName) {
  this.nodeValue = nodeValue;
  this.edges = [];
}
```

Using this method we can represent the graph as a list of nodes. Once we've added all of the Nodes to an array then this representation is fundamentally an adjacency list. However, for connected graphs it can be possible to use a single __source__ node to represent the graph. we've seen this style of representation for trees using the __root__ node.

#### Practice!

Represent the following graph in JavaScript to using each representation:
* adjacency matrix,
* adjacency list,
* edge list.

![graphdata](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/191/graph-data-01-01.png)

## Complexity of Representations

There are tradeoffs made when deciding how to represent a graph. Using one representation or the other may improve the overall speed of a program using graphs. Lets examine a few common operations for graphs, and their time complexity. We'll also discuss about the __total size complexity__ for representing graphs in different ways.

The basic operations of a graph are:

* Adding an edge
* Deleting an edge
* Answering the question "is there an edge between i and j"
* Finding the successors of a given vertex

Depending on the representation, these operations have different complexities.

## Wait, What's n?

Because graphs have 2 fundamental components, we usually write Big O notation using V (for the number of vertices) and E (for the number of edges).

### Complexity: Adjacency Matrix

* Total Size -- `O(V^2)`
  * Its a square matrix with a row and column for each vertex.
* Adding an edge – `O(1)`
  * Access the edge we want to create with the index values: `matrix[i][j] = 1`
* Deleting an edge – `O(1)`
  * Access the edge we want to create with the index values: `matrix[i][j] = 0`
* Answering the question "is there an edge between i and j" – `O(1)`
  Access the edge we want to create with the index values: `matrix[i][j] = 0`
* Finding the successors of a given vertex – `O(V)`
  * Grab the row representing the vertex, it has `V` entries, one for each possible edge.

Using an adjacency matrix makes most operations very fast, but if you have a lot of vertices it takes quite a lot of space. These are particularly effective when the graph is __dense__ (meaning most nodes are connected to __lots__ of other nodes). If every vertex is connected to every other vertex, other representations will also take `V^2` space.

For __sparse__ graphs - graphs where there are not very many edges - an adjacency matrix is probably not the most efficient option.

### Complexity: Adjacency List

* Total Size -- `O(V+E)`
  * Every vertex gets a list of its own.
  * The maximum size of the inner arrays is the number of edges there are.
  * If there are more of one or the other, the total size is bounded by the bigger of `V` or `E`
* Adding an edge – `O(V)`
  * Constant lookup for the vertex, then in order to not insert duplicates, you must iterate over the list of edges.
* Deleting an edge – `O(V)`
  * Same as adding
* Answering the question "is there an edge between i and j" – `O(V)`
  * Same as adding and deleting
* Finding the successors of a given vertex – `O(V)`
  * same as adding/deleting/finding a single edge.

The reason these are all bounded by the size of V is that in a vertex which has an edge to every other vertex, you would always be traversing a list of size V.

Although all these operations are `O(V)`, it's often the case that the number of outbound edges per vertex is significantly less than `V`. This is an especially effective representation for __sparse__ graphs. It can also be effective when the number of vertices is low, regardless of the __density__ of the graph.

## Complexity: Edge Lists

* Total Size -- `O(E)`
  * vertices aren't directly represented.
  * The exact size of the list is number of edges there are in the graph.
* Adding an edge – `O(E)`
  * In order to not insert duplicates, you must iterate over the list of edges.
* Deleting an edge – `O(E)`
  * In order to find the edge, you must search the whole list.
* Answering the question "is there an edge between i and j" – `O(E)`
  * Same as adding and deleting
* Finding the successors of a given vertex – `O(E)`
  * Only once you've iterated over the whole list can you be sure you've found all the pairs involving a specific node.

Edge lists are a good choice when you have a __sparse__ graph. They shine when there are a huge number of vertices and a relatively small number of edges.

## Practice!

There *are* good reasons to use each of these representations. Try to answer the following questions in your own words. Feel free to use google and other resources to answer these questions.

1. When would an Adjacency Matrix be a good choice for your graph? What features of a graph would signal that you should use an Adjacency Matrix?
1. When would an Adjacency List be a good choice for your graph? What features of a graph would signal that you should use an Adjacency List?
1. When would an Edge List be a good choice for your graph? What features of a graph would signal that you should use an Edge List?
