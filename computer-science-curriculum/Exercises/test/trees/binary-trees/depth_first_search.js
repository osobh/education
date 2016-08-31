var chai = require('chai');
var sinon = require('sinon');

var Bst = require('../../../src/trees/helper_files/tree.js');
var dfs = require('../../../src/trees/binary-trees/depth_first_search.js');

var should = chai.should();

describe('Depth first search', () => {
  var bst;

  before('creating the binary search tree', () => {
    bst = new Bst();

    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(1);
    bst.insert(6);
    bst.insert(11);
    bst.insert(16);
  });

  it('should find the number 10', () => {
    var isMatch = (data) => {return data === 10;};
    isMatch = sinon.spy(isMatch);
    dfs(bst.root, isMatch).data.should.be.equal(10);

    isMatch.calledWith(10).should.be.true;
    isMatch.callCount.should.be.equal(1);
  });

  it('should find the number 6', () => {
    var isMatch = (data) => {return data === 6;};
    isMatch = sinon.spy(isMatch);
    dfs(bst.root, isMatch).data.should.be.equal(6);

    isMatch.callCount.should.be.equal(4);
    isMatch.calledWith(10).should.be.true;
    isMatch.calledWith(5).should.be.true;
    isMatch.calledWith(1).should.be.true;
    isMatch.calledWith(6).should.be.true;
    isMatch.neverCalledWith(15).should.be.true;
    isMatch.neverCalledWith(11).should.be.true;
    isMatch.neverCalledWith(16).should.be.true;
  });

  it('should find the number 16', () => {
    var isMatch = (data) => {return data === 16;};
    isMatch = sinon.spy(isMatch);
    dfs(bst.root, isMatch).data.should.be.equal(16);

    isMatch.callCount.should.be.equal(7);
    isMatch.calledWith(10).should.be.true;
    isMatch.calledWith(5).should.be.true;
    isMatch.calledWith(1).should.be.true;
    isMatch.calledWith(6).should.be.true;
    isMatch.calledWith(15).should.be.true;
    isMatch.calledWith(11).should.be.true;
    isMatch.calledWith(16).should.be.true;
  });

  it('should not find the number 155', () => {
    var isMatch = (data) => {return data === 155;};
    isMatch = sinon.spy(isMatch);
    dfs(bst.root, isMatch).should.be.false;

    isMatch.callCount.should.be.equal(7);
    isMatch.calledWith(10).should.be.true;
    isMatch.calledWith(5).should.be.true;
    isMatch.calledWith(1).should.be.true;
    isMatch.calledWith(6).should.be.true;
    isMatch.calledWith(15).should.be.true;
    isMatch.calledWith(11).should.be.true;
    isMatch.calledWith(16).should.be.true;
  });
})
