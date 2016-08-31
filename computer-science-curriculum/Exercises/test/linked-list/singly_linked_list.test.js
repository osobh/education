'use strict'
var SinglyLinkedList = require("../../src/linked-list/singly_linked_list");
var expect = require("chai").expect

describe("Singly Linked List", function() {
  var list;

  beforeEach(function() {
    list = new SinglyLinkedList();
  });

  describe("push", function() {
    it("Updates the length with each call", function() {
      list.push(2);
      expect(list.length).to.equal(1);

      list.push(4);
      expect(list.length).to.equal(2);

      list.push(10);
      expect(list.length).to.equal(3);
    });

    it("Properly updates the head pointer", function() {
      list.push(2);
      expect(list.head.val).to.equal(2);
      expect(list.head.next).to.not.exist;

      list.push(4);
      expect(list.head.val).to.equal(2);
      expect(list.head.next.val).to.equal(4);

      list.push(10);
      expect(list.head.val).to.equal(2);
      expect(list.head.next.val).to.equal(4);
    });

    it("Always points the tail to the most recently pushed item", function() {
      list.push(2);
      expect(list.tail.val).to.equal(2);
      expect(list.tail.next).to.not.exist;

      list.push(4);
      expect(list.tail.val).to.equal(4);
      expect(list.tail.next).to.not.exist;

      list.push(10);
      expect(list.tail.val).to.equal(10);
      expect(list.tail.next).to.not.exist;
    });

    it("Properly updates head.next on lists of size 1", function() {
      list.push(2);
      expect(list.head.next).to.not.exist;

      list.push(4);
      expect(list.head.next.val).to.equal(4);
    });

    it("returns self so chaining works", function() {
      expect(list.length).to.equal(0);
      list.push(1).push(2);
      expect(list.length).to.equal(2);
    });
  });

  describe("pop", function() {
    it("returns undefined or null when called on an empty list", function() {
      expect(list.pop()).to.not.exist;
    });

    it("Updates the length properly when called", function() {
      list.push(4).push(5).push(6).push(7);

      list.pop();
      expect(list.length).to.equal(3);

      list.pop();
      expect(list.length).to.equal(2);

      list.pop();
      expect(list.length).to.equal(1);

      list.pop();
      expect(list.length).to.equal(0);

      // Popping on an empty list doesn't change the length
      list.pop();
      expect(list.length).to.equal(0);
    });

    it("returns the value at the end of the list", function() {
      list.push(4).push(5).push(6).push(7);
      expect(list.pop()).to.equal(7);
      expect(list.pop()).to.equal(6);
      expect(list.pop()).to.equal(5);
      expect(list.pop()).to.equal(4);
      expect(list.pop()).to.not.exist;
    });

    it("Updates the tail with each call", function(){
      list.push(4).push(5).push(6).push(7);

      list.pop();
      expect(list.tail.val).to.equal(6);

      list.pop();
      expect(list.tail.val).to.equal(5);

      list.pop();
      expect(list.tail.val).to.equal(4);

      list.pop();
      expect(list.tail).to.not.exist;

      // Popping on an empty list doesn't change the tail
      list.pop();
      expect(list.tail).to.not.exist;
    });

    it("Updates the head when the only node in the list is popped", function() {
      list.push(4);
      expect(list.head.val).to.equal(4);

      list.pop();
      expect(list.head).to.not.exist;
    });

    it("Using push and pop, we can store and remove values in order and the length will update properly", function() {
      list.push(2).push(4).push(6);
      expect(list.length).to.equal(3);
      expect(list.head.val).to.equal(2);
      expect(list.tail.val).to.equal(6);

      expect(list.pop()).to.equal(6);
      expect(list.length).to.equal(2);
      expect(list.head.val).to.equal(2);
      expect(list.tail.val).to.equal(4);

      expect(list.pop()).to.equal(4);
      expect(list.length).to.equal(1);
      expect(list.head.val).to.equal(2);
      expect(list.tail.val).to.equal(2);

      list.push(5);
      expect(list.length).to.equal(2);
      expect(list.head.val).to.equal(2);
      expect(list.tail.val).to.equal(5);

      expect(list.pop()).to.equal(5);
      expect(list.length).to.equal(1);
      expect(list.head.val).to.equal(2);
      expect(list.tail.val).to.equal(2);

      expect(list.pop()).to.equal(2);
      expect(list.length).to.equal(0);
      expect(list.head).to.not.exist;
      expect(list.tail).to.not.exist;
    });
  });

  describe("unshift", function() {
    it("Updates length with each call", function() {
      list.unshift(2);
      expect(list.length).to.equal(1);

      list.unshift(4);
      expect(list.length).to.equal(2);

      list.unshift(6);
      expect(list.length).to.equal(3);
    });

    it("Updates the head properly each time", function() {
      list.unshift(2);
      expect(list.head.val).to.equal(2);
      expect(list.head.next).to.not.exist;

      list.unshift(4);
      expect(list.head.val).to.equal(4);
      expect(list.head.next).to.equal(2);

      list.unshift(6);
      expect(list.head.val).to.equal(6);
      expect(list.head.next).to.equal(4);
    });

    it("Updates the tail on an empty list, but not otherwise", function() {
      list.unshift(2);
      expect(list.tail.val).to.equal(2);
      expect(list.tail.next).to.not.exist;

      list.unshift(4);
      expect(list.tail.val).to.equal(2);
      expect(list.tail.next).to.not.exist;;

      list.unshift(6);
      expect(list.tail.val).to.equal(2);
      expect(list.tail.next).to.not.exist;
    });
  });

  describe("shift", function() {
    it("removes a value from the front of the list", function() {
      list.push(4).push(2);
      expect(list.length).to.equal(2);
      expect(list.shift()).to.equal(4);
      expect(list.length).to.equal(1);
      expect(list.shift()).to.equal(2);
      expect(list.length).to.equal(0);
    });
  });

  describe("get", function() {
    it("get a value from the list given an index", function() {
      list.push(0).push(1).push(2).push(3).push(4);
      expect(list.length).to.equal(5);
      expect(list.get(2)).to.equal(2);
      expect(list.get(0)).to.equal(0);
      expect(list.get(5)).to.not.exist;
      expect(list.get(4)).to.equal(4);
      expect(list.get(3)).to.equal(3);
    });
  });

  describe("set", function() {
    it("set a value in the list given an index", function() {
      list.push(0).push(1).push(2).push(3).push(4);
      expect(list.length).to.equal(5);
      list.set(4,99);
      expect(list.pop()).to.equal(99);
      expect(list.length).to.equal(4);
      list.set(0, -99);
      expect(list.shift()).to.equal(-99);
      expect(list.length).to.equal(3);
    });
  });

  describe("remove", function() {
    it("removes the first element in a list of size 1", function() {
      list.push(1);
      expect(list.length).to.equal(1);
      expect(list.remove(0)).to.equal(1);
      expect(list.length).to.equal(0);
    });

    it("removes the last element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).to.equal(5);
      expect(list.remove(4)).to.equal(5);
      expect(list.length).to.equal(4);
    });

    it("removes the second element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).to.equal(5);
      expect(list.remove(1)).to.equal(2);
      expect(list.length).to.equal(4);
    });

    it("removes the second to last element in a list of size 5", function() {
      list.push(1).push(2).push(3).push(4).push(5);
      expect(list.length).to.equal(5);
      expect(list.remove(3)).to.equal(4);
      expect(list.length).to.equal(4);
      expect(list.get(0)).to.equal(1);
      expect(list.get(1)).to.equal(2);
      expect(list.get(2)).to.equal(3);
      expect(list.get(3)).to.equal(5);
      expect(list.get(4)).to.not.exist;
    });
  });

  // Bonus Tests -- write tests for these and remove the x to enable these tests
  xdescribe("reverse", function(){
    it("It should...", function(){

    });
  });


  xdescribe("reverseRecursive", function(){
    it("It should...", function(){

    });
  });
});
