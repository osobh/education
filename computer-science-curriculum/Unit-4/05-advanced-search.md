# Advanced Searching Algorithms

BFS and DFS are great algorithms, but DFS rarely finds the shortest path, and BFS only finds the shortest path on unweighted graphs. In this section we introduce an algorithm that finds the shortest path for any graph which doesn't have negative edge weights: Dijkstra's Algorithm. We also introduce an algorithm used for searching __very large__ graphs, for instances where we need to cleverly avoid searching paths that are unlikely to yield a solution: A* (pronounced A-Star)

## Objectives

* Describe and implement the following search algorithms:
  * Dijkstra's Algorithm
  * A* Search

## Dijkstra's Algorithm / Uniform Cost Search

BFS is a lovely algorithm, it is sure to find the __shortest path__ on unweighted graphs. When the graph has weighted edges though, the assumption that being the fewest number of edges away from the __source node__ implies the shortest path becomes false, and BFS starts to break. Consider this graph:

![Dijkstras](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9z6rVSzjfx_oyJy-YhE-7JlABzxTq3IqBLHJKP57UqlWN3udd)

> Look at the paths between node `3` and node `5`. The path with the __fewest number of edges__ is to go directly there, with a __cost__  of 34. The __shortest path__ though, is to go through node `2`, for a __cost__ of 14 + 4 = 18.

Edsger Dijkstra is a famous computer scientist. He invented an algorithm for finding the shortest path between two vertices on a weighted graph, and named it after himself (though some people call this algorithm Uniform Cost Search). Once again, the process of searching is __very similar__ to BFS and DFS. Instead of processing nodes in the order that we find them(BFS), or always processing the node we most recently found(DFS), we process in order of __lowest minimum distance from the source first__. This means, when picking which node to __visit__ next we have to account for the path we took to __find that node in the first place__ as well as the __edge weight__ to get there.

In implementation we use a data structure called a __priority queue__ instead of a stack or a queue. This data structure is similar to a queue, but instead of processing nodes in a __FIFO__ ordering, we have to provide a __priority__ whenever we __enqueue__. When we __dequeue__ our __priority queue__ returns the entry with the best __priority__.

For unweighted graphs (or graphs where all weights are the same value) Dijkstra's algorithm and BFS have identical behavior. Here is the process for Dijkstra's Algorithm:

1. Create an empty __priority queue__.
2. __Enqueue__ the __source vertex__ into the queue with a __priority__ of 0.
3. While the priority queue is __not empty__
  1. __Dequeue__ the top vertex from the queue. We are call that vertex the __current vertex__, and we also get that node's __priority__, we'll call that __current priority__.
  2. Test the __current vertex__ to see if it's already been __explored__, if it has `continue` without performing steps 3-5.
  3. Test the __current vertex__ to see if it's the __goal vertex__ (and return if it is).
  4. __Enqueue__ all of the neighboring vertices from __current vertex__ with a priority of __current priority__ plus __the weight of the edge to the neighbor__.
  5. Add the __current vertex__ to the __explored__ set.

### Sample Code

```js
// Now we need a class for Edges, to keep track of weight
function Edge(node, weight) {
  this.node = node;
  this.weight = weight;
}

function Node(value, neighbors) {
  this.neighbors = neighbors; // this is an array of Edges now, not Nodes.
  this.value = value;
}

function dijkstraSearch(sourceNode, destinationNode) {
  let frontier = new PriorityQueue(); // We're assuming such a class exists.
  let explored = new Set();

  let queueObj = {
    node: sourceNode,
    cost: 0,
    path = []
  };

  frontier.enqueue(queueObj, queueObj.cost);

  // Search until we're out of nodes
  while(frontier.size() > 0) {
    let currentQueueObj = frontier.dequeue();
    let curNode = currentQueueObj.node;
    let curPath = currentQueueObj.path;
    let curCost = currentQueueObj.cost;

    // Found a solution, return the path.
    if(curNode === destinationNode) {
      return curPath;
    }
    else if(explored.has(curNode)) {
      continue;
    }

    for(let i = 0; i < curNode.neighbors.length i++) {
      let newEdge = curNode.neighbors[i];
      let newPath = curPath.slice();
      newPath.push(curNode);

      // We use this format so we can track the path
      let newQueueObj = {
        node: newEdge.node,
        path: newPath
        cost: newEdge.cost + curCost;
      }

      // If the new node isn't a solution, add it to the queue and search more.
      frontier.enqueue(newQueueObj, newQueueObj.cost);
    }

    explored.add(curNode);
  }

  // No solution.
  return null;
}
```

## A* (A-Star) Search

__A*__ is an extension of Dijkstra's algorithm, typically used in situations where exploring large portions of the graph is unreasonable to do; for example, in extremely large graphs. It's also used when we can make an educated guess about which direction to search for our destination node. Consider this animation of Dijkstra's Algorithm / BFS (because this is an unweighted graph, they behave identically):

![BFS/Dijkstras](https://upload.wikimedia.org/wikipedia/commons/2/23/Dijkstras_progress_animation.gif)

> The green dot is our goal, notice how BFS just expands it's boundary slowly until it eventually reaches the goal. Look at how many locations were explored that clearly do not get us closer to the goal...

On large graphs, all of this wasted time exploring *bad* nodes can lead to a very slow search. __A*__ addresses this issue by applying a __heuristic__. A __heuristic__ is a guess, or an estimate, of how far any given node is from the destination node. We use this heuristic to change the __cost__ value for our __priority queue__.

In the example above we are on a grid, lets assume we know the __location on the grid__ of our destination, but know nothing about the walls. We can use this information to compute a commonly used heuristic called the __Manhattan Distance__. The __Manhattan Distance__ between any two points on a grid is the sum of the number of rows and columns two nodes are off by. For example, if we have two grid locations `(1, 3)` and `(5, 10)` the __Manhattan Distance__ between these nodes is `4 + 7 = 11` because we need to go four rows to get from `1` to `5`, and 7 columns to get from `3` to `10`. If Bob was at location `(1, 3)` and Tammy was at location `(5, 10)` on Manhattan Island, Bob might say, "I am 11 blocks away."

This animation is an example of A* search, using __Manhattan Distance__ as a heuristic:

![A*](https://upload.wikimedia.org/wikipedia/commons/5/5d/Astar_progress_animation.gif)

> Once again the green dot is the goal. Notice how much more whitespace there is when A* finishes, compared to Dijkstra's!

The change from Dijkstra's is minimal -- instead of `cost` as the priority in the priority queue, we use `cost + heuristic`. Here is the complete process for A*:

1. Create an empty __priority queue__.
2. __Enqueue__ the __source vertex__ into the queue with a __priority__ of 0.
3. While the priority queue is __not empty__
  1. __Dequeue__ the top vertex from the queue. We are call that vertex the __current vertex__, and we also get that node's __priority__, we'll call that __current priority__.
  2. Test the __current vertex__ to see if it's already been __explored__, if it has `continue` without performing steps 3-5.
  3. Test the __current vertex__ to see if it's the __goal vertex__ (and return if it is).
  4. Loop over all of the neighboring vertices from __current vertex__:
    1. Compute the __heuristic value__ for the neighbor
    2. __Enqueue__ the neighbor with a priority of __current priority__ plus __the heuristic__ plus __the weight of the edge to the neighbor__.
  5. Add the __current vertex__ to the __explored__ set.

## Sample Code

```js
// Now we need a class for Edges, to keep track of weight
function Edge(node, weight) {
  this.node = node;
  this.weight = weight;
}

function Node(value, neighbors) {
  this.neighbors = neighbors; // this is an array of Edges now, not Nodes.
  this.value = value;
}

function dijkstraSearch(sourceNode, destinationNode) {
  let frontier = new PriorityQueue(); // We're assuming such a class exists.
  let explored = new Set();

  let queueObj = {
    node: sourceNode,
    cost: 0,
    path = []
  };

  frontier.enqueue(queueObj, queueObj.cost);

  // Search until we're out of nodes
  while(frontier.size() > 0) {
    let currentQueueObj = frontier.dequeue();
    let curNode = currentQueueObj.node;
    let curPath = currentQueueObj.path;
    let curCost = currentQueueObj.cost;

    // Found a solution, return the path.
    if(curNode === destinationNode) {
      return curPath;
    }
    else if(explored.has(curNode)) {
      continue;
    }

    for(let i = 0; i < curNode.neighbors.length i++) {
      let newEdge = curNode.neighbors[i];
      let newPath = curPath.slice();
      newPath.push(curNode);

      // compute heuristic could return the Manhattan Distance or some other heuristic value!
      let heuristicValue = computeHeuristic(newEdge.node);

      // We use this format so we can track the path
      let newQueueObj = {
        node: newEdge.node,
        path: newPath
        cost: newEdge.cost + curCost; // NOTE: No heuristic here -- thats correct
      }

      // We only use the heuristic as the value for the priority queue, not the 'cost'.
      frontier.enqueue(newQueueObj, newQueueObj.cost + heuristic);
    }

    explored.add(curNode);
  }

  // No solution.
  return null;
}
```

## Heuristic Admissibility and Suboptimal Search

For `A*` to always return the shortest path between two nodes, the heuristic we use must be __admissible__. This means that the heuristic must be an __exact or under estimate__ of the actual cost of the path from our node to the goal. For grids, the Manhattan Distance always satisfies this condition. Imagine an empty grid with no walls, the shortest path between any two points in this graph __is__ the manhattan distance. Now, if you were to add walls to our grid, you couldn't make the path __shorter__ by adding walls. Now we know that the real path on a grid with walls will cost __at least__ the Manhattan Distance - and most likely it will cost more. 

Sometimes, `A*` is intentionally used with an __inadmissible heuristic__. We do this when we don't need an absolutely perfect solution. Sometimes we can get powerful speed-ups and only be off by a small total cost of the path found. Consider this version of A* which uses an inadmissible heuristic:

![Suboptimal](https://upload.wikimedia.org/wikipedia/commons/8/85/Weighted_A_star_with_eps_5.gif)

> There is significantly more whitespace at the end of this search -- but the path we find is not the absolutely shortest one. Often in the real world "good enough" is better than "perfect" if it takes half as long...

## Resources
[Algorithm Visualizations](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
