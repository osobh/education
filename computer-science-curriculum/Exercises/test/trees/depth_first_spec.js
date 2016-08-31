const expect = require('chai').expect
var depthFirst = require('../../src/trees/depth_first');
var Node = require('../../src/trees/node');

describe('depthFirst', function() {

  it("calls the given function for each node in the tree", function () {
    var root = new Node('root');
    var child1 = new Node('child1');
    var child2 = new Node('child2');
    var grandchild = new Node('grandchild');
    child1.addChild(grandchild);
    root.addChild(child1);
    root.addChild(child2);

    var result = [];
    depthFirst(root, function (node, level) {
      result.push([node.name, level]);
    });

    //console.log(result)

    expect(result).to.deep.equal([
      ['root', 0],
      ['child1', 1],
      ['grandchild', 2],
      ['child2', 1]
    ]);
  });

});
