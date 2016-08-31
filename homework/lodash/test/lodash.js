var assert = require('assert');

var _ = require('../lodash');

/**************************************
 *************** ARRAYS ***************
 **************************************/
describe('#first(array)', function() {

  it('should return the first element of a non-empty array', function() {
    assert.equal(_.first(['first', 'second']), 'first');
    assert.equal(_.first(['monday', 'tuesday']), 'monday');
  });

});

describe('#take(array, n)', function() {

  it('should assign a default value of 1 to n', function() {
    assert.deepEqual(_.take(['first', 'second']), ['first']);
    assert.deepEqual(_.take(['saturday', 'sunday']), ['saturday']);
  });

  it('should return n elements from the beginning of an array', function() {
    assert.deepEqual(_.take(['one', 'two'], 1), ['one']);
    assert.deepEqual(_.take(['mon', 'wed', 'fri'], 2), ['mon', 'wed']);
  });

});

describe('#last(array)', function() {

  it('should return the last element of a non-empty array', function() {
    assert.equal(_.last(['first', 'second']), 'second');
    assert.equal(_.last(['monday', 'tuesday']), 'tuesday');
  });

});

describe('#takeRight(array, n)', function() {

  it('should assign a default value of 1 to n', function() {
    assert.deepEqual(_.takeRight(['first', 'second']), ['second']);
    assert.deepEqual(_.takeRight(['saturday', 'sunday']), ['sunday']);
  });

  it('should return n elements from the end of an array', function() {
    assert.deepEqual(_.takeRight(['one', 'two'], 1), ['two']);
    assert.deepEqual(_.takeRight(['mon', 'wed', 'fri'], 2), ['wed', 'fri']);
  });

});

describe('#compact(array)', function() {

  it('should return a new array without 0.', function() {
    assert.deepEqual(_.compact(['one',0,'two']), ['one', 'two'] );
  });

  it('should return a new array without undefined.', function() {
    assert.deepEqual(_.compact(['one',undefined,'two']), ['one', 'two'] );
  });

  it('should return a new array without empty string.', function() {
    assert.deepEqual(_.compact(['one','two','']), ['one', 'two'] );
  });

  it('should return a new array without null.', function() {
    assert.deepEqual(_.compact(['one','two',null]), ['one', 'two'] );
  });

  it('should return a new array without NaN.', function() {
    assert.deepEqual(_.compact([NaN,'one','two']), ['one', 'two'] );
  });

});

describe('#difference(array1, array2)', function() {

  it('should return a new array with elements in the first but not second argument', function() {
    assert.deepEqual(_.difference([1, 2, 3], [4, 2]), [1,3]);
  });

});

describe('#min(array)', function() {

  it('should return the element with the minimum value', function() {
    assert.equal(_.min([1,2,3,4,5]), 1);
    assert.equal(_.min([100,200,300,400]), 100);
  });

});

describe('#max(array)', function() {

  it('should return the element with the maximum value', function() {
    assert.equal(_.max([1,2,3,4,5]), 5);
    assert.equal(_.max([1,7,3,4,5,0]), 7);
  });

});

describe('#indexOf(array, el)', function() {

  it('should return an index of the first element in the array that matches el', function() {
    assert.equal(_.indexOf(["one", "two", "three"], "two"), 1);
    assert.equal(_.indexOf([101, 202, 303], 303), 2);
  });

  it('should return an index of -1 if no elements in the array matches el', function() {
    assert.equal(_.indexOf(["one", "two", "three"], "five"), -1);
    assert.equal(_.indexOf([101, 202, 303], 909), -1);
  });

});

// /*************** BONUS ***************/
xdescribe('#shuffle(array)', function() {

  it('should return a new array with elements shuffled', function() {
    assert.equal(_.shuffle([1, 2, 3]).length, 3);
  });

});

// /**************************************
// ************* COLLECTIONS *************
// **************************************/
describe('#size(collection)', function() {

  it('should return the size of a string', function() {
    assert.equal(_.size('pizza'), 5);
    assert.equal(_.size('cookie'), 6);
  });

  it('should return the size of an array', function() {
    assert.equal(_.size([1, 2, 3, 4]), 4);
    assert.equal(_.size(['mon', 'wed', 'fri']), 3);
  });

  it('should return the size of an object', function() {
    assert.equal(_.size({a: 1, b: 2, c: 100}), 3);
    assert.equal(_.size({a: 'one', b: 'two', c: 'three'}), 3);
  });

});

describe('#forEach(collection, callback)', function() {

  it('should iterate on each character of a string', function() {
    var iterated = '';

    _.forEach('pizza', function(val, i, string) {
      iterated += val;
    });

    assert.deepEqual(iterated, 'pizza');
  });

  it('should iterate on each element of an array', function() {
    var iterated = [];

    _.forEach([1,2,3,4], function(val, i, array) {
      iterated.push(val);
    });

    assert.deepEqual(iterated, [1,2,3,4]);
  });

  it('should iterate on each element of an object', function() {
    var iterated = [];

    _.forEach({a: 1, b: 2, c: 3}, function(val, key, obj) {
      iterated.push(val);
    });

    assert.deepEqual(iterated, [1, 2, 3]);
  });

});

describe('#map(collection, callback)', function() {

  it('should iterate on each character of a string', function() {
    var mapped = _.map('pizza', function(val, i, string) {
      return val;
    });

    assert.deepEqual(mapped, ['p', 'i', 'z', 'z', 'a']);
  });

  it('should iterate on each element of an array', function() {
    var mapped = _.map([1,2,3,4], function(val, i, array) {
      return val * val;
    });

    assert.deepEqual(mapped, [1, 4, 9, 16]);
  });

  it('should iterate on each element of an object', function() {
    var mapped = _.map({a: 1, b: 2, c: 3}, function(val, key, obj) {
      return val * val;
    });

    assert.deepEqual(mapped, [1, 4, 9]);
  });

});

describe('#filter(collection, callback)', function() {

  it('should iterate on each character of a string', function() {
    var filteredArray = _.filter('pizza', function(val, i, array) {
      return val === 'z';
    });

    assert.deepEqual(filteredArray, ['z', 'z']);
  });

  it('should iterate on each element of an array', function() {
    var filteredArray = _.filter([1,2,3,4], function(val, i, array) {
      return (val % 2) === 0;
    });

    assert.deepEqual(filteredArray, [2, 4]);
  });

  it('should iterate on each element of an object', function() {
    var filteredArray = _.filter({a: 1, b: 2, c: 3}, function(val, key, obj) {
      return (val % 2) === 1;
    });

    assert.deepEqual(filteredArray, [1, 3]);
  });

});

describe('#reject(collection, callback)', function() {

  it('should iterate on each character of a string', function() {
    var rejectedCollection = _.reject('pizza', function(val, i, array) {
      return val === 'z';
    });

    assert.deepEqual(rejectedCollection, ['p', 'i', 'a']);
  });

  it('should iterate on each element of an array', function() {
    var rejectedCollection = _.reject([1,2,3,4], function(val, i, array) {
      return (val % 2) === 0;
    });

    assert.deepEqual(rejectedCollection, [1, 3]);
  });


  it('should iterate on each element of an object', function() {
    var rejectedCollection = _.reject({a: 1, b: 2, c: 3}, function(val, key, obj) {
      return (val % 2) === 1;
    });

    assert.deepEqual(rejectedCollection, [2]);
  });

});

// /*************** BONUS ***************/
xdescribe('#sample(collection, n)', function() {

  it('should return n random characters of a string', function() {
    var randomizedCollection = _.sample('pizza', 2);

    assert.deepEqual(randomizedCollection.length, 2);
  });

  it('should return n random elements of an array', function() {
    var randomizedCollection = _.sample([1,2,3,4], 3);

    assert.deepEqual(randomizedCollection.length, 3);
  });


  it('should return n random elements of an object', function() {
    var randomizedCollection = _.sample({a: 1, b: 2, c: 3}, 2);

    assert.deepEqual(randomizedCollection.length, 2);
  });

});
