'use strict'

let expect = require('chai').expect

describe("Part 1", function() {

  describe("#swap", function() {

    let swap = require("../../src/sorting/sort-helpers").swap;

    it("swaps to elements in an array", function() {
      let arr = [6, 7, 4, 3, 1];
      swap(arr, 1, 4);
      expect(arr).to.deep.equal([6, 1, 4, 3, 7]);
    });

  });

  describe("#bubbleSort", function(){

    let bubbleSort = require("../../src/sorting/sortingAlgorithmsPart1").bubbleSort;

    it("sorts an array of positive numbers", function(){
      expect(bubbleSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
    });

    it("sorts an array of negative numbers", function(){
      expect(bubbleSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
    });

    it("sorts an array of positive and negative numbers", function(){
      expect(bubbleSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
    });

    it("works with arrays that are already sorted", function(){
      expect(bubbleSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
    });

  });

  describe("#selectionSort", function(){

    let selectionSort = require("../../src/sorting/sortingAlgorithmsPart1").selectionSort;

    it("sorts an array of positive numbers", function(){
      expect(selectionSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
    });

    it("sorts an array of negative numbers", function(){
      expect(selectionSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
    });

    it("sorts an array of positive and negative numbers", function(){
      expect(selectionSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
    });

    it("works with arrays that are already sorted", function(){
      expect(selectionSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
    });

  });

  describe("#insertionSort", function(){

    let insertionSort = require("../../src/sorting/sortingAlgorithmsPart1").insertionSort;

    it("sorts an array of positive numbers", function(){
      expect(insertionSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
    });

    it("sorts an array of negative numbers", function(){
      expect(insertionSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
    });

    it("sorts an array of positive and negative numbers", function(){
      expect(insertionSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
    });

    it("works with arrays that are already sorted", function(){
      expect(insertionSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
    });

  });

});
