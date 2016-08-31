/*

  A tree can be represented by a single root node that has child nodes,
  which in turn have child nodes etc...

       A
      /\
    B   C
   /\
  D E

  You can represent trees with objects and arrays in various different ways.
  One way looks like this:

  {
    name: 'a',
    children: [
      {
        name: 'b',
        children: [
          {
            name: 'd',
            children: []
          },
          {
            name: 'e',
            children: []
          },
        ]
      },
      {
        name: 'c',
        children: []
      }
    ]
  }

  Your job is to turn an object with the format above into a tree of nodes.

  Imlement this depth-first, using recursion.

*/

var Node = require('./node');
//Start on the above file- you'll want to use the class from that file!
//It has properties already set up for you, such as 'name' and 'children'.
//It also has a method, addChild(), which is essential.


//Make sure that this function calls new Node()
var objectToNode = function(object) {
  var newNode = new Node(object.name);
  var children = object.children;
  
  children.forEach(function(children){
    newNode.addChild(objectToNode(children));
  })


  // }
   return newNode
};


module.exports = objectToNode;
