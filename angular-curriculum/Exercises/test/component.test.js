describe('component: heroDetail', function() {
  var component, scope, hero, $componentController;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, _$componentController_) {
    scope = $rootScope.$new();
    $componentController = _$componentController_;
    hero = {name: 'Wolverine'};
  }));

  it('should assign the name bindings to the hero object', function() {
    // Here we are passing actual bindings to the component
    component = $componentController('heroDetail',
      null,
      {hero: hero}
    );
    expect(component.hero.name).to.eq('Wolverine');
  });

});
