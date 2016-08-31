(function() {

  'use strict';

  angular.module('app')
    .filter('length', function() {
      return function(text) {
        return ('' + (text || '')).length;
      }
    });

}());
