# Searching Graphs

We're going to examine 4 searching algorithms:

* Breadth First Search
* Depth First Search
* Dijkstras Algorithm (also called Uniform Cost Search)
* A* Search

These are 4 different approaches to searching for information on a graph. Two algorithms, BFS and DFS, have been presented before in terms of trees. We have to make small changes in order to deal with __cycles__, which trees do not have.

## Objectives

* Describe and implement the following search algorithms:
  * Breadth First Search
  * Depth First Search

## Breadth-First Search

Breadth-First Search (BFS) is an extremely important algorithm to have in our toolbelt. On unweighted graphs we can use BFS to find the shortest path between any two vertices. Indeed we can use it to track the __minimum distance__ every __vertex__ is from a given __source vertex__.

At it's heart, BFS is a simple process:

1. Create an empty __queue__.
2. __Enqueue__ the __source vertex__ into the queue.
3. While the queue is __not empty__
  1. __Dequeue__ the top vertex from the queue. We are call that vertex the __current vertex__.
  2. Test the __current vertex__ to see if it's the __goal vertex__ (and return if it is).
  3. __Enqueue__ all of the neighboring vertices from __current vertex__.

The process of __dequeuing__, __testing__, and __enqueuing__ the __current vertex__'s neighbors is called __visiting__ a vertex.

process involves adding the children of a starting vertex to a __queue__, visiting them, and adding *their* children to the queue. until every vertex is visited.

Consider this example:

![BFS1](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/193/bfs-1-01.png)

> When we visit the source vertex (`0`), we add it's children `1` and `2` to the queue.

Now, we __visit__ the first __vertex__ in our queue. The queue is sometimes called __the frontier__ or __the fringe__.

![BFS2](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/192/bfs-2-01.png)

> In this image we are __visiting__ node `2`, it's children 6, 7, and 3 enter the queue.

### Practice!

Assuming the node you're searching for us node `8`, get a white board and continue to work through the example in the image. Visit each node and update the queue as you go. What's the shortest path from `0` to `8` that BFS finds?

### Explored Set

Did you notice that although `0` and `1` are both neighbors of `2`, both did not reenter the queue when we visited `2`? Abstractly speaking, BFS never "revisits" nodes, because if we're finding a vertex for a second time, we have __previously found__ the shortest path to that vertex.

In practice, this requires programmers to keep track of an __explored vertex set__. Rather than preventing duplicates from entering the queue, we ignore any node we've already added to the __explored__ list.

Consider this updated process for BFS, the new steps 2 and 5 inside our while loop account for this exploration:

1. Create an empty __queue__.
2. __Enqueue__ the __source vertex__ into the queue.
3. While the queue is __not empty__
  1. __Dequeue__ the top vertex from the queue. We are call that vertex the __current vertex__.
  2. Test the __current vertex__ to see if it's already been __explored__, if it has `continue` without performing steps 3-5.
  3. Test the __current vertex__ to see if it's the __goal vertex__ (and return if it is).
  4. __Enqueue__ all of the neighboring vertices from __current vertex__.
  5. Add the __current vertex__ to the __explored__ set.

### Sample Code

Here is some JavaScript that could implement BFS. (Note that we are making assumptions about a `Queue` data structure, and assuming that we're using an __adjacency list__ similar to how we have represented Trees):

```js
// We assume a number of these nodes have been created
// already.
function Node(value, neighbors) {
  this.neighbors = neighbors; // this is an array
  this.value = value;
}

function bfs(sourceNode, destinationNode) {
  let frontier = new Queue();
  let explored = new Set();

  let queueObj = {
    node: sourceNode,
    path = []
  };

  frontier.enqueue(queueObj);

  // Search until we're out of nodes
  while(frontier.size() > 0) {
    let currentQueueObj = frontier.dequeue();
    let curNode = currentQueueObj.node;
    let curPath = currentQueueObj.path;

    // Found a solution, return the path.
    if(curNode === destinationNode) {
      return curPath;
    }
    else if(explored.has(curNode)) {
      continue;
    }

    for(let i = 0; i < curNode.neighbors.length i++) {
      let newNode = curNode.neighbors[i];
      let newPath = curPath.slice();
      newPath.push(curNode);

      // We use this format so we can track the path
      let newQueueObj = {
        node: newNode,
        path: newPath
      }

      // If the new node isn't a solution, add it to the queue and search more.
      frontier.enqueue(newQueueObj);
    }

    explored.add(curNode);
  }

  // No solution.
  return null;
}
```

> Remember this sample code is just a starting place, you'll have to change this code to fit the implementation details of your graph!

## Depth First Search

DFS is a sister algorithm to BFS. The concept and implementation are both *very* similar.

Conceptually:

* In BFS we explore nodes in the order that we find them.
* In DFS we always explore the most recently found node.

Implementation:

* In BFS the __frontier__ is a __queue__.
* In DFS the __frontier__ is a __stack__.

This small change does introduce one crucial difference between the algorithms: breadth first search will always find the shortest path between two nodes on unweighted graphs. Depth first search is not guaranteed to find the shortest path between two nodes.

So our process now looks like this:

1. Create an empty __stack__.
2. __Push__ the __source vertex__ into the stack.
3. While the stack is __not empty__
  1. __Pop__ the top vertex from the stack. We are call that vertex the __current vertex__.
  2. Test the __current vertex__ to see if it's already been __explored__, if it has `continue` without performing steps 3-5.
  3. Test the __current vertex__ to see if it's the __goal vertex__ (and return if it is).
  4. __Push__ all of the neighboring vertices from __current vertex__.
  5. Add the __current vertex__ to the __explored__ set.

### Sample Code

Assuming the `Node` constructor from the BFS example is available:

```js
function dfs(sourceNode, destinationNode) {
  // in JS Arrays have push and pop, which behave as we expect a stack to behave.
  let frontier = [];  
  let explored = new Set();

  let queueObj = {
    node: sourceNode,
    path = []
  };

  frontier.push(sourceNode);

  // Search until we're out of nodes
  while(frontier.length > 0) {
    let currentQueueObj = frontier.pop();
    let curNode = currentQueueObj.node;
    let curPath = currentQueueObj.path;

    // Found a solution, return the path.
    if(curNode === destinationNode) {
      return curPath;
    }
    else if(explored.has(curNode)) {
      continue;
    }

    for(let i = 0; i < curNode.neighbors.length i++) {
      let newNode = curNode.neighbors[i];
      let newPath = curPath.slice();
      newPath.push(curNode);

      // We use this format so we can track the path
      let newQueueObj = {
        node: newNode,
        path: newPath
      }

      // If the new node isn't a solution, add it to the queue and search more.
      frontier.push(newQueueObj);
    }

    explored.add(curNode);
  }

  // No solution.
  return null;
}
```

### Practice!

Remember this image from before? Assume we're still starting at `0` and searching for `8`. If we were to use DFS instead of BFS, there are 2 paths from `0` to `8` that might be followed depending on how we break ties when __visiting__ nodes; if we put `7` in the stack first, we'll follow the path including `3`; if we but `3` in the stack first, we'll follow the path involving `7`. In the same vein, we might never explore `1` or `6`.

Simulate a run of DFS on a whiteboard. Follow the path to `8` that includes `3`. Keep track of the stack and explored set.

![DFS1](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/193/bfs-1-01.png)

# Exercise

Now, use what you know to implement some graph theory in JavaScript!

### Graphs in JavaScript

Run the tests in `test/graph` and make them pass.

You'll be updating `Excercises/src/graph/graph.js` to:

- Calculate the size of the graph
- Calculate the number of edges in the graph
- Calculate the total weight of all nodes in the graph
- Given a value, find all neighbors of the node with the given value
- Given two values, find a path between them (array of nodes)
- Find all nodes in the graph that have no edges connecting them
