#Angular And Rails: Resources, HTML5 Pushstate

The lesson will build off of [this solution](https://github.com/gSchool/contacts-app-angular-rails/tree/solutionBasicSetup) to the contacts app.

## Resources

In the solution to the angular contacts app, the `$resource` service was used instead of the `$http` service.  The `$resource` service is a higher level service that tries to make dealing with restful apis easier.  First take a look at the code in `app/assests/javascript/angular/services.js`:

```js
contactsApp.service('Contact', ['$resource', function($resource) {
  return $resource(
    "/contacts/:id.json",
    {id: "@id"},
    {update: {method: "PUT"}} 
  );
}]);
```

This defines a service called Contact that will create a new resource to talk to the contact api.

**EXERCISE**

Look at the angular docs on the [$resource service](https://docs.angularjs.org/api/ngResource/service/$resource).  What does each parameter in this example do?  What happens if you replace the `{id: "@id"}` line with `null`?  What does removing `{update: {method: "PUT"}}` do?  Both parameters are necessary for our example.

One of the advantages of the `$resource` service is that it helps to eliminate callback code.  From the angular docs:


>It is important to realize that invoking a $resource object method immediately returns an empty reference (object or array depending on isArray). Once the data is returned from the server the existing reference is populated with the actual data. This is a useful trick since usually the resource is assigned to a model which is then rendered by the view. Having an empty object results in no rendering, once the data arrives from the server then the object is populated with the data and the view automatically re-renders itself showing the new data. This means that in most cases one never has to write a callback function for the action methods.


For example, in order to get all of the contacts for the inital page load, this is all the controller code that is needed:

```js
$scope.contactData = Contact.query();
```

The `contactData` can then be used in the view. Whenever the query method populates `contactData` with data from the service call, the view will be updated thanks to two way data binding.  This is great because you don't have to write the URL of the api in many places, and you don't have to write callback code.

Any service call that you want to make that changes the state of the server is a little different.  For example, here is the create method:

```js
  $scope.createContact = function(){
    var contact = new Contact($scope.contact);
    contact.$save().then(function() {
      $scope.contactData.push(contact);
      $scope.contact.name = "";
      $scope.contact.email = "";
      $scope.contact.phone = "";
    });
  };
```

Notice that we are creating a new instance of a Contact resource and then assigning it to a variable called contact.  We are doing this in order to call the `$save` method.  This method actually makes the service call for us to update the api.

## HTML5 Pushstate

HTML5 Pushstate is a new browser feature that allows programmatic access to the history of the browser.  You can read more about the details of the feature on [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

Angular supports modifying the browser's history through the `$locationProvider`.

The goal of this section is to get links working in our contacts app without using the `#` symbol.  To get the links to work, we need both the angular app and the rails app to work together.  First, let's add html5mode support to angular.

**EXERCISE**

Add html5mode support to your angular router.  If you are getting an immediate error after enabling html5mode, look into the base tag.  Make sure you have added it.

**EXERCISE**

Why is adding html5 pushState support not enough to get links to work?  For example if I send a link to `http://www.mydomain.com/contacts/1`, the show page should be displayed.  Why doesn't this work if only the angular code supports pushState?  **HINT**: When does angular get a chance to take over the view?

![](https://cms-assets.tutsplus.com/uploads/users/12/posts/22160/preview_image/html5.jpg)

Now that you have the router working, we need to add some code on the rails side to support the links as well.

The first step is separate api routes in our rails app and all other routes.  The api routes are any routes that our front end will send ajax requests to.  For the current app, we just have the contacts route for our api.  All other requests are going to be requests for the HTML template of our angular app.  For example, we want a GET request for `/` and a GET request  `/contacts/1` to return the same HTML, which gets the same angular app files.  The angular app then loads on the front end and takes over the routing of the front end.

To separate traffic, we'll use the `rack-rewrite` gem.  In your `Gemfile` add `gem rack-rewrite`.

Next, in `config/application.rb` add the following rewrite rule inside of the `module ContactsApp` block:


```
config.middleware.insert_before(Rack::Runtime, Rack::Rewrite) do
  rewrite %r{^(?!.*(api|auth|omniauth|\.)).*$}, '/'
end
```

The above rule tells your server to rewrite any incoming request to `/`.  The exception to that rule is any path starting with api, auth or omniauth.  So as long as the path doesn't start with any of those 3 strings, your router will see all other requests as requests to `/`.  This means we only need 1 rule in the router to match any traffic that will be handled by the angular router:

```
root to: 'statics#index'
```

Next, we have to change the route for our api.  Add a scope for the resources :contacts line in the `routes.rb` file:

```ruby
  scope '/api' do
    resources :contacts, only: [:index, :show, :create, :update, :destroy]
  end
```

The scope changes the path for contacts app to /api/contacts/...

**EXERCISE**

Execute `rake routes` in the terminal.  Does everything look correct.  Try opening up your app in the browser with the path `/api/contacts`.  Does your rails app return the json response?  In other words, are you getting through to your api rather than getting your request rewritten to `/`.

**EXERCISE**

Now that the rewrite rule is in place, try copying some links from your app and reloading them on the page.  Is everything working?  You may have to change some links from `#` to normal links on your page.  Try using the browser's back button.  Does that work as expected?  Make sure you get everything working as if your angular app were a normal rails CRUD app.  __HINT__: There is most likely an issue with your api requests. Make sure you've updated the paths for the ajax requests correctly.
