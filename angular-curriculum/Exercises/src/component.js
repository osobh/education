(function() {

  'use strict';

  angular.module('app')
    .component('heroDetail', {
      templateUrl: 'templates/heroDetail.html',
      controller: function () {
        this.foo = "bar"
      },
      bindings: {
        hero: '<',
      }
    });
}());
