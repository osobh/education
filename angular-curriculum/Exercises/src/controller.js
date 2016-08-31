(function() {

  'use strict';

  angular.module('app')
    .controller('SimpleController', SimpleController)
    .controller('PasswordController', PasswordController)
    .controller('MyController', MyController);

  function SimpleController() {
    const vm = this
    vm.message = "hello"

    vm.update = function() {
      vm.message = "changed"
    }
  }

  function PasswordController($scope) {
    $scope.password = '';
    $scope.grade = function() {
      var size = $scope.password.length;
      if (size > 8) {
        $scope.strength = 'strong';
      } else if (size > 3) {
        $scope.strength = 'medium';
      } else {
        $scope.strength = 'weak';
      }
    };
  }

  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').then(function(response) {
      authToken = response.headers('A-Token');
      $scope.user = response.data;
    }).catch(function () {
      $scope.error = "Didn't work"
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).then(function(response) {
        $scope.status = '';
      }).catch(function() {
        $scope.status = 'Failed...';
      });
    };
  }

}());
