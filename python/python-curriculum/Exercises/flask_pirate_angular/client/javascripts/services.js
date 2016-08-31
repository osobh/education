(function() {

  angular
    .module('piratesApp')
    .service('PirateService', PirateService)

    function PirateService($http) {
      const BASE_URL = 'http://localhost:3000/api/pirates'

      this.getPirates = function() {
        console.log("getting pirates from service...")
        return $http.get(BASE_URL);
      }

      this.createPirate = function(newPirate) {
        return $http.post(BASE_URL, newPirate);
      }

      this.getPirate = function(id) {
        return $http.get(BASE_URL + "/" + id);
      }

      this.deletePirate = function(id) {
        return $http.delete(BASE_URL + "/" + id);
      }

      this.updatePirate = function(updatedPirate) {
        return $http.put(BASE_URL + "/" + updatedPirate.id, updatedPirate);
      }
    }

    PirateService.$inject = ["$http"];

})()