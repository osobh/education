var app = angular.module("todoApp", ['ui.router','ngResource']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('todos', {
      url: '/',
      controller: "TodosController",
      templateUrl: "templates/index.html",

      // Every key in this object "resolve" can be injected into
      // the controller for this state. In our case "TodosController"
      resolve: {
        // Resolves can be functions, or strings.

        // If a resolve is a function, you can inject dependencies
        // and the return value is what will be injected as allTodos
        allTodos: function(TodoService) {
          console.log("This happens first.");

          // If the value of a resolve is a promise then
          // the ngRoute will wait for the promise to be
          // resolved before instantiating the controller
          return TodoService.query();
        },

        // If the return value of the function is plain data
        // then it resolves instantly.
        somethingArbitrary: function(){return "Plain Old Data"},

        // If the resolve is a string, not a function, then it
        // must be a reference to a service
        resolvedSimpleService: "SimpleService"
      }
    })
    // Challenge: Add a resolve to the edit_todos and show_todos state to
    // have resolves such that the data for the todo in question is available
    // before the controller instantiates. 
    .state('edit_todos', {
      url: '/todos/:id/edit',
      controller: "EditTodoController",
      templateUrl: "templates/edit.html",
      resolve: {
        // your resolve here
      }
    })
    .state('show_todo', {
      url: '/todos/:id',
      controller: "TodoController",
      templateUrl: "templates/show.html",
      resolve: {
        // your resolve here
      }
    })
    .state('new_todo', {
      url: '/todos/new',
      controller: "NewTodoController",
      templateUrl: "templates/new.html"
    })
;

  $locationProvider.html5Mode(true);
});

