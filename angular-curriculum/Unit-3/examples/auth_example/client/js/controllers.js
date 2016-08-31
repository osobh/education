app.controller("SignupController", SignupController)

SignupController.$inject = ["UserService", "$location"]

function SignupController(UserService, $location){
  const vm = this;
  vm.signup = function(user){
    UserService.signup(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/users');
    }).catch(function(data){
      vm.errors = data.data;
    });
  };
};

app.controller("LoginController", LoginController)

LoginController.$inject = ["UserService", "$location"]

function LoginController(UserService, $location){
  const vm = this;
  vm.login = function(user){
    UserService.login(user).then(function(data){
      UserService.setCurrentUser(data);
      $location.path('/users');
    }).catch(function(data){
      vm.errors = data.data;
    });
  };
};

app.controller("UserController", UserController)

UserController.$inject = ["user"];

function UserController(user){
  const vm = this;
  vm.user = user.data;
};

app.controller("EditController", EditController)

EditController.$inject = ["$location","UserService","user","$window"];

function EditController($location, UserService, user, $window){
  const vm = this;

  vm.user = user.data;
  vm.editUser = function(user){
    UserService.editUser(user).then(function(data){
      $window.localStorage.setItem("user",JSON.stringify(data.data));
      $location.path('/users');
    }).catch(function(err){
      vm.errors = err.data;
    });
  };

  vm.removeUser = function(user){
    UserService.removeUser(user).then(function(data){
      UserService.logout();
      $location.path('/login');
    }).catch(function(err){
      vm.errors = err;
    });
  };
};

app.controller("UsersController", UsersController)

UsersController.$inject = ["currentUser","users"];

function UsersController(currentUser,users){
  const vm = this;
  vm.users = users;
  vm.currentUser = currentUser;
};
