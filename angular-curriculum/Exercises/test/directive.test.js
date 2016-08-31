describe('Unit testing great quotes', function() {
  var $compile, $rootScope;

  beforeEach(module('app'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  // http://angular-tips.com/blog/2014/06/introduction-to-unit-test-directives/
  it('Replaces the element with the appropriate content', function() {
    var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
    $rootScope.$digest();

    expect(element.html()).to.contain("lidless, wreathed in flame, 2 times");
  });
});
