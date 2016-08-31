'use strict'

var expect = require('chai').expect
var HashTable = require('../../src/hash-tables/hash_table');

describe("Hash Table", function() {
  var table;
  var size;
  var prime;

  beforeEach(function() {
    size = 5;
    prime = 1;
    table = new HashTable(size, prime);
  });

  var strToCharCode = function(str) {
    return str.split("").reduce(function(acc, el) {
      return acc + el.charCodeAt(0);
    }, 0);
  }

  describe("new HashTable", function() {
    it("has the correct properties", function() {
      expect(Array.isArray(table.arr)).to.be.true;
      expect(table.arr.length).to.deep.equal(size);
      expect(table.prime).to.deep.equal(prime);
    });
  });

  describe("__hashFunction", function() {
    it("hashes a number", function() {
      expect(table.__hashFunction(1)).to.deep.equal(1)
      expect(table.__hashFunction(6)).to.deep.equal(1)
      expect(table.__hashFunction(25)).to.deep.equal(0)
    });

    it("hashes non numbers that are of type number", function() {
      var nanHash = strToCharCode("NaN") % size;
      expect(table.__hashFunction(NaN)).to.deep.equal(nanHash);

      var infinityHash = strToCharCode("Infinity") % size;
      expect(table.__hashFunction(Infinity)).to.deep.equal(infinityHash);
    });

    it("hashes a string", function() {
      expect(table.__hashFunction("aB=")).to.deep.equal(strToCharCode("aB=")%size);
      expect(table.__hashFunction("zzzzzzzzz")).to.deep.equal(strToCharCode("zzzzzzzzz")%size);
      expect(table.__hashFunction("")).to.deep.equal(0);
    });

    it("hashes a function", function() {
      var f = function() {var i = 0; console.log(i);};
      var total = strToCharCode(f.toString());
      expect(table.__hashFunction(f)).to.deep.equal(total % size);
    });

    it("hashes an object", function() {
      var hash = strToCharCode("{}") % size;
      expect(table.__hashFunction({})).to.deep.equal(hash);
      expect(table.__hashFunction({a: 5}) !== hash).to.be.true;
    });

    it("hashes an array", function() {
      var hash = strToCharCode("[]") % size;
      expect(table.__hashFunction([])).to.deep.equal(hash);
      expect(table.__hashFunction([1,5,9,55]) !== hash).to.be.true;
    })
  });

  describe("get, set and exists", function() {
    it("sets and gets a simple key", function() {
      var key = 1, value = "value";
      expect(table.set(key, value)).to.be.undefined;
      expect(table.get(key)).to.deep.equal(value);
    });

    it("exists returns true if a key exists in the hash, false otherwise", function() {
      var key = 1;
      expect(table.exists(key)).to.be.false;
      expect(table.set(key, key)).to.be.undefined;
      expect(table.exists(key)).to.be.true;
    });

    it("can handle collisions", function() {
      // 0, 5 and 10 all generate the same hashKey
      var key1 = 0,
          key2 = 5,
          key3 = 10,
          val1 = 'a',
          val2 = 'b',
          val3 = 'c';

      expect(table.exists(key1)).to.be.false;
      expect(table.exists(key2)).to.be.false;
      expect(table.exists(key3)).to.be.false;

      table.set(key1, val1)
      expect(table.get(key1)).to.deep.equal(val1);

      table.set(key2, val2)
      expect(table.get(key1)).to.deep.equal(val1);
      expect(table.get(key2)).to.deep.equal(val2);

      table.set(key3, val3)
      expect(table.get(key1)).to.deep.equal(val1);
      expect(table.get(key2)).to.deep.equal(val2);
      expect(table.get(key3)).to.deep.equal(val3);
    });
  });

  describe("remove", function() {
    xit("should have some tests", function() {
      expect("Rewrite this section to have some real tests").to.equal(0);
    })
  });

});
