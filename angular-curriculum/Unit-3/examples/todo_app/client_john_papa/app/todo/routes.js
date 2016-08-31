(function() {
    angular
        .module("todoApp")
        .config(config);

    config.$inject = ['$routeProvider']

    function config($routeProvider) {

        $routeProvider
            .when('/todos', {
                templateUrl: "app/todo/todos.html",
                controllerAs: "todos",
                controller: "Todos"
            })
            .when('/todos/new', {
                templateUrl: "app/todo/new.html",
                controllerAs: "new",
                controller: "New"
            })
            .when('/todos/:id/edit', {
                templateUrl: "app/todo/edit.html",
                controllerAs: "edit",
                controller: "Edit"
            })
            .otherwise({
                redirectTo: '/todos'
            });
    }

})();
