const expect = require('chai').expect
var TollRoad = require('../../src/OOP/toll_road');

describe("TollRoad", ()=>{

  it("has a price", ()=> {
    var tollRoad = new TollRoad(4);
    expect(tollRoad.price).to.deep.equal(4);

    var moneyBags = new TollRoad(100000);
    expect(moneyBags.price).to.deep.equal(100000);
  });

  it("charges cars that pass through the toll", ()=> {
    var tollRoad = new TollRoad(7);
    expect(tollRoad.balance('aaa-bbb')).to.deep.equal(0);

    tollRoad.charge('aaa-bbb', '2014-12-12-08-22');
    expect(tollRoad.balance('aaa-bbb')).to.deep.equal(7);

    tollRoad.charge('aaa-bbb', '2014-12-12-08-22');
    expect(tollRoad.balance('aaa-bbb')).to.deep.equal(14);

    tollRoad.charge('ccc-ddd', '2015-12-12-08-22');
    expect(tollRoad.balance('ccc-ddd')).to.deep.equal(7);
  });

  it("returns the dates that a given car was charged (most recent first)", ()=> {
    var tollRoad = new TollRoad(6);

    tollRoad.charge('aaa-bbb', '2015-01-05-10-34');
    expect(tollRoad.history('aaa-bbb')).to.deep.equal([
      'Charged $6 on 2015-01-05-10-34',
    ]);

    tollRoad.charge('aaa-bbb', '2015-12-12-08-22');
    expect(tollRoad.history('aaa-bbb')).to.deep.equal([
      'Charged $6 on 2015-12-12-08-22',
      'Charged $6 on 2015-01-05-10-34',
    ]);

    tollRoad.charge('ddd-123', '2015-01-05-10-34');
    expect(tollRoad.history('ddd-123')).to.deep.equal([
      'Charged $6 on 2015-01-05-10-34',
    ]);
  });

  it("allows customers to pay", ()=> {
    var tollRoad = new TollRoad(5);

    tollRoad.charge('aaa-bbb', '2015-12-12-08-22');
    tollRoad.charge('aaa-bbb', '2015-12-12-08-22');
    tollRoad.charge('def-123', '2015-12-12-08-22');

    tollRoad.pay('aaa-bbb', 7);
    expect(tollRoad.balance('aaa-bbb')).to.deep.equal(3);

    tollRoad.pay('aaa-bbb', 2);
    expect(tollRoad.balance('aaa-bbb')).to.deep.equal(1);

    expect(tollRoad.balance('def-123')).to.deep.equal(5);
  });

});
