(function() {

  'use strict';

  angular.module('app')
    .service('people', function() {
      let people = []
      this.add = function (person) {
        people.push(person)
      }

      this.list = function () {
        return angular.copy(people)
      }
    })

}());
