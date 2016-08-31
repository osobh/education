app.controller('IcecreamController', ['$scope', 'icecreamService', function($scope, icecreamService) {
  $scope.view = {};
  $scope.newIcecream = {};
  $scope.view.newFormVisible = false;

  function getAllIcecreams() {
    icecreamService.getIcecreams().then(function(res) {
      $scope.icecreams = res.data;
    });
  }
  getAllIcecreams();

  $scope.toggleNewFormView = function() {
    $scope.view.newFormVisible = !$scope.view.newFormVisible;
  };
  
  $scope.add = function(icecream) {
    icecreamService.createIcecream(icecream).then(function(res) {
      $scope.view.newFormVisible = false;
      $scope.newIcecream = {};
      getAllIcecreams();
    });
  };

  $scope.delete = function(icecreamId) {
    icecreamService.deleteIcecream(icecreamId).then(function(res) {
      getAllIcecreams();
    });
  };

}]);

app.controller('IcecreamEditController', ['$scope', 'icecreamService', function($scope, icecreamService) {
  
  $scope.view = {};
  $scope.view.editing = false;
  
  $scope.toggleEditing = function() {
    $scope.view.editing = !$scope.view.editing;
  };

  $scope.edit = function(icecream) {
    icecreamService.editIcecream(icecream).then(function(res) {
      $scope.view.editing = false;
    });
  };
}]);