app.controller("TodosController", ['$scope', '$location', 'TodoService', function($scope, $location, TodoService){

  TodoService.getTodos().then(function(todos){
    $scope.todos = todos.data;
  });

  $scope.deleteTodo = function(todo){
    TodoService.deleteTodo(todo._id).then(function(todo){
      $scope.todos.splice($scope.todos.indexOf(todo),1);
    });
  };
}]);

app.controller("NewTodoController", ['$scope', '$location', 'TodoService', function($scope, $location, TodoService){
  $scope.createTodo = function(todo){
    TodoService.createTodo(todo).then(function(){
      $location.path('/');
    });
  };
}]);

app.controller("TodoController", ['$scope', '$location', '$routeParams', 'TodoService', function($scope, $location, $routeParams, TodoService){
  TodoService.getTodo($routeParams.id).then(function(todo){
    $scope.todo = todo.data;
  }).catch(function(err){
    $location.path('/');
  });
}]);


app.controller("EditTodoController", ['$scope', '$location', '$routeParams', 'TodoService', function($scope, $location, $routeParams, TodoService){
  TodoService.getTodo($routeParams.id).then(function(todo){
    $scope.todo = todo.data;
  }).catch(function(err){
    $location.path('/');
  });
  $scope.editTodo = function(todo){
    TodoService.editTodo(todo._id, todo).then(function(){
      $location.path('/');
    });
  };
}]);