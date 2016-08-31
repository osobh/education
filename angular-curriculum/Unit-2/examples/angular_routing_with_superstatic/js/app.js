var app = angular.module('getPumped',['ngRoute']); //jshint ignore:line

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: "partials/first.html",
    controller: "FirstController"
  }).when('/second', {
    templateUrl: "partials/second.html",
    controller: "SecondController"
  }).when('/numbers/:first', {
    templateUrl: "partials/numbers.html",
    controller: "NumbersController"
  }).otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
});
