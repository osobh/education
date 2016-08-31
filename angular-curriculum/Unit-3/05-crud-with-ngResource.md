# CRUD with ngResource

### Refactoring to use $resource

So far we have made API calls using the `$http` service, but when we start building more complex backends (especially ones that use RESTful routing), we can leverage a more advanced tool - `ngResource`. The `ngResource` module provides interaction with RESTful services via the $resource service. It is important to note that the $resource service is built on the top of the $http service so this is simply an extension of things that we have seen before. $resource also handles the resolving/rejecting of a promise for us, so there is no need to add `.then` to our methods (unlike `$http`). However, `$resource` does assume that we have a RESTful backend which means that our routes on the server need to be set up as follows (we've seen this many times!):

Let's assume that our resource is for a user - this is what `$resource` would expect our backend to look like for all RESTful routes. 
```
GET '/users' 
GET '/users/new' 
GET '/users/:id' 
GET '/users/:id/edit' 
POST '/users' 
PUT '/users/:id' 
DELETE '/users/:id' 
```

If our backend is set up correctly and with a little set up on the front end, we can start accessing some built in methods given to us by the `$resource` service.

#### built in methods given to you by $resource

1. get() - retrieve an individual resource
2. query() - retrieve all data for that resource
3. save() - save a single instance
4. remove() - remove a single instance
5. delete() - remove a single instance

Wondering what the difference between remove and delete are? See [here](http://stackoverflow.com/questions/15706560/difference-between-delete-and-remove-method-in-resource)(spoiler - there isn't any)

#### Getting started

In order to get started using these methods, we need to first include the script for ngResource

`<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-resource.js"></script>`

We then need to include `ngResource` as a dependency to our application 

`var app = angular.module("todoApp", ['ngRoute','ngResource']);`

Finally we need to create a service that defines what our RESTful endpoint is so that `$resource` can make the correct API calls. Here is what that looks like:

```js
angular.module('firstApp').service('User', ["$resource", function ($resource) {
    return $resource('/api/user/:id',{id: "@id"});
}]);
```

#### What is this @_id? 

The second argument to $resource() is an object with the parameter as the key and the value is whatever property we set (starting with a @). This means that 
if we set the key to `id` and the value to `@id`, the value will correspond ot the `id` property of the instance that we have passed to the method we used. This is very useful for PUT and DELETE requests. 

#### Seeing these methods in action

Now in our `users` controller we can do the following (these are simple examples):

```js
// get all users
$scope.users = User.query();

// get a single user

User.get({id: $routeParams.id}, function(user){
    $scope.user = user;
  }, function(err){
    $scope.error = err;
    $location.path('/');
});

// save a user

$scope.createUser = function(user) {
    TodoService.save(user, function(){
      $location.path('/');
    });
};

// remove a single resource

$scope.deleteUser = function(user){
    user.$delete(function(user){
      $location.path('/'); 
    });
};

// this is equivalent to deleting a resource this way:
$scope.deleteTodo = function(todo){
		TodoService.delete(todo, function(){
			findTodos();
		})
}

```

### Adding additional methods to a resource 

Unfortunately, `ngResource` does not come with a built in method for updating a resource. However, it is quite simple to add additional methods to a service that we create using `$resource`. Instead of just returning `return $resource('/api/user/:id', { id: '@_id' });` - we can pass in an optional third parameter which we pass in objects with keys (name of our method) and value (what request we are making). To add the update functionality to our todo resource - here is what we need to write in our `services.js`.

```js
angular.module('firstApp').service('UserService', ['$resource', function($resource) {
  return $resource('/api/user/:id', { id: '@id' }, {
    update: { method: 'PUT' } // this method issues a PUT request
  });
}]);
```
We would then use code like this in our Angular controller:

```js
$scope.updateUser = function(user){
		UserService.update(user, function(user){
		    // This is an optional callback to be run after the resource is updated.
		})
	}
```

### An important note

From the docs: 

It is important to realize that invoking a $resource object method immediately returns an empty reference (object or array depending on isArray). Once the data is returned from the server the existing reference is populated with the actual data. This is a useful trick since usually the resource is assigned to a model which is then rendered by the view. Having an empty object results in no rendering, once the data arrives from the server then the object is populated with the data and the view automatically re-renders itself showing the new data. This means that in most cases one never has to write a callback function for the action methods.

### Nested Resources

What if we want to use $resource to query some nested resource (something like `/authors/:id/books`)? Well here is where it gets a bit tricky...You can research [here](http://stackoverflow.com/questions/26928342/angularjs-resource-with-nested-resources) or see [here](http://stackoverflow.com/questions/19406442/ngresource-resolving-nested-resources) how to do this using $resource, but if you start including lots of nested resources, you should look at using [Restangular](https://github.com/mgonto/restangular) instead.

### An Additional Resource (no pun intended)

[https://docs.angularjs.org/api/ngResource/service/$resource](https://docs.angularjs.org/api/ngResource/service/$resource)

### Exercise

Answer the following questions:

- What is `ngResource`?
- What does `ngResource` assume that you have (on the back end)?
- What advantages does `$resource` have over `$http`?
- What are some of the limitations of `$resource`?
- What is the difference between `remove()` and `delete()`?

### Assignment

Refactor your todo app from the previous lesson to use `ngResource`. Your backend should be the exact same, but your client side code should remove all traces of `$http` and use `ngResource` and its built in methods (as well as a custom update method) instead.
