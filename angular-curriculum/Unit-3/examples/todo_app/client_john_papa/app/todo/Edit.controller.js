(function() {
    'use strict';

    angular
        .module("todoApp")
        .controller("Edit", Edit);

    Edit.$inject = ['$location', '$routeParams', 'TodoService'];

    function Edit($location, $routeParams, TodoService) {
        var vm = this;

        TodoService.getTodo($routeParams.id).then(function(todo) {
            vm.todo = todo.data;
        });

        vm.editTodo = function(todo) {
            TodoService.editTodo(todo).then(function() {
                $location.path('/todos');
            });
        };

        vm.deleteTodo = function(todo) {
            TodoService.deleteTodo(todo._id).then(function(data) {
                $location.path('/todos');
            });
        };
    }
})();
