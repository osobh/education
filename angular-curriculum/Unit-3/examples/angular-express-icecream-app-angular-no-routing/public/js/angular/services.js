app.service('icecreamService', ['$http', function($http) {

  var url = '/api/icecreams';

  return {
    getIcecreams: function() {
      return $http.get(url);
    },
    createIcecream: function(newIcecream) {
      return $http.post(url, newIcecream);
    },
    deleteIcecream: function(id) {
      return $http.delete(url + "/" + id);
    },
    editIcecream: function(icecream) {
      return $http.put(url + "/" + icecream._id, icecream);
    }
  };

}]);