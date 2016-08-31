var app = angular.module("todoApp", ['ngRoute','ngResource']);

app.config(function($routeProvider, $locationProvider, $httpProvider){
  $routeProvider.when('/', {
    controller: "TodosController",
    templateUrl: "templates/index.html"
  }).when('/todos/new', {
    controller: "NewTodoController",
    templateUrl: "templates/new.html"
  }).when('/todos/:id', {
    controller: "TodoController",
    templateUrl: "templates/show.html"
  }).when('/todos/:id/edit', {
    controller: "EditTodoController",
    templateUrl: "templates/edit.html"
  }).otherwise({
    redirectTo:'/'
  });
  $locationProvider.html5Mode(true);
});

