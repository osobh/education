(function() {
  
  angular
    .module('piratesApp')
    .component('gsPirateShow', {
      bindings: {
        pirate: '<'
      },
      controller: 'ShowPirateController',
      controllerAs: 'vm',
      templateUrl: '../views/pirates/show.html'
    });

    // .directive('gsPirateShow', function() {
    //   return {
    //     scope: {
    //       pirate: '<'
    //     },
    //     controller: 'ShowPirateController',
    //     controllerAs: 'vm',
    //     templateUrl: '../views/pirates/show.html'
    //   }
    // })

})();