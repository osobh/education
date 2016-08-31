(function() {

  'use strict';

  angular.module('app')
    .directive('aGreatEye', function () {
      return {
          restrict: 'E',
          templateUrl: 'templates/index.html'
      };
  });

}());
