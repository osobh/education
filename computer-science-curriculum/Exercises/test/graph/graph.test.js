'use strict';

let expect = require('chai').expect;
let Graph = require('../../src/graph/graph');
let cityGraph;

describe('Graph', function() {
  beforeEach(function() {
    cityGraph = new Graph();

    cityGraph.addNode("Denver");
    cityGraph.addNode("Chicago");
    cityGraph.addEdge("Denver", "Chicago", 1004);

    cityGraph.addNode("Seattle");
    cityGraph.addEdge("Denver", "Seattle", 1316);

    cityGraph.addNode("San Francisco");
    cityGraph.addEdge("San Francisco", "Seattle", 807);
    cityGraph.addEdge("San Francisco", "Denver", 1254);

    cityGraph.addNode("Chicago");
    cityGraph.addNode("Atlanta");
    cityGraph.addEdge("Chicago", "Atlanta", 716);

    cityGraph.addNode("Nashville");
    cityGraph.addEdge("Nashville", "Atlanta", 248);
    cityGraph.addEdge("Nashville", "Denver", 1158);
    cityGraph.addEdge("Nashville", "Chicago", 470);

    cityGraph.addNode("Austin");
    cityGraph.addEdge("Nashville", "Austin", 859);
    cityGraph.addEdge("Austin", "Denver", 918);
  });

  it('should print', function () {
    cityGraph.print();
  });

  it('should calculate the size', function() {
    expect(cityGraph.size()).to.equal(7);
  });

  it('should calculate the number of edges', function() {
    expect(q).to.equal(10);
  });

  it('should calculate the total weight', function () {
    expect(cityGraph.weight()).to.equal(8750);
  });

  it('should find node neighbors', function () {
    let neighbors = cityGraph.findNeighbors("Chicago");

    expect(neighbors.length).to.equal(3);
    expect(neighbors).to.contain("Denver");
    expect(neighbors).to.contain("Atlanta");
    expect(neighbors).to.contain("Nashville");
  });

  it('should find the shortest path', function () {
    let path = cityGraph.findPath("Seattle", "Nashville");
    expect(path.length).to.equal(2);
    // Seattle -> Denver -> Nashville
    expect(path[0].first.value).to.equal("Denver");
    expect(path[0].second.value).to.equal("Seattle");
    expect(path[1].first.value).to.equal("Nashville");
    expect(path[1].second.value).to.equal("Denver");
    expect(Graph.pathWeight(path)).to.equal(2474);
  });

 it('should find orphans', function () {
    let graph = new Graph();
    // A <-> B   C
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addEdge("A", "B", 10);

    let orphans = graph.findOrphans();
    expect(orphans.length).to.equal(1);
    expect(orphans.indexOf("C")).to.equal(0);
  });
});
