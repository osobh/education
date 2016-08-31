(function() {
  
  angular 
    .module('piratesApp')
    .controller('PiratesController', PiratesController)
    .controller('NewPirateController', NewPirateController)
    .controller('ShowPirateController', ShowPirateController)
    .controller('EditPirateController', EditPirateController)
    
    function PiratesController(pirates) {
      console.log("hi from the controller...")
      var vm = this;
      vm.pirates = pirates.data;
    }

    function NewPirateController(PirateService, $location) {
      var vm = this;
      vm.pirate = {};

      vm.addPirate = function(newPirate) {
        PirateService.createPirate(newPirate).then(function(res) {
          $location.path('/pirates');
        });
      }
    }

    function ShowPirateController(PirateService, $route) {
      var vm = this;

      vm.removePirate = function(id) {
        PirateService.deletePirate(id).then(function() {
          $route.reload();
        })
      }
    }

    function EditPirateController(PirateService, pirate, $location) {
      var vm = this;
      vm.pirate = pirate.data;
      if (!vm.pirate) $location.path('/pirates');

      vm.editPirate = function(updatedPirate) {
        PirateService.updatePirate(updatedPirate).then(function(res) {
          $location.path('/pirates');
        });
      }
    }

    PiratesController.$inject = ['pirates'];
    NewPirateController.$inject = ['PirateService', '$location'];
    ShowPirateController.$inject = ['PirateService', '$route'];
    EditPirateController.$inject = ['PirateService', 'pirate', '$location'];

})()










