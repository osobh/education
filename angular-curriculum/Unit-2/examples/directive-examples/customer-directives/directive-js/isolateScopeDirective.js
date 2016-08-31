angular.module('SimpleDirectiveApp').directive('isolateScopeCustomer', function() {
    return {
  	  scope: {
  	  	customerValues: '=customerValues',
  	  },
      templateUrl: '/templates/isolateScopeTemplate.html',
      link: function(scope, element, attrs) {
      	scope.clickCount = 0;
      	
      	scope.handleClick = function(){
      		scope.clickCount += 1;
      	}
      }
    };
  });