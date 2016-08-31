'use strict'

function Node(val, next, prev) {
  this.val = val;

  if (!!next) {
    this.next = next;
  } else {
    this.next = null;
  }
  if (!!prev) {
    this.prev = prev;
  } else {
    this.prev = null;
  }
}


function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoublyLinkedList.prototype.__getNodeAt = function(index) {

let currentNode = this.head;

let counter = 0;

while(counter < index){
	currentNode = currentNode.next;
	counter++;
}
return currentNode;
};


DoublyLinkedList.prototype.push = function(val) {
	let node = new Node(val);
	if(this.length === 0){
		this.head = node;
		this.tail = node;	
	}else{
		this.tail.next=node;
		this.tail=node;
	}
	this.length++;
	return this;
};


DoublyLinkedList.prototype.clear = function() {
	this.head = null;
	this.tail = null;
	this.length = 0;
};

DoublyLinkedList.prototype.pop = function() {
	if(this.length === 0){
		return undefined;
	}
	
	let currentTail = this.tail.val;
	
	if(this.length === 1){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	else{
		let currentNode = this.head;
		let count = 0;

		while(count < this.length -2){		
			currentNode = currentNode.next;
			count++;
		}
		this.tail = currentNode;
		this.tail.next= null;
		this.length --;

	}

	return currentTail;
};

DoublyLinkedList.prototype.unshift = function(val) {
	let node = new Node(val);
	if(this.length === 0){
		this.head = node;
		this.tail = node;
	}else{
		node.next = this.head;
		this.head = node;

	}
	this.length++;

};

DoublyLinkedList.prototype.shift = function() {
   	if(this.length === 0){
		return undefined;
	}
	else if(this.length === 1){
		var currentNodeValue = this.head.val;
		this.head = null;
		this.tail = null;
		this.length = 0;
		return currentNodeValue;

	} else{
		var currentVal = this.head.val;
		this.head = this.head.next;
		this.length--;
		return currentVal;
	}

};

DoublyLinkedList.prototype.get = function(index) {
var node = this.__getNodeAt(index);
if(node){
return node.val;
}else{
	return undefined;
}

};

DoublyLinkedList.prototype.set = function(index, val) {
var prevNode = this.__getNodeAt(index - 1);
var node = this.__getNodeAt(index);
if(node){
	prevNode.next = val;
	node.val = val;
}else{
	return undefined;
}


};

DoublyLinkedList.prototype.insert = function(index, val) {
  if (index < 0 || index > this.length) return;
  if (index === 0) { return this.unshift(val); }
  else if (index === this.length) { return this.push(val); }
  else {
    var node = this.__getNodeAt(index);
    var prevNode = node.prev;
    var newNode = new Node(val, prevNode, node);
    prevNode.next = newNode;
    node.prev = newNode;
    this.length++;
    return this;
  }
};

DoublyLinkedList.prototype.remove = function(index) {
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();

  var node = this.__getNodeAt(index);
  if (node) {
    var prev = node.prev;
    var next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = undefined;
    node.next = undefined;
    this.length--;
    return node.val;
  }
};


module.exports = DoublyLinkedList;
