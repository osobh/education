const expect = require('chai').expect
var Node = require('../../src/trees/node');

describe('Node', function() {
  describe('addChild', function() {
    it("sets the child node's to itself", function () {
      var node = new Node('root');
      var child = new Node('child');

      node.addChild(child);

      expect(child.parent).to.deep.equal(node);
    });

    it("adds the child to the parents children array", function () {
      var node = new Node('root');
      var child = new Node('child');

      node.addChild(child);

      expect(node.children).to.contain(child);
    });
  });
});
