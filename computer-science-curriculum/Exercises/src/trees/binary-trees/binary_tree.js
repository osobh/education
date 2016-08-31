'use strict'

// http://visualgo.net/bst.html

function BinTree(){

}

function Node(value,left,right){

}

// NOTE - Duplicates are excluded in our tree!

BinTree.prototype.insertIteratively = function(value){

};

BinTree.prototype.insertRecursively = function(value,current){

};

BinTree.prototype.containsIteratively = function(value){

};

BinTree.prototype.containsRecursively = function(value,current){

};


BinTree.prototype.breadthFirstSearch = function() {

};

// DEPTH FIRST SEARCH (Pre / In / Post Order)

// http://datastructuresnotes.blogspot.com/2009/02/binary-tree-traversal-preorder-inorder.html

// HINT - you can evaluate a JS expression conditionally by adding a truthy / falsey statement and // then attaching a && along with the expression

// take a look at this code for an example

// function sayHi(){
//   return "hey!"
// }

// what does true && sayHi() return?
// what about false && sayHi() return?

// visualizing the call stack using the chrome dev tools or just drawing it will help a lot with this!

BinTree.prototype.DFSPreOrder = function() {

};

BinTree.prototype.DFSInOrder = function() {

};

BinTree.prototype.DFSPostOrder = function() {

};

BinTree.prototype.size = function() {

};

BinTree.prototype.findLowest = function() {

};

BinTree.prototype.findHighest = function() {

};

// private helper method for remove
BinTree.prototype._countChildren = function(node){

};


BinTree.prototype.remove = function(value){

};

module.exports = {
  BinTree: BinTree,
  Node: Node
};
