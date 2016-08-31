var name = "03-SyntaxError"
var chai = require("chai");
var expect = chai.expect;

describe(name, function () {
  it("Fix the SyntaxError 00", function () {
    expect(()=>require("../" + name + "/00")).to.not.throw(SyntaxError)
  });
  it("Fix the SyntaxError 01", function () {
    expect(()=>require("../" + name + "/01")).to.not.throw(SyntaxError)
  });
  it("Fix the SyntaxError 02", function () {
    expect(()=>require("../" + name + "/02")).to.not.throw(SyntaxError)
  });
});
