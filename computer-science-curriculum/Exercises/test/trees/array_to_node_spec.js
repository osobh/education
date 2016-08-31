const expect = require('chai').expect
var arrayToNode = require('../../src/trees/array_to_node');

describe('arrayToNode', function() {

  it("returns nodes with a name property containing the first value of the input array", function () {
    var input = [
      'a',
      []
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode).to.have.property('name');
  });

  it("returns nodes with a children property, which is an array", function () {
    var input = [
      'a',
      []
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode).to.have.property('children');
    expect(rootNode.children).to.be.a('array');
  })

  it("turns a two-element array into a node", function () {
    var input = [
      'a',
      []
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).to.deep.equal('a');
    expect(rootNode.children).to.deep.equal([]);
  });

  it("turns nested arrays into child nodes with references to their parents", function () {
    var input = [
      'a',
      [
        [
          'b',
          []
        ],
        [
          'c',
          []
        ]
      ]
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).to.deep.equal('a');
    expect(rootNode.children[0].name).to.deep.equal('b');
    expect(rootNode.children[0].parent).to.deep.equal(rootNode);
    expect(rootNode.children[1].name).to.deep.equal('c');
    expect(rootNode.children[1].parent).to.deep.equal(rootNode);
  });

  it("handles deeply nested nodes", function () {
    var input = [
      'a',
      [
        [
          'b',
          [
            [
              'c',
              [
                [
                  'd',
                  []
                ]
              ]
            ]
          ]
        ]
      ]
    ];
    var rootNode = arrayToNode(input);
    expect(rootNode.name).to.deep.equal('a');
    expect(rootNode.children[0].name).to.deep.equal('b');
    expect(rootNode.children[0].parent).to.deep.equal(rootNode);
    expect(rootNode.children[0].children[0].name).to.deep.equal('c');
    expect(rootNode.children[0].children[0].parent).to.deep.equal(rootNode.children[0]);
    expect(rootNode.children[0].children[0].children[0].name).to.deep.equal('d');
    expect(rootNode.children[0].children[0].children[0].parent).to.deep.equal(rootNode.children[0].children[0]);
  });
});
