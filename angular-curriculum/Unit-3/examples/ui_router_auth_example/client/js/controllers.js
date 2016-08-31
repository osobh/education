app.controller("SignupController", function($scope, UserService, $state){

  $scope.signup = function(user){
    UserService.signup(user).then(function(data){
      UserService.setCurrentUser(data);
      $state.go('home');
    }).catch(function(data){
      $scope.errors = data.data;
      $scope.user = {};
    });
  };
});

app.controller("LoginController", function($scope, UserService, $state, $window){
  $scope.login = function(user){
    UserService.login(user).then(function(data){
      UserService.setCurrentUser(data);
      $state.go('home');
    }).catch(function(data){
      $scope.errors = data.data;
      $scope.user = {};
    });
  };
});

app.controller("UserController", function($scope, UserService, $state, $window, currentUser, user){
  $scope.currentUser = currentUser;
  $scope.user = user;
});

app.controller("EditController", function($scope, UserService, $state, $window, currentUser, user){
  $scope.editUser = function(user){
    UserService.editUser(user).then(function(data){
      $window.localStorage.removeItem("user");
      $window.localStorage.setItem("user",JSON.stringify(data.data));
      $state.go('home');
    }).catch(function(err){
      $scope.errors = "Looks like someone already has that username!";
      $scope.user = {};
    });
  };

  $scope.removeUser = function(id){
    UserService.removeUser(id).then(function(data){
      $window.localStorage.clear();
      $state.go('login');
    }).catch(function(err){
      $scope.errors = err;
    });
  };
});

app.controller("UsersController", function($scope,currentUser,users){
  $scope.users = users;
  $scope.currentUser = currentUser;
});