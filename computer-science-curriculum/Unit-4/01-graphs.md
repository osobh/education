# Graphs

Graphs are a very common data structure in computer science. Graphs are common because it's very easy to describe a lot of real world problems in the language of Graph Theory. Maps, networks of friends, word problems, the game of chess, computers on the internet... all of these can be readily modeled as graphs. Because graphs are well studied, once a problem can be described in the language of graphs, we can apply powerful and well known algorithms to answer questions about the problem.

## Objectives

* Define and describe the relationships depicted in a Graph
* Use Graph Theory vocabulary, specifically define the following terms:
  * Node/vertex
  * Edge
  * Directed/Undirected
  * Weighted/Unweighted
* Use Graph Theory Notation, specifically use the following to describe a graph:
  * Ordered pairs
  * Set notation

## Linear Data Structures Recap

So far we've talked about ***linear data structures***:

* Array
* Linked List
* Stack
* Queue

In all these structures, data is arranged in a sequential manner. That is, items in these structures are strictly ordered, and exactly one item follows one other item. If we want to examine every item in one of these data structures we can do so in a "straight line", looking at each item in order.

## Non-linear Data Structures Recap

We've also talked about a ***non-linear data structure***:

* Tree

<img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg" style="background: white !important" />

A tree is a hierarchical structure. It's easy to see that trees are __not__ linear. In order to examine every element in a tree, we have to travel down more than one path. Consider the example above -- to explore every node we have to go from 8 to 3 as well as from 8 to 10. If this were a linear data structure, we would never have a choice of paths.

Recall that trees have the following properties:

* A tree with N nodes has exactly (N-1) edges
* One edge for each parent/child relationship
* All nodes in a tree have a parent, **except** the root node
* All nodes must be reachable from the root
* There must be exactly one path from the root to a given node

## Graphs

This brings us to graphs. Very much like linked lists and trees, graphs are a collection of nodes. Nodes might represent any kind of information (people in a social network, computers on the internet, the position of pieces in a game of chess) and edges represent a connection between those two pieces of information (two people who are "friends", two computers connected by a network cable, moving a single chess piece to a new position).

Unlike linked lists and trees, there are no rules for how nodes can be connected. In linked lists, each node is connected to its "next" node (and "previous" node in a doubly linked list). In trees a node can __only__ be connected to it's children and it's parent. Not only that, but in trees there must be a single path from the root node to any other node. In graphs any node can be both:

* connected to any node including itself.
* connected any number of nodes, from 0 to `V` (the number of vertices in the graph)

The lack of restrictions makes graphs a flexible data-structure; it's easy to model many real world systems and problems as graphs. This flexibility also introduces complications when writing algorithms to solve graph problems; the lack of restrictions means there are a lot of possibilities to explore.

Here is an image of a graph:

<img height="175" src="http://i.imgur.com/8lvkfF9.png" style="background: white !important">

> A tree is a _type_ of graph with rules dictating the connection between nodes. A Linked List is a type of graph with __even more__ rules restricting the connections between nodes. This graph breaks all the rules for both lists and trees yet is a perfectly valid graph.

## Graph Vocabulary

In order to talk about graphs, we need to define a few key terms.

### Node/Vertex & Edge

* Just like trees, a graph is a collection of objects or entities we call **nodes**, these are also called **vertices**.
* These nodes are connected together with a set of **edges**.

In general, a __node__ or a __vertex__ represents some piece of data, and an edge represents an association between nodes.

### Directed and Undirected Graphs

Edges in graph can be either **undirected** or **directed**. In an __undirected graph__ every __edge__ can be traversed in both directions. In a __directed graph__ every edge can be traversed in only one direction. However, even in directed graphs it can be possible to travel in both directions; consider these two graphs:

<img src="http://www.cprogramming.com/tutorial/computersciencetheory/graph.jpg" style="background: white !important">

> **Undirected**: Connected vertices represent an unordered pair. No arrow. Direction is implied in both directions.

> **Directed**: Connected vertices represent an ordered pair. There is an arrow pointing from one vertex to another.

#### Small Undirected Graph

In this example all the edges are undirected (There are no arrows pointing in either direction).

This means connected vertices can be represented as an unordered pair. Order does not matter, and there is a relationship in both directions.

<img height="175" src="http://i.imgur.com/8lvkfF9.png" style="background: white !important">

#### Small Directed Graph

In this example all the edges are directed. The arrows are pointing in a specific direction, and that direction is the only direction you can travel. For example, in this image, we can go from node 1 to node 2, but not from node 2 to node 1.

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important">

#### A Note About Direction

In a very pedantic sense, direction applies to __edges__ not to __graphs__. Even though this is not strictly required, typically entire graph is either **undirected** or **directed**.

Because it is uncommon to mix directed and undirected __edges__ in a single graph we will only study graphs in which all edges are either directed or undirected. This leaves us with two kinds of __graphs__:

* A graph with all _directed_ edges is called a directed graph or **digraph**
* A graph with all _undirected_ edges is called an **undirected graph**

## Weighted vs Unweighted

So far, we've only seen graphs where each __edge__ has the same __weight__. In such  __unweighted__ graphs, we are only interested in whether a connection between two nodes __exists or not__. In a weighted graph, we assign values to each edge, which typically represents the cost of traveling between two nodes.

Consider these graphs:

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important"> <img height="175" src="http://i.imgur.com/MTZDefT.png" style="background: white !important">

In the graph on the left, the shortest path from node 1 to node 2 is length one (a single edge must be traveled). You can go directly from node 1 to node 2. You can also travel from 1 to 2 on a path with length 3. To do so travel the edges in this order: 1 -> 3 -> 4 -> 2.

In the graph on the right, the shortest path from node 1 to node 2 is still represented by the direct edge; this time the length of that path is 12, because the edge has a __weight__ of 12. The path from 1 -> 3 -> 4 -> 2 is length (-2 + 14 + 9) = 21. Note that instead of counting the number of edges, we sum the __edge weights__.

This added dimension makes our graphs even more flexible.

## Cyclic vs Acyclic

For directed graphs, we can distinguish between __cyclic__ and __acyclic__ graphs. A graph is said to be cyclic if you can get from any one node, back to that same node. Consider the following graph, is it cyclic or acyclic?

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important">

This graph is acyclic, you cannot travel from any one node, back to itself. You can make this graph cyclic by reversing the direction of the edge from  node 1 to node 2. If that edge goes from node 2 to node 1 instead, then you can travel from `1` -> `3` -> `4` -> `2` -> `1`, creating a __cycle__.

By their nature, undirected graphs all have cycles, because you can simple travel along one edge, then follow it back to the original node. A tree is an example of an acyclic graph when you think of the edges as being directed from parent to child.

__Directed Acyclic Graphs__, sometimes called DAGs, have special properties that can be explioted to make some task more efficient.

## Connected vs Disconnected

The final classification of graphs we're introducing is connected vs disconnected graphs. A __connected__ graph is a graph where you cannot divide the nodes into two sub-graphs which have no paths between them. A __disconnected__ graph is a graph made out of two or more sub-graphs which do not have any paths between the sub-graphs. Here is a disconnected graph:

<img height="175" src="http://i.imgur.com/XiVi0vk.png" style="background: white !important">

> This graph is disconnected, there are two sub-graphs which have no paths between them.

The roads in England and The United States can be modeled with a disconnected graph. There are roads in England and there are roads in the USA, but there is no way to drive your car on a road from England to the USA.

## Practice, Describe These Graphs!

We've done the first one for you.

![](http://www.xatlantis.ch/examples/graphics/graph1_example.png)

Is this graph...

* Directed/__Undirected__
* __Weighted__/Unweighted
* __Cyclic__/Acyclic
* __Connected__/Disconnected

---

<img src="http://upload.wikimedia.org/wikipedia/commons/a/a0/CPT-Graphs-directed-weighted-ex2.svg" style="background: white;" />

Is this graph...

* Directed/Undirected
* Weighted/Unweighted
* Cyclic/Acyclic
* Connected/Disconnected

---

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Directed_acyclic_graph.svg" style="background: white;" />

Is this graph...

* Directed/Undirected
* Weighted/Unweighted
* Cyclic/Acyclic
* Connected/Disconnected

## More Practice

Draw a graph on a whiteboard or paper!

* Make sure it is directed, cyclic, connected, and weighted.
* Add or remove edges to make this graph acyclic.
* Add or remove more edges to make it disconnected.

## Graph Theory Notation

In academic writing, especially from mathematics departments, there are established mathematical notations for discussing graphs. Knowing this notation can help you read information about graphs from more varied sources, including academic papers, wikipedia, and more.

#### Representing a Graph

>A graph `G` is a set `V` of vertices and a set `E` of edges. The edges might be a set of ordered, or unordered pairs depending on if the graph is directed or undirected.

`G = (V, E)`

This means, `G` (our graph), is entirely represented by all __vertices__ `V` and all __edges__ `E`. In this case `(V, E)` is called an "ordered pair".

#### Ordered Pairs

> a pair of mathematical objects, in which the order **matters**.

`(V, E)`

Because order matters, `V` is the first object in the pair, and `E` is the second object in the pair. Ordered pairs are typically written with parenthesis to group the two objects. The following is true about __ordered pairs__:

`(a, b) != (b, a)`

`if a != b`

Meaning, as long as `a` and `b` don't represent the same object, then the ordered pair `(a, b)` is not the same as the ordered pair `(b, a)`. We also use this notation to keep track of edges in a directed graph. If we have two nodes `n1` and `n2`, a directed edge from `n1` to `n2` can be written as `(n1, n2)`.

#### Unordered pairs

> a pair of mathematical objects in which order __does not matter__

Unordered pairs are typically written with curly braces. When referring to a group of unordered mathematical objects which are larger than size 2, we use the term __set__:

An "unordered pair": `{a, b} == {b, a}`  
A set: `{a, b, c, d, e} == {d, b, a, c, e}`

We can use set notation to represent the nodes in a graph, and unordered pairs to represent edges in the graph.

## Practice Using These Terms and Notation

#### Draw This Graph

The following notation represents a graph with 3 nodes and 3 edges. Can you draw a representation of this graph?

`G = (V, E)`  
`V = {a, b, c}`  
`E = {{a, b}, {b, c}, {a, c}}`

#### Write this Graph

Consider this graph:

<img height="175" src="http://i.imgur.com/8lvkfF9.png" style="background: white !important">

* Redraw it on paper or a whiteboard.
* What kind of graph is this?
* Label the vertices in the graph from v1 to v6 in your drawing.
  * In __set notation__, list all the vertices.
* Label each __edge__ using an __unordered pair__ of the nodes that it connects.
>For example `{v1, v2}` is an edge that connects the two vertices `v1` and `v2`. It means we can go from `v1` to `v2` and from `v2` to `v1`

#### Write this Graph As Well

Consider this directed graph, which has similar nodes and edges to our previous graph, but where all the __edges__ are __directed__.

<img height="175" src="http://i.imgur.com/aIgNHkF.png" style="background: white !important">

* Redraw it on paper or a whiteboard.
* What kind of graph is this?
* Label the vertices in the graph from v1 to v6 in your drawing.
  * In __set notation__, list all the vertices.
* Label each __edge__ using an __ordered pair__ of the nodes that it connects.
>For example `(v1, v2)` is an edge that connects the two vertices `v1` and `v2`, specifically it means we can travel from `v1` to `v2`, and tells us nothing about whether or not we can travel from `v2` to `v1`.

# Additional Resources

* Read more about graphs from the [Data Science curriculum]((https://github.com/gSchool/graphs), which is all in Python!
* [My Code School: Introduction to Graphs](https://www.youtube.com/watch?v=gXgEDyodOJU)
* [Khan Academy: Describing Graphs](https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs)
* [Computer Algorithms: Graphs and their Representation](http://www.stoimen.com/blog/2012/08/31/computer-algorithms-graphs-and-their-representation/)
* [Algorithms 4th Edition](http://algs4.cs.princeton.edu/41graph/)
