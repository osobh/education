var app = angular.module("authApp",['ngRoute']);

app.config(function($routeProvider, $locationProvider, $httpProvider){

$routeProvider
  .when('/signup',{
    templateUrl: "templates/signup.html",
    controller: "SignupController",
    controllerAs: "signupCtrl",
    preventWhenLoggedIn: true,
    signup: true
  })
  .when('/login',{
    templateUrl: "templates/login.html",
    controller: "LoginController",
    controllerAs: "loginCtrl",
    preventWhenLoggedIn: true
  })
  .when('/users',{
    templateUrl: "templates/index.html",
    controller: "UsersController",
    controllerAs: "usersCtrl",
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
  .when('/logout',{
    restricted: true,
    resolve: {
      app: function(UserService, $location){
        UserService.logout();
        $location.path("/login");
      }
    }
  })
  .when('/users/:id',{
    templateUrl: "templates/show.html",
    controller: "UserController",
    controllerAs: "userCtrl",
    restricted: true,
    resolve: {
      user: function(UserService,$route){
        return UserService.getSingleUser($route.current.params.id);
      }
    }
  })
  .when('/users/:id/edit',{
    templateUrl: "templates/edit.html",
    controller: "EditController",
    controllerAs: "editCtrl",
    restricted: true,
    resolve: {
      user: function(UserService,$route){
        return UserService.getSingleUser($route.current.params.id);
      }
    }
  })
  .otherwise({redirectTo: '/login'});

  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push("AuthInterceptor");
});

app.service("AuthInterceptor", function($window,$location){
  return {
    request: function(config){
      // prevent browser bar tampering for /api routes
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      var token = $window.localStorage.getItem("token");
      if(token)
        config.headers.Authorization = "Bearer " + token;
      return Promise.resolve(config);
    },
    responseError: function(err){
      // if you mess around with the token, log them out and destroy it
      if(err.data === "invalid token" || err.data === "invalid signature" || err.data === "jwt malformed"){
        $location.path("/logout");
        return Promise.reject(err);
      }
      // if you try to access a user who is not yourself
      if(err.status === 401){
        $location.path('/users');
        return Promise.reject(err);
      }
      return Promise.reject(err);
    }
  };
});

app.run(function ($rootScope, $location, $window, UserService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    // if you try access a restricted page without logging in
    if (next.restricted && !$window.localStorage.getItem("token")) {
      if(current && current.signup)
        $location.path('/signup');
      else
        $location.path('/login');
    }
    // if you try to log in or sign up once logged in
    if (next.preventWhenLoggedIn && $window.localStorage.getItem("token")) {
      $location.path('/users');
    }
  });
});
