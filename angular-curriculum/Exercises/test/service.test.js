describe('services', function() {

  describe('services', function() {
    var people;
    beforeEach(module('app'));

    beforeEach(function() {
      inject(function($injector) {
        people = $injector.get('people');
      });
    });

    it('should add and list people', function() {
      people.add("joe")
      people.add("lane")

      expect(people.list()).to.deep.equal(["joe", "lane"]);
    });
  });

});
