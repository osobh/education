app.service("UserService", function($http, $location, $q, $window){
  return {
    signup: function(user){
      return $http.post('/api/signup', user);
    },
    login: function(user){
      return $http.post('/api/login', user);
    },
    setCurrentUser: function(data){
      $window.localStorage.setItem("token",data.data.token);
      $window.localStorage.setItem("user",JSON.stringify(data.data.user));
    },
    getCurrentUser: function(){
      var dfd = $q.defer();
      dfd.resolve(JSON.parse($window.localStorage.getItem("user")));
      return dfd.promise;
    },
    logout: function(){
      localStorage.clear();
    },
    getAllUsers: function(){
      return $http.get("/api/users/");
    },
    getSingleUser: function(id){
      return $http.get("/api/users/" + id);
    },
    editUser: function(user){
      return $http.put("/api/users/" + user.data.id, user.data);
    },
    removeUser: function(id){
      return $http.delete("/api/users/" + id);
    }
  };
});