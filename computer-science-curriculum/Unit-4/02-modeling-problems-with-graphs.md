# Modeling The Real World With Graphs

Like anything in programming, Graph Theory is not particularly useful unless we can use it to solve real problems. This article will present several examples of real world problems which can be modeled using Graph Theory.

## Objectives

* Describe real world situations in the language of Graph Theory.

## A Helpful Process

Graphs are used so commonly because it's easy to model the relationships of things in the real world using graphs. In order to model a problem in the real world as a Graph Theory problem, we need to do 3 things:

1. Decide what a __node__ represents.
2. Decide what an __edge__ represents.
  * Should our edges be directed or undirected?
3. Describe the problem we want to solve in terms of __nodes__ and __edges__.

Lets consider a very real example.

## A Social Network

Social networks are a way of thinking about the connections between people. Lets say we want to use Graph Theory to make recommendations to people about who they should meet.

The first step is deciding what a __node__ represents. In our case each node represents a person. Now that we know what a __node__ represents, we have to decide what it means for two nodes to be connected. For now, lets say that an __edge__ represents friendship between two people. We chose an undirected graph, because a friendship is a mutual relationship (in most cases 😃). We also decided to use unweighted edges, this implies that friendship is boolean: either people are friends or not.

This is a graph representing a group of people, and friendship between them:

![](https://s3.amazonaws.com/ka-cs-algorithms/social_network.png)

> Emily has 5 friends, Frank just has 2...  

> Bonus question: If you were to weight the edges in this graph, what could the weight represent?

### Suggesting Friends

After deciding what __nodes__ and __edges__ represent, we need to decide how to describe our __problem__ in terms of these nodes and edges. First lets form a hypothesis about __people__ then translate that to nodes and edges.

A hypothesis: people are more likely to be friends with people their current friends already know. Think about how to say this in terms of __nodes__ and __edges__. What about the edges between nodes tells us if Audrey's friend already knows someone else in our graph?

One way to express this in graph theory terms would be: nodes with shortest paths between them of length 2 represent the "friend of a friend" relationship. If there was a shortest path 1, then the two nodes would already be friends. A shortest path length 3 is a "friend of a friend of a friend".  Look at how Audrey and Frank are connected:

![](https://s3.amazonaws.com/ka-cs-algorithms/social_network_shortestpath.png)

Frank and Audrey are separated by 3 degrees. Audrey knows Bill; Bill knows Emily; and Emily knows Frank. Maybe Audrey and Emily should be friends, and it's more of a stretch... but maybe Audrey and Frank should be friends as well!

Now we've found the beginnings of an __algorithm__. We could suggest as friends anyone who has a shortest path of length 2 or 3 to the __node__ in question.

Using this rule, when we ask the question "Should Audrey and Frank be friends," in terms of graph theory, we're asking, "Whats the length of the shortest path between Audrey and Frank? Is it less than 2 or 3?".

We might also decide that friendship suggestion requires __more than one__ path between any two people. For example, Emily shares two second degree connections with Gayle -- Emily is friends with Cathy and Bill both of whom are friends with Gayle. Perhaps this is the start of a better __algorithm__...

> Bonus question: We asked about weights on this graph before... What if the edge weight represented __closeness__ of the relationship between two people. How would that impact the two algorithms we suggested?

### Apply Known Algorithms

Once a system is modeled as a graph, a lot of problems can be solved by applying standard algorithms in graph theory. For example, when suggesting friends we realized that the "shortest path" between two nodes was valuable information. Lucky for us there are _many_ known algorithms for computing the shortest path between two nodes, including one you already know: Breadth First Search.

Perhaps our friendship recommendation engine should suggest friends for any two nodes which have a shortest path between them of length 2 (Suggest Emily as a friend for Audrey). Perhaps we should suggest friends if the shortest path is length 3 (Suggest Frank as a friend for Audrey).

Regardless of where we draw the line (2 or 3 degrees to Audrey), clearly the length of the shortest path says something about the strength of the connection between two people. This is fantastic because we can use known algorithms to solve our problem.

In this way programmers have to be creative about modeling the problem, then get to stand on the shoulders of giants to actually *solve* the problem. For example, look at this detailed wikipedia article about all the different ways to tackle the __shortest path__ problem.

[Wikipedia: Shortest Path Problem](https://en.wikipedia.org/wiki/Shortest_path_problem)

Lets look at two more examples of a real world problem, modeled in Graph Theory.

## Interlinked Web Pages

The Internet is a straight-forward option for the application of graph theory.

<img src="http://i.imgur.com/vBOLar6.png" style="height:175px"/>

* A web page with a unique address (URL) is a __node__ in the graph.
* A __directed edge__ represents one web page linking to another.
* This graph is directed, because the relationship between web pages is not mutual.
* If page A links to page B, then it is not always true that page B will have a link to page A.

#### Interlinked Web Pages: Graph Theory

* Web crawlers: follow all links on a page, and store this information.
* Search engines then use this data to provide quick and accurate results against queries.
  * Information like "How many inbound edges does this node have" and "What is the shortest path between two web-pages" provides powerful evidence of relevance and authority for a web-page.
* In graph theory, web crawling would be an example of **graph traversal**, the act of visiting all nodes in a graph
* Like __shortest path__, the problem of __graph traversal__ is well known, and there are good algorithms to solve this problem which you do not have invent from scratch.

## City Network

Maps of real physical locations is another common use of Graph Theory, consider this "map" of cities connected by railroads.

![](https://s3.amazonaws.com/ka-cs-algorithms/undirected_road_map.png)

* Nodes in this graph represent cities.
* Edges represent railroads between cities.
* In this case, the weight is the distance (in miles) between cities along the railroad.
* This graph is undirected, because railroads can be used in either direction.

### Shortest Path Again

In this case, our shortest path is fairly literal. What is the fewest number of miles I can travel by rail from NYC to Reading?

There are several paths we can take, lets examine two which have the same number of cities:
 * New York -> New Haven -> Providence -> Canton -> Weston -> Reading : 255
 * New York -> New Haven -> Hartford -> Sturbridge -> Weston -> Reading : 233

If we were to simply count the number of edges, these two paths  appear to be the same, but if we account for weights (distance), the second path is shorter. If we want __the fewest number of stopovers__ we could ignore the edge weight, but if we're interested in __the fewest number of miles traveled__ we would have to consider the edge weight.

#### Graphs are used to solve a huge swath of problems

We dug into three examples of applied graph theory, but there are so many more:

* Accessible Data Storage (Binary Tree)
* Trees (DOM, XML, etc.)
* Flow Control
* Abstract Syntax Trees (Lexing, JS, etc.)
* Neural Network
etc.

## Practice!

It's possible to use a graph to represent a __game of chess__. Can you think of how you would do that? Answer these questions:

* What does a Node represent?
* What does an Edge represent?
  * Should the edges be weighted?
  * Should edges be directed?
* Is the graph cyclic or acyclic?
* Is the graph connected or disconnected?
