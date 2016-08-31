app.service("TodoService",['$http', function($http){
  return {
    getTodos: function(){
      return $http.get("/api/todos");
    },
    createTodo: function(todo){
      return $http.post("/api/todos", todo);
    },
    getTodo: function(id){
      return $http.get("/api/todos/" + id);
    },
    editTodo: function(id,todo){
      return $http.put("/api/todos/" + id, todo);
    },
    deleteTodo: function(id){
      return $http.delete("/api/todos/" + id);
    }
  };
}]);