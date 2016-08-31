angular.module('SimpleDirectiveApp', [])
  .controller('MainController', function($scope) {
    $scope.customers = [
    {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    },
    {
    	name: 'Tyler',
    	address: '1875 Texas Street'
    },
    {
    	name: 'Cookie Monster',
    	address: '1234 Cookie Street'
    }
    ]
  });

