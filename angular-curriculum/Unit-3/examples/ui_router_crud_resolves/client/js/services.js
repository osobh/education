app.service("TodoService",['$resource', function($resource){
    return $resource('/api/todos/:id', { id: '@_id' }, {
       update: {
         method: 'PUT' // this method issues a PUT request
       }
     });
}]);

app.service("SimpleService",[function() {
    return {
        message: "This is a simple singleton message being used as an example"
    }
}]);