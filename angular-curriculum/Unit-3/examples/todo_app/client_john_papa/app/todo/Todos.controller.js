(function() {
    'use strict';

    angular
        .module("todoApp")
        .controller("Todos", Todos);

    Todos.$inject = ['TodoService'];

    function Todos(TodoService) {
        var vm = this;

        TodoService.getTodos().then(function(todos) {
            vm.todos = todos.data;
        }).catch(function(err) {
            vm.errors = err;
        });
    }
})();
