'use strict'

var DoublyLinkedList = require('./doubly_linked_list');

function SortedLinkedList() {
  this._list = new DoublyLinkedList();
}

module.exports = SortedLinkedList;
