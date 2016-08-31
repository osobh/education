'use strict'

function Node(val, next=null) {
  this.val = val;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.__getNodeAt = function(index) {

let currentNode = this.head;

let counter = 0;

while(counter < index){
	currentNode = currentNode.next;
	counter++;
}
return currentNode;
};

SinglyLinkedList.prototype.push = function(val) {
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

SinglyLinkedList.prototype.clear = function() {
	this.head = null;
	this.tail = null;
	this.length = 0;
};

SinglyLinkedList.prototype.pop = function() {
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
SinglyLinkedList.prototype.unshift = function(val) {
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

SinglyLinkedList.prototype.shift = function() {
   //check the linked list for any existing nodes
   // if there are no nodes return undefind or traverse to the beginning of the all nodes
   // then go to the one previous to remove it's link and associate itself as the tail of the linkedlist
   // then decerement the count of the nodes by 1
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


SinglyLinkedList.prototype.get = function(index) {
var node = this.__getNodeAt(index);
if(node){
return node.val;
}else{
	return undefined;
}

}

SinglyLinkedList.prototype.set = function(index, val) {
var prevNode = this.__getNodeAt(index - 1);
var node = this.__getNodeAt(index);
if(node){
	prevNode.next = val;
	node.val = val;
}else{
	return undefined;
}


};

SinglyLinkedList.prototype.remove = function(index) {
	if(this.length === 1){
	var currentNodeVal = this.head.val;
	this.clear();
	return currentNodeVal;
	}

	else if(this.__getNodeAt(index) === this.tail){
		return this.pop();
	}
	else if(this.__getNodeAt(index) === this.head){
		return this.shift();
	}
	

	
 	} 


SinglyLinkedList.prototype.reverse = function () {

};

module.exports = SinglyLinkedList;
