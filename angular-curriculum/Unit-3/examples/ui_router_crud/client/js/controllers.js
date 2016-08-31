app.controller("TodosController", ['$scope', '$location', 'TodoService', function($scope, $location, TodoService){

  $scope.todos = TodoService.query();

  $scope.deleteTodo = function(todo){
    todo.$delete(function(todo){
      $scope.todos.splice($scope.todos.indexOf(todo),1);
    });
  };
}]);

app.controller("NewTodoController", ['$scope', '$location', 'TodoService', function($scope, $location, TodoService){
  $scope.createTodo = function(todo){
    TodoService.save(todo, function(){
      $location.path('/');
    });
  };
}]);

app.controller("TodoController", ['$scope', '$location', '$stateParams', 'TodoService', function($scope, $location, $stateParams, TodoService){
  TodoService.get({id: $stateParams.id}, function(todo){
    $scope.todo = todo;
  }, function(err){
    $location.path('/');
  });
}]);


app.controller("EditTodoController", ['$scope', '$location', '$stateParams', 'TodoService', function($scope, $location, $stateParams, TodoService){
  TodoService.get({id: $stateParams.id},function(todo){
    $scope.todo = todo;
  }, function(err){
    $location.path('/');
  });
  $scope.editTodo = function(todo){
    $scope.todo.$update(function(){
      $location.path('/');
    });
  };
}]);