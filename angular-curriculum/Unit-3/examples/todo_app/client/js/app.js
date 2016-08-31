var app = angular.module("todoApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/todos',{
      templateUrl: "templates/index.html",
      controller: "TodosController"
    })
    .when('/todos/new',{
      templateUrl: "templates/new.html",
      controller: "NewTodosController"
    })
    .when('/todos/:id/edit',{
      templateUrl: "templates/edit.html",
      controller: "EditTodosController"
    })
    .otherwise({redirectTo: '/todos'});


  // get rid of #
  $locationProvider.html5Mode(true);
});