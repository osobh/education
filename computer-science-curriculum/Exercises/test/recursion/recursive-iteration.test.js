'use strict'

const expect = require("chai").expect
const lib = require('../../src/recursion/recursive-iteration')

describe("Looping and recursion", () => {

  function checkForLoops(methodName) {
    return () => {
      const definition = lib[methodName].toString();

      const loopMessage = "You appear to be using loops instead of recursion";
      expect(definition, loopMessage).to.not.match(/for|while|do|\.forEach|\.map|\.join|\.split/)
    }
  }

  describe("max", () => {
    it("returns the maximum value of the array", () => {
      const fn = (val) => val >= 10;

      expect(lib.max([1])).to.deep.equal(1)
      expect(lib.max([1,2,3])).to.deep.equal(3)
      expect(lib.max([20, 10 ,30])).to.deep.equal(30)
      expect(lib.max([5, 10, 15, 2, -1, 4])).to.deep.equal(15)
      expect(lib.max([])).to.deep.equal(undefined)
    })

    it("does not use loops", checkForLoops('max'))
  })

  describe("min", () => {
    it("returns the minimum value of the array", () => {
      const fn = (val) => val >= 10;

      expect(lib.min([1])).to.deep.equal(1)
      expect(lib.min([1,2,3])).to.deep.equal(1)
      expect(lib.min([20, 10 ,30])).to.deep.equal(10)
      expect(lib.min([5, 10, 15, 2, -1, 4])).to.deep.equal(-1)
      expect(lib.min([])).to.deep.equal(undefined)
    })

    it("does not use loops", checkForLoops('min'))
  })

  describe("filter", () => {
    it("returns an array containing only the matching items", () => {
      const fn = (val) => val >= 10;

      expect(lib.filter([1,2,3], fn)).to.deep.equal([])
      expect(lib.filter([10,20,30], fn)).to.deep.equal([10,20,30])
      expect(lib.filter([5, 10, 15], fn)).to.deep.equal([10, 15])
      expect(lib.filter([], fn)).to.deep.equal([])
    })

    it("does not use loops", checkForLoops('filter'))
  })

  describe("reject", () => {
    it("returns an array containing only the non-matching items", () => {
      const fn = (val) => val >= 10;

      expect(lib.reject([1,2,3], fn)).to.deep.equal([1,2,3])
      expect(lib.reject([10,20,30], fn)).to.deep.equal([])
      expect(lib.reject([5, 10, 15], fn)).to.deep.equal([5])
      expect(lib.reject([], fn)).to.deep.equal([])
    })

    it("does not use loops", checkForLoops('reject'))
  })

  describe("every", () => {
    it("returns true if every item in the array matches", () => {
      const fn = (val) => val >= 10;

      expect(lib.every([1,2,3], fn)).to.deep.equal(false)
      expect(lib.every([10,20,30], fn)).to.deep.equal(true)
      expect(lib.every([5, 10, 15], fn)).to.deep.equal(false)
      expect(lib.every([], fn)).to.deep.equal(true)
    })

    it("does not use loops", checkForLoops('every'))
  })

  describe("some", () => {
    it("returns true if at least one item in the array matches", () => {
      const fn = (val) => val >= 10;

      expect(lib.some([1,2,3], fn)).to.deep.equal(false)
      expect(lib.some([10,20,30], fn)).to.deep.equal(true)
      expect(lib.some([5, 10, 15], fn)).to.deep.equal(true)
      expect(lib.some([], fn)).to.deep.equal(false)
    })

    it("does not use loops", checkForLoops('some'))
  })

  describe("none", () => {
    it("returns true if 0 items in the array match", () => {
      const fn = (val) => val >= 10;

      expect(lib.none([1,2,3], fn)).to.deep.equal(true)
      expect(lib.none([10,20,30], fn)).to.deep.equal(false)
      expect(lib.none([5, 10, 15], fn)).to.deep.equal(false)
      expect(lib.none([], fn)).to.deep.equal(true)
    })

    it("does not use loops", checkForLoops('none'))
  })

  describe("map", () => {
    it("returns an array containing elements transformed by the function", () => {
      const fn = (x) => x + 1;

      expect(lib.map([1], fn)).to.deep.equal([2])
      expect(lib.map([1,2,3], fn)).to.deep.equal([2,3,4])
      expect(lib.map([20, 10 ,30], fn)).to.deep.equal([21,11,31])
      expect(lib.map([5, 10, 15, 2, -1, 4], fn)).to.deep.equal([6,11,16,3,0,5])
      expect(lib.map([], fn)).to.deep.equal([])
    })

    it("does not use loops", checkForLoops('map'))
  })

  describe("join", () => {
    it("returns a string with the elements of the array joined by the delimiter", () => {
      expect(lib.join([], ",")).to.eq("")
      expect(lib.join(["a"], ",")).to.eq("a")
      expect(lib.join(["a", "b"], ",")).to.eq("a,b")
      expect(lib.join(["a", "b", "c"], "|")).to.eq("a|b|c")
      expect(lib.join([1,2,3], "|")).to.eq("1|2|3")
    })

    it("does not use loops", checkForLoops('join'))
  })

  describe("split", () => {
    it("returns an array of strings split on the delimiter", () => {
      expect(lib.split("", '.')).to.deep.equal([])
      expect(lib.split("a", '.')).to.deep.equal(['a'])
      expect(lib.split("a.b", '.')).to.deep.equal(['a', 'b'])
    })

    it("does not use loops", checkForLoops('split'))
  })

  describe("reduce", () => {
    it("returns the reduced value", () => {
      const fn = (previous, current) => previous + current;

      expect(lib.reduce([], fn, 5)).to.deep.equal(5)
      expect(lib.reduce([1], fn, 5)).to.deep.equal(6)
      expect(lib.reduce([1,2], fn, 5)).to.deep.equal(8)
      expect(lib.reduce([1,2,4], fn, 5)).to.deep.equal(12)
      expect(lib.reduce([1,2,4,10], fn, 5)).to.deep.equal(22)
    })

    it("does not use loops", checkForLoops('reduce'))
  })

  describe("indexOf", () => {
    it("returns the index of the given value", () => {
      expect(lib.indexOf([1,2,3], 1)).to.equal(0)
      expect(lib.indexOf([1,2,3], 2)).to.equal(1)
      expect(lib.indexOf([1,2,3], 3)).to.equal(2)
      expect(lib.indexOf([1,2,3], 4)).to.equal(-1)
    })

    it("does not use loops", checkForLoops('indexOf'))
  })

  describe("leftPad", () => {
    it("returns a string padded by the given delimiter, the given number of times", () => {
      expect(lib.leftPad('',      5, '-')).to.eq("-----")
      expect(lib.leftPad('a',     4, '|')).to.eq("|||a")
      expect(lib.leftPad('ab',    4, '|')).to.eq("||ab")
      expect(lib.leftPad('abc',   4, '|')).to.eq("|abc")
      expect(lib.leftPad('abcd',  4, '|')).to.eq("abcd")
      expect(lib.leftPad('abcde', 4, '|')).to.eq("abcde")
    })

    it("does not use loops", checkForLoops('leftPad'))
  })

  describe("flatten", () => {
    it("returns a single-dimensional array of all of the values", () => {
      expect(lib.flatten([])).to.deep.equal([])
      expect(lib.flatten([1])).to.deep.equal([1])
      expect(lib.flatten([[1]])).to.deep.equal([1])
      expect(lib.flatten([[[1]]])).to.deep.equal([1])
      expect(lib.flatten([[[[1]]]])).to.deep.equal([1])
      expect(lib.flatten([1, [2], [3,4], [ 5, [6, [7]]]])).to.deep.equal([1, 2, 3, 4, 5, 6, 7])
    })

    it("does not use loops", checkForLoops('flatten'))
  })
})
