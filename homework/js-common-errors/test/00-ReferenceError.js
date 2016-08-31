var name = "00-ReferenceError"
var chai = require("chai");
var runner = require("../" + name);
var expect = chai.expect;

describe(name, function () {
  it("Fix the ReferenceError", function () {
    expect(()=>runner(1)).to.not.throw(ReferenceError)
  });
});
