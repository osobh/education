'use strict'

const expect = require("chai").expect;
const binaryToDecimal = require('../../src/binary-encoding/binary');

describe("binary math", () => {

  it("does not include built-in methods", () => {
    expect(binaryToDecimal.toString()).to.not.match(/parseInt/)
    expect(binaryToDecimal.toString()).to.not.match(/toString/)
  })

  it("works for strings with a length of 1", () => {
    expect(binaryToDecimal('0')).to.equal(0)
    expect(binaryToDecimal('1')).to.equal(1)
  })

  it("works for strings with a length of 2", () => {
    expect(binaryToDecimal('00')).to.equal(0)
    expect(binaryToDecimal('01')).to.equal(1)
    expect(binaryToDecimal('10')).to.equal(2)
    expect(binaryToDecimal('11')).to.equal(3)
  })

  it("works for strings with a length of 3", () => {
    expect(binaryToDecimal('000')).to.equal(0)
    expect(binaryToDecimal('001')).to.equal(1)
    expect(binaryToDecimal('010')).to.equal(2)
    expect(binaryToDecimal('011')).to.equal(3)
    expect(binaryToDecimal('100')).to.equal(4)
    expect(binaryToDecimal('101')).to.equal(5)
    expect(binaryToDecimal('110')).to.equal(6)
    expect(binaryToDecimal('111')).to.equal(7)
  })

  it("works for strings with a length of 4", () => {
    expect(binaryToDecimal('0000')).to.equal(0)
    expect(binaryToDecimal('0001')).to.equal(1)
    expect(binaryToDecimal('0010')).to.equal(2)
    expect(binaryToDecimal('0011')).to.equal(3)
    expect(binaryToDecimal('0100')).to.equal(4)
    expect(binaryToDecimal('0101')).to.equal(5)
    expect(binaryToDecimal('0110')).to.equal(6)
    expect(binaryToDecimal('0111')).to.equal(7)
    expect(binaryToDecimal('1000')).to.equal(8)
    expect(binaryToDecimal('1001')).to.equal(9)
    expect(binaryToDecimal('1010')).to.equal(10)
    expect(binaryToDecimal('1011')).to.equal(11)
  })

})
