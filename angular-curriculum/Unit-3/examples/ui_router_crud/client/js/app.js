var app = angular.module("todoApp", ['ui.router','ngResource']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('todos', {
      url: '/',
      controller: "TodosController",
      templateUrl: "templates/index.html"
    })
    .state('new_todo', {
      url: '/todos/new',
      controller: "NewTodoController",
      templateUrl: "templates/new.html"
    })
    .state('show_todo', {
      url: '/todos/:id',
      controller: "TodoController",
      templateUrl: "templates/show.html"
    })
    .state('edit_todos', {
      url: '/todos/:id/edit',
      controller: "EditTodoController",
      templateUrl: "templates/edit.html"
    });

  $locationProvider.html5Mode(true);
});

