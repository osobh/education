var name = "bonus-CustomError/createAndThrow";
var chai = require("chai");
var expect = chai.expect;
var runner = require("../" + name);

xdescribe(name, function () {
  it("Appropriately returns the input parameter for non-strings", function () {
    expect(runner(1)).to.equal(1);
    expect(runner(true)).to.equal(true);
    expect(runner(undefined)).to.equal(undefined);

    var persistentRef = {};
    expect(runner(persistentRef)).to.equal(persistentRef);
  });

  it("Throws an error when a string is passed", function(){
        var boundFn = runner.bind(null, "hello");
        expect(boundFn).to.throw(TypeError);
  });
});
