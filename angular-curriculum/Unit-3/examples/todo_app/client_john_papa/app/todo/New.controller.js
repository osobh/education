(function() {
    'use strict';

    angular
        .module("todoApp")
        .controller("New", New);

    New.$inject = ['$location', 'TodoService'];

    function New($location, TodoService) {
        var vm = this;

        vm.addTodo = function(todo) {
            TodoService.addTodo(todo).then(function() {
                $location.path('/todos');
            });
        };
    }
})();
