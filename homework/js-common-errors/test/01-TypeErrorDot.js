var name = "01-TypeErrorDot"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("Fix the Dot TypeError", function () {
    expect(()=>runner()).to.not.throw(TypeError)
  });
});
