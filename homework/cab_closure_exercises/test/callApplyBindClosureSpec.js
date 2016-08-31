var methods = require("../script");
var expect = require("chai").expect;
var sinon = require("sinon");

describe("#sumNumbers", function(){
  it("returns the sum of all numbers passed to the function", function(){
    expect(methods.sumNumbers(8,6,2)).to.equal(16);
  });
});

describe("#maxValue", function(){
  it("returns the highest value in an array", function(){
    expect(methods.maxValue([8,6,2])).to.equal(8);
  });
});

describe("#minValue", function(){
  it("returns the lowest value in an array", function(){
    expect(methods.minValue([8,6,2])).to.equal(2);
  });
});

describe("#makeArray", function(){
  it("turns an array like object into an array", function(){
    function foo(){
      return methods.makeArray(arguments);
    }
    expect(typeof foo().reduce).to.equal("function");

    expect(Object.prototype.toString.call(foo())).to.equal("[object Array]");
  });
});

describe('#once', function() {
  it('should only run a user-defined function if it hasn\'t been run before', function() {
    var age = 27;
    var growUp = methods.once(function() {
      age += 1;
    });

    growUp();
    growUp();

    expect(age).to.equal(28);
  });
});

describe('#delay', function() {
  var countDown;

  beforeEach(() => countDown = sinon.useFakeTimers());
  afterEach(() => countDown.restore());

  it('should only execute the function after the specified wait time', function() {
    var cb = sinon.spy();
    methods.delay(cb, 100);

    countDown.tick(99);

    expect(cb.notCalled).to.equal(true);

    countDown.tick(1);

    expect(cb.calledOnce).to.equal(true);
  });

  it('should have successfully passed function arguments in', function() {
    var cb = sinon.spy();

    methods.delay(cb, 100, "a", 5,10,[]);
    countDown.tick(100);

    expect(cb.calledWith("a",5,10,[])).to.equal(true);
  });
});

describe("#simpleBind", function(){
  function displayInfo(favColor){
    return `Your name is ${this.firstName} and your favorite color is ${favColor}`;
  }
  var o = {
    firstName: "Elie"
  };

  it("returns a function", function(){
    expect(typeof methods.simpleBind(displayInfo,o)).to.equal("function");
  });

  it("includes the arguments passed when called", function(){
    var data = methods.simpleBind(displayInfo, o);
    expect(data("purple")).to.equal("Your name is Elie and your favorite color is purple");
  });
});

describe("#isArray", function(){
  it("returns true if the argument passed in is an Array", function(){
    expect(methods.isArray([1,2,3])).to.equal(true);
    [{},undefined,true,"1",NaN].forEach(v => expect(methods.isArray(v)).to.equal(false));
  });
});

describe("#simpleCurry", function(){
  it("returns the lowest value in an array", function(){
    function add(a,b){
      return a+b;
    }

    var s = methods.simpleCurry(add,3);
    expect(typeof s).to.equal("function");
    expect(s(4)).to.equal(7);
  });
});


