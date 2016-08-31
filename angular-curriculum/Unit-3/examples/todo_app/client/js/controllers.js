app.controller("TodosController", function($scope, TodoService){
  TodoService.getTodos().then(function(todos){
    $scope.todos = todos.data;
  }).catch(function(err){
    $scope.errors = err;
  });
});

app.controller("NewTodosController", function($scope, $location, TodoService){
  $scope.addTodo = function(todo){
    TodoService.addTodo(todo).then(function(){
      $location.path('/todos');
    });
  };
});

app.controller("EditTodosController", function($scope, $location, $routeParams, TodoService){
  TodoService.getTodo($routeParams.id).then(function(todo){
    $scope.todo = todo.data
  });

  $scope.editTodo = function(todo){
    TodoService.editTodo(todo).then(function(){
      $location.path('/todos');
    });
  };

  $scope.deleteTodo = function(todo){
    TodoService.deleteTodo(todo._id).then(function(data){
      $location.path('/todos');
    });
  };
});