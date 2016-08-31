'use strict'

var Node = require('./node');

class Bst {
  constructor() {
    this.root = null;
  }

  insert(data){
    if(!this.root){
      this.root = new Node(data);
    }
    else {
      var current = this.root;

      while(true) {
        if(data < current.show()) {
          if(current.left) {
            current = current.left;
          }
          else {
            current.left = new Node(data)
            break;
          }
        }
        else {
          if(current.right) {
            current = current.right;
          }
          else {
            current.right = new Node(data);
            break;
          }
        }
      }
    }
  }
}

module.exports = Bst;
