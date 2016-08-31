#The Final Evolution: Angular Style

Let's take a look at how to structure larger Angular apps, using this refactored [AngularFire todo list app](https://github.com/gSchool/refactored-angular-todo-list).

Watch the following video for walkthrough of the major changes.  

[![](https://i.gyazo.com/a42f9a376f08e25b5b6d9ba8966fa8c0.png)](https://vimeo.com/137453520)

The most obvious change is to folder structure. Files are now grouped by feature:

```
app
	auth
		auth.controller.js
		auth.module.js
		auth.service.js
		authForm.diretive.js
		authForm.html
		config.route.js
		login.html
		register.html
	core
		constants.js
		core.module.js
		firebase.service.js
		todos.service.js
	landing
		config.route.js
		landing.html
		landing.module.js
	layout
		layout.module.js
		navbar.directive.js
		navBar.html
	todos
		directives
			todoForm.directive.js
			todoForm.html
			todoList.directive.js
			todoList.html
		config.route.js
		todos.controller.js
		todos.html
		todos.module.js
	app.module.js
index.html
	
```

We're using [John Papa's Angular Styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) as a jumping off point for structuring our applications.  Here are some of the most important changes:


1. **Define 1 component per file.**  No more `controllers.js` or `filters.js`.  Instead, move components into individual files like `AuthController.js`.

2. **Wrap Angular components in an Immediately Invoked Function Expression (IIFE).**

	```js
	
	(function() {
	  'use strict';
	
	  angular
	      .module('app')
	      .factory('storage', storage);
	
	  function storage() { }
	})();
	
	```

	An IIFE removes variables from the global scope. This helps prevent variables and function declarations from living longer than expected in the global scope, which also helps avoid variable collisions.

3. **Use unique naming conventions with separators for sub-modules**. For example `app` may be your root module while `app.dashboard` and `app.users` may be modules that are used as dependencies of app.

4. **Declare modules without a variable using the setter syntax**.

	```js
	angular
	    .module('app', [
	        'ngAnimate',
	        'ngRoute',
	        'app.shared',
	        'app.dashboard'
	    ]);
	        
	```
	
	With 1 component per file, there is rarely a need to introduce a variable for the module.

5. **When using a module, avoid using a variable and instead use chaining with the getter syntax.**

6. **Use named functions instead of passing an anonymous function in as a callback.**


	```js
	
	angular
	    .module('app')
	    .controller('Dashboard', Dashboard);
	
	function Dashboard() { }
	
	```

7. **Use the controllerAs syntax** over the classic controller with $scope syntax.
	
	```html
	
		<div ng-controller="Customer as customer">
	    	{{ customer.name }}
		</div>
	
	```

8. **Use a capture variable for this when using the controllerAs syntax**. Choose a consistent variable name such as vm, which stands for ViewModel.
	
	```js
	
	function Customer() {
	    var vm = this;
	    vm.name = {};
	    vm.sendMessage = function() { };
	}
	```
	
	The this keyword is contextual and when used within a function inside a controller may change its context. Capturing the context of this avoids encountering this problem.

8. **Place bindable members at the top of the controller**

	```js
	
	function Sessions() {
	    var vm = this;
	
	    vm.gotoSession = gotoSession;
	    vm.refresh = refresh;
	    vm.search = search;
	    vm.sessions = [];
	    vm.title = 'Sessions';
	
	    ////////////
	
	    function gotoSession() {
	      /* */
	    }
	
	    function refresh() {
	      /* */
	    }
	
	    function search() {
	      /* */
	    }
	    
	 ```
	
	Placing bindable members at the top makes it easy to read and helps you instantly identify which members of the controller can be bound and used in the View. Setting anonymous functions in-line can be easy, but when those functions are more than 1 line of code they can reduce the readability. Defining the functions below the bindable members (the functions will be hoisted) moves the implementation details down, keeps the bindable members up top, and makes it easier to read.


9. **Defer logic in a controller by delegating to services and factories**.


	Avoid:
	
	
	```js
	function Order($http, $q, config, userInfo) {
	    var vm = this;
	    vm.checkCredit = checkCredit;
	    vm.isCreditOk;
	    vm.total = 0;
	
	    function checkCredit() {
	        var settings = {};
	        // Get the credit service base URL from config
	        // Set credit service required headers
	        // Prepare URL query string or data object with request data
	        // Add user-identifying info so service gets the right credit limit for this user.
	        // Use JSONP for this browser if it doesn't support CORS
	        return $http.get(settings)
	            .then(function(data) {
	             // Unpack JSON data in the response object
	               // to find maxRemainingAmount
	               vm.isCreditOk = vm.total <= maxRemainingAmount
	            })
	            .catch(function(error) {
	               // Interpret error
	               // Cope w/ timeout? retry? try alternate service?
	               // Re-reject with appropriate error for a user to see
	            });
	    };
	}
	```
	
	
	Recommended:
	
	```js
	
	function Order(creditService) {
	    var vm = this;
	    vm.checkCredit = checkCredit;
	    vm.isCreditOk;
	    vm.total = 0;
	
	    function checkCredit() {
	       return creditService.isOrderTotalOk(vm.total)
	          .then(function(isOk) { vm.isCreditOk = isOk; })
	          .catch(showError);
	    };
	}
	
	```

	Logic may be reused by multiple controllers when placed within a service and exposed via a function.

10. **Create one directive per file**. Name the file for the directive like `calendarRange.directive.js`


11. **Use $inject to manually identify your dependencies for Angular components**

	
	```js
	
	angular
	    .module('app')
	    .controller('Dashboard', Dashboard);
	
	Dashboard.$inject = ['$location', '$routeParams', 'common', 'dataservice'];
	
	function Dashboard($location, $routeParams, common, dataservice) {
	}
	
	```

	This safeguards your dependencies from being vulnerable to minification issues when parameters may be mangled. For example, common and dataservice may become a or b and not be found by Angular. Avoid creating in-line dependencies as long lists can be difficult to read in the array. Also it can be confusing that the array is a series of strings while the last item is the component's function.

12. **Use consistent names for all components following a pattern that describes the component's feature** then (optionally) its type. My recommended pattern is `feature.type.js`

