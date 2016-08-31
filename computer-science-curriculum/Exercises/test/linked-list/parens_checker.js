var parensChecker = require('../../src/linked-list/parens_checker');
var expect = require('chai').expect;

describe('ParensChecker', function() {
	it('should return true for valid nested parens', function() {
		expect(parensChecker("[]")).to.equal(true);
		expect(parensChecker("()")).to.equal(true);
		expect(parensChecker("{}")).to.equal(true);
		expect(parensChecker("([([[{(){}[()]}]])])")).to.equal(true);
		expect(parensChecker("[][][]{}(){[]}({})")).to.equal(true);
	});

	it('should return false for invalid nested parens', function() {
		expect(parensChecker('][')).to.equal(false);
		expect(parensChecker('((')).to.equal(false);
		expect(parensChecker(')(')).to.equal(false);
		expect(parensChecker('}{')).to.equal(false);
		expect(parensChecker('())))(')).to.equal(false);
		expect(parensChecker('[]{}()fail')).to.equal(false);
	});

	it('should gracefully return false for invalid inputs', function() {
		expect(parensChecker()).to.equal(false);
		expect(parensChecker(false)).to.equal(false);
		expect(parensChecker("foo")).to.equal(false);
		expect(parensChecker(12233)).to.equal(false);
		expect(parensChecker("")).to.equal(false);
		expect(parensChecker(true)).to.equal(false);
		expect(parensChecker(undefined)).to.equal(false);
	});
})



