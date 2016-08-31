app.controller("TodosController", 
  ['$scope', '$location', 'TodoService', 'allTodos', 'somethingArbitrary', 'resolvedSimpleService', 'SimpleService', function(
    $scope,   $location,   TodoService,   allTodos,   somethingArbitrary,   resolvedSimpleService,   SimpleService){

  // allTodos came from our resolve
  console.log("and when we get here, allTodos is already data: ", allTodos);
  $scope.todos = allTodos;

  // we also have access to the arbitrary data resolve
  console.log("somethingArbitrary: ", somethingArbitrary);

  // We also got the simpleService, but with the name from resolve.
  console.log("resolvedSimpleService: ", resolvedSimpleService);

  // I injected the SimpleService directly to show you that they are the 
  // same object
  console.log("SimpleService === resolvedSimpleService", SimpleService === resolvedSimpleService);

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

// Challenge, edit this controller to accept the data from a resolve
// instead of using TodoService.get here. 
app.controller("TodoController", ['$scope', '$location', '$stateParams', 'TodoService', function($scope, $location, $stateParams, TodoService){
  TodoService.get({id: $stateParams.id}, function(todo){
    $scope.todo = todo;
  }, function(err){
    $location.path('/');
  });
}]);

// Challenge, edit this controller to accept the data from a resolve
// instead of using TodoService.get here. 
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