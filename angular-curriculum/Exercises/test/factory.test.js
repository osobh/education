describe('factory', function() {

  var mock, notify;
  beforeEach(module('app'));

  beforeEach(function() {
    mock = {alert: sinon.spy()};

    module(function($provide) {
      $provide.value('$window', mock);
    });

    inject(function($injector) {
      notify = $injector.get('notify');
    });
  });

  it('should not alert first two notifications', function() {
    notify('one');
    notify('two');

    expect(mock.alert).to.not.have.been.called;
  });

  it('should alert all after third notification', function() {
    notify('one');
    notify('two');
    notify('three');

    expect(mock.alert).to.have.been.calledWith("one\ntwo\nthree");
  });

  it('should clear messages after alert', function() {
    notify('one');
    notify('two');
    notify('third');
    notify('more');
    notify('two');
    notify('third');

    expect(mock.alert.callCount).to.equal(2);
  });

});
