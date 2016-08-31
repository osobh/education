app.controller("SignupController", function($scope, UserService, $location){

  $scope.signup = function(user){
    UserService.signup(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/users');
    }).catch(function(data){
      $scope.errors = data.data;
    });
  };
});

app.controller("LoginController", function($scope, UserService, $location){
  $scope.login = function(user){
    UserService.login(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/users');
    }).catch(function(data){
      $scope.errors = data.data;
    });
  };
});

app.controller("UserController", function($scope, user){
  $scope.user = user.data;
});

app.controller("EditController", function($scope, $location, UserService, user, $window){
  $scope.user = user.data;
  $scope.editUser = function(user){
    UserService.editUser(user).then(function(data){
      $window.localStorage.setItem("user",JSON.stringify(data.data));
      $location.path('/users');
    }).catch(function(err){
      $scope.errors = "Looks like someone already has that username!";
    });
  };

  $scope.removeUser = function(user){
    UserService.removeUser(user).then(function(data){
      UserService.logout();
      $location.path('/login');
    }).catch(function(err){
      $scope.errors = err;
    });
  };
});

app.controller("UsersController", function($scope,currentUser,users){
  $scope.users = users;
  $scope.currentUser = currentUser;
});

app.controller("TodosController", function($scope, TodosService, todos) {
  $scope.todos = todos;

  $scope.todo = {};

  $scope.createTodo = function() {
    TodosService.createTodo($scope.todo).then(function(todo) {
      $scope.todo = {};
      $scope.todos.push(todo);
    }).catch(function (err) {

    });
  };

  $scope.deleteTodo = function(todo) {
    TodosService.deleteTodo(todo.id).then(function(deletedTodo) {
      if (deletedTodo.id) {
        _.remove($scope.todos, function(todo) {
          return todo.id === deletedTodo.id;
        });
      }
    }).catch(function(err) {
      console.log("Error", err);
    });
  };

  $scope.updateTodo = function(todo) {
    TodosService.updateTodo(todo).then(function(updatedTodo) {
      var foundTodo = _.find($scope.toods, function(todo) {
        return todo.id === updatedTodo.id;
      });

      if (foundTodo) {
        foundTodo.title = updatedTodo.title;
        foundTodo.text = updatedTodo.text;
        foundTodo.done = updatedTodo.done;
      }
    }).catch(function(err) {

    });
  };
})