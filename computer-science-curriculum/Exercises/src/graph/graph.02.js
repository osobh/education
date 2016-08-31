function Queue() {
}

Queue.prototype.enqueue = function(item) {
  Array.prototype.unshift.apply(this, arguments);
}

Queue.prototype.dequeue = function() {
  return Array.prototype.pop.apply(this);
}

function Graph(data) {
  this.data = data
  this.vertices = {}
}

Graph.prototype.createGraph = function(){
}

Graph.prototype.addVertexWithEdges = function(edges) {
}

Graph.prototype.deleteVertex = function(vertexToDelete) {
}

Graph.prototype.initializeDistances = function(inputVertices) {
}

Graph.prototype.getDistances = function(source) {
}

Graph.prototype.shortestPath = function(start,end) {
}

module.exports = Graph
