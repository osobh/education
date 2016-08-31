var app = angular.module("interceptorApp",['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $routeProvider.when('/',{
    templateUrl: "templates/home.html",
    controller: "HomeController",
  });
  $httpProvider.interceptors.push('testInterceptor');
})

.service('testInterceptor', function testInterceptor(){
  return {
    // always make sure to return anything you use here!
    request: function(config){
      debugger
      return config;
    },
    requestError: function(err){
      debugger
      return err;
    },
    response: function(config){
      debugger
      return config;
    },
    responseError: function(err){
      debugger
      return err;
    }
  };
})

.controller("HomeController", ['$http', function($http){
    // // to see successful requests / responses
    // $http.get('http://omdbapi.com?t=titanic')
    //   .then(function(res) {
    //     console.log(res.data.message)
    //   });
    // to see an unsuccessful response
    $http.get('http://dsajdkslajdklsajdsa.com').then(function(res){
      console.log(res)
    })
}]);
