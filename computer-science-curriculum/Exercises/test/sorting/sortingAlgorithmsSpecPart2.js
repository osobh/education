'use strict'

let expect = require('chai').expect

describe("Part 2", function() {

  describe("#merge", function() {

    let merge = require("../../src/sorting/sort-helpers").merge;

    it("merges two sorted arrays into a new array", function() {
      expect(merge([1,3,5,7],[2,4,6,8])).to.deep.equal([1,2,3,4,5,6,7,8]);
      expect(merge([1,2,3,4],[5,6,7,8])).to.deep.equal([1,2,3,4,5,6,7,8]);
      expect(merge([2,5,7,8],[1,3,9,10])).to.deep.equal([1,2,3,5,7,8,9,10]);
    });

  });

  describe("#mergeSort", function(){

    let mergeSort = require("../../src/sorting/sortingAlgorithmsPart2").mergeSort;

    it("sorts an array of positive numbers", function(){
      expect(mergeSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
    });

    it("sorts an array of negative numbers", function(){
      expect(mergeSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
    });

    it("sorts an array of positive and negative numbers", function(){
      expect(mergeSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
    });

    it("works with arrays that are already sorted", function(){
      expect(mergeSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
    });

  });

  describe("#partition", function() {

    let partition = require("../../src/sorting/sort-helpers").partition;
    let arr = [];

    beforeEach(function() {
      arr = [6, 5, 3, 1, 8, 7, 2, 4];
    });

    it("sets the first element in the pivot, and returns the index of the pivot after positioning other values around it", function() {
      expect(partition(arr, 0, 7)).to.equal(5);
      expect(arr.indexOf(6)).to.equal(5);
    });

    it("partitions the array into two pieces on either side of the pivot", function() {
      partition(arr,0,7);
      expect(arr.slice(0,5).sort()).to.deep.equal([1,2,3,4,5]);
      expect(arr.slice(6).sort()).to.deep.equal([7,8]);
    });

    it("restricts the partitioning based on left and right parameters", function() {
      expect(partition(arr,1,6)).to.equal(4);
      expect(arr[0]).to.equal(6);
      expect(arr[7]).to.equal(4);
      expect(arr.slice(1,4).sort()).to.deep.equal([1,2,3]);
      expect(arr.slice(5,7).sort()).to.deep.equal([7,8]);
    });

  });

  describe("#quickSort", function(){

    let quickSort = require("../../src/sorting/sortingAlgorithmsPart2").quickSort;

    it("sorts an array of positive numbers", function(){
      expect(quickSort([3.1,4.5,1,2,5])).to.deep.equal([1,2,3.1,4.5,5]);
    });

    it("sorts an array of negative numbers", function(){
      expect(quickSort([-4,-9,-2,-8,-2,0])).to.deep.equal([-9,-8,-4,-2,-2,0]);
    });

    it("sorts an array of positive and negative numbers", function(){
      expect(quickSort([-3,4,1,-9,22])).to.deep.equal([-9,-3,1,4,22]);
    });

    it("works with arrays that are already sorted", function(){
      expect(quickSort([1,2,3,4,5])).to.deep.equal([1,2,3,4,5]);
    });

  });

});
