var expect = require('chai').expect
// var hexToBin = require('../prompt').hexToBin
// var binToHex = require('../prompt').binToHex
var convertBase = require('../prompt').convertBase

describe('convertBase', function() {
  it('should return a binary number with a hex input', function() {
    expect(convertBase.hex2bin('0')).to.equal('0')
    expect(convertBase.hex2bin('f')).to.equal('1111')
    expect(convertBase.hex2bin('0F')).to.equal('1111')
    expect(convertBase.hex2bin('5')).to.equal('101')
    expect(convertBase.hex2bin('04D2')).to.equal('10011010010')
  });
});

describe('convertBase', function() {
  it('should return a hex number with a binary input', function() {
    expect(convertBase.bin2hex('000101')).to.equal('5');
    expect(convertBase.bin2hex('001111')).to.equal('f');
    expect(convertBase.bin2hex('000')).to.equal('0');
    expect(convertBase.bin2hex('10011010010')).to.equal('4d2');
  });
});
