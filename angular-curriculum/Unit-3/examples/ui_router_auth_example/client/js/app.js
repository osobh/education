var app = angular.module("authApp",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

  $urlRouterProvider.otherwise('/users');

  // $stateProvider.state(
  //   'users',{
  //   url: '/',
  //   templateUrl: "templates/login.html",
  //   controller: "LoginController",
  //   preventWhenLoggedIn: true
  // })
  $stateProvider.state("signup", {
    url: '/signup',
    templateUrl: "templates/signup.html",
    controller: "SignupController",
    preventWhenLoggedIn: true,
    signup: true
  })
  .state("login", {
    url: '/login',
    templateUrl: "templates/login.html",
    controller: "LoginController",
    preventWhenLoggedIn: true
  })
  .state("users", {
    url: '/users',
    templateUrl: "templates/index.html",
    controller: "UsersController",
    restricted: true,
    resolve: {
      currentUser : function(UserService) {
        return UserService.getCurrentUser();
      },
      users: function(UserService){
        return UserService.getAllUsers();
      }
    }
  })
  .state("logout", {
    url: '/logout',
    restricted: true,
    resolve: {
      app: function(UserService, $state){
        UserService.logout();
        $state.go("login");
      }
    }
  })
  .state("user", {
    url: '/users/:id',
    templateUrl: "templates/user.html",
    controller: "UserController",
    restricted: true,
    resolve:  {
      currentUser: function(UserService) {
        return UserService.getCurrentUser();
      },
      user: function(UserService,$stateParams){
        return UserService.getSingleUser($stateParams.id);
      }
    }
  })
  .state("edit_user", {
    url: '/users/:id/edit',
    templateUrl: "templates/edit.html",
    controller: "EditController",
    restricted: true,
    resolve:  {
      currentUser: function(UserService) {
        return UserService.getCurrentUser();
      },
      user: function(UserService,$stateParams){
        return UserService.getSingleUser($stateParams.id);
      }
    }
  });

  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push("AuthInterceptor");
});

app.service("AuthInterceptor", function($location,$q){
  return {
    request: function(config){
      // prevent browser bar tampering
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      var token = localStorage.getItem("token");
      if(token)
        config.headers.Authorization = "Bearer " + token;
      return config;
    },
    // ui-sref="^users" to go to parent
    responseError: function(err){
      // still need to handle failed login / signup
      // if you mess around with the token, log them out and destroy it
      if(err.data === "invalid token" || err.data === "invalid signature" || err.data === "jwt malformed"){
        $q.reject(err);
        // $location.path("/logout");
      }
      // if you try to access a user who is not yourself
      if(err.status === 401){
        // $state.go('/home');
        $q.reject(err);
      }
      return $q.reject(err);
    }
  };
});

app.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, next, current) {
    // if you try access a restricted page without logging in
    if (next.restricted && !localStorage.getItem("token")) {
      if(current && current.signup)
        $state.go('signup');
      else
        $state.go('login');
    }
    // if you try to log in or sign up once logged in
    if (next.preventWhenLoggedIn && localStorage.getItem("token")) {
      $state.go('home');
    }
  });
});