app.service("UserService", function($http, $window){
  return {
    signup: function(user){
      return $http.post('/api/users/signup', user);
    },
    login: function(user){
      return $http.post('/api/users/login', user);
    },
    setCurrentUser: function(data){
      $window.localStorage.setItem("token",data.data.token);
      $window.localStorage.setItem("user",JSON.stringify(data.data.user));
    },
    getCurrentUser: function(){
      return JSON.parse($window.localStorage.getItem("user"));
    },
    logout: function(){
      $window.localStorage.clear();
    },
    getAllUsers: function(){
      return $http.get("/api/users/");
    },
    getSingleUser: function(id){
      return $http.get("/api/users/" + id);
    },
    editUser: function(user){
      return $http.put("/api/users/" + user.id, user);
    },
    removeUser: function(user){
      return $http.delete("/api/users/" + user.id);
    }
  };
});

app.service("TodosService", function($http){
  return {
    getAllTodos: function(){
      return $http.get("/api/todos").then(function(resp) {
        return resp.data;
      });
    },
    createTodo: function(todo) {
      return $http.post("/api/todos", todo).then(function(resp) {
        return resp.data;
      });
    },
    deleteTodo: function(id) {
      return $http.delete('/api/todos/' + id).then(function(resp) {
        return resp.data;
      });
    },
    updateTodo: function(todo) {
      return $http.put("/api/todos/" + todo.id, todo).then(function(resp) {
        return resp.data;
      });
    }
  };
});