/*

  A tree can be represented by a single Node, that has a:

    * name and a value
    * a parent
    * an array of children

  Implement this node using the "classical" inheritance, so that the following
  would work:

    var node = new Node('foo');

*/

var Node = function(name) {
  this.name = name;
  this.children = [];
  this.parent = null;
};

Node.prototype.addChild = function(childNode) {
  childNode.parent = this;
  this.children.push(childNode);
};

module.exports = Node;
