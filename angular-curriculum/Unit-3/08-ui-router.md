# Routing with ui-router

#### What is it?

It's an alternative to `ngRoute`. It provides far more functionality for us in terms of our routing and is used quite frequently in production apps. You will see many examples with UI router as it has become the preferred choice for most (especially larger scale) angular applications as well as tools like [Ionic](http://ionicframework.com/). Note that everything you can do with `ngRoute` you can also do with `ui-router` - so all we are doing here is expanding our knowledge of routing in angular.

#### ui-router vs ngRoute

The biggest difference when you start working with `ui-router` is the concept of `state`. The key tenant of `ui-router` is that state is a place in your application and that is how parts of your application should be defined, not by a URL (like `ngRoute`), but by a state.

### States vs Routes

From a Tim Kindberg (co-creator of ui-router) [presentation](https://www.youtube.com/watch?v=dqJRoh8MnBo):

| State  | Route  |
|---|---|
| A **place** in your app  | A **url** within your app  |
| **Nested** hierarchy  | **Flat** hierarchy  |
| Names are **names**  | Names are **urls**  |
| Navigate **name or url**  | Navigate **url only**  |
| **Multiple** views (ui-view)  | **Single** view (ng-view)  |
| Populate **any** view  | Populate **one** view |
| **State** populates parts of your app  | Directives (ng-include / ng-show/hide) populate parts of your app  |

These advantages include the ability for a nested routing structure (which tremendously cleans up an application) as well as navigation through state instead of URLs. We can also use state and ui-view to populate parts of our application instead of things like ng-include or ng-show/hide/if which will make our application easier to debug and work with. As you can see from this example, to get started with `ui-router`, one of the big differences is the use of `ui-view` instead of `ng-view`

### Getting started with ui-router

First we need to include a script to the `ui-router` and add it as a dependency to our application

In our index.html:
`<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>`

In our app.js:
`var app = angular.module("todoApp", ['ui.router']);`

To get started with `ui-router`, we use a similar function that we did with `ngRoute`.

Take a look at this example:

```js
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      controller: "HomeController",
      templateUrl: "templates/home.html"
    })
  $locationProvider.html5Mode(true);
});
```

Notice that we are not using `$routeProvider`, we use `$stateProvider` instead. We also do not use `when()` and have an `otherwise` attached to `$stateProvider` - our `otherwise` is attached to another service called `$urlRouterProvider`. Finally, just like in `ngRoute` we have `$locationProvider` for cleaner URLs. Also note that in our controllers we do not use `$routeParams` we will be using $stateParams instead.

### Changing State

In ui-router there are three ways to change state in your application

1. Use the $state.go() method - read more about it [here](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#stategoto--toparams--options)
2. Use a `ui-sref` directive - read more about it [here](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#ui-sref)
3. URL routing - read more about it [here](https://github.com/angular-ui/ui-router/wiki/URL-Routing)).

### Exercise

Read through [this](http://www.funnyant.com/angularjs-ui-router/) tutorial for a better understanding of `ui-router` and build the app in the tutorial.

### Using resolve

Another fantastic part of ui-router (this also exists in `ngRoute`) is the ability to resolve promises before we render a view. This ensures that all data necessary is loaded before the view renders and it also allows us to change the state if a certain condition is not met (some kind of authentication or authorization!). This is very commonly done with `$http` or `$resource`.

### Exercise

Answer the following questions

- What is `ui-router`?
- What are some differences between `ui-router` and `ngRoute`?
- What is state?
- What does the `resolve` property let us do?
- What is a nested view? Give an example of when you would use one
- What Do Child States Inherit From Parent States?
- What does the "@" symbol do in regards to multiple named views - read [this](https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views) for the answer

### Assignment

- Refactor your todo app from the previous unit to use `ui-router`. Use resolve for loading all of your todos as well.

- Read through some of the additional resources below and watch the videos - they are incredibly valuable resources for your understanding of `ui-router`!

### Additional Resources

[Why ui-router from co-creator Nate Abele](https://www.youtube.com/watch?v=ZmrsDqMrAVo)

[More on ui-router from co-creator Tim Kindberg](https://www.youtube.com/watch?v=dqJRoh8MnBo)

[Another ui-router tutorial from scotch.io](https://scotch.io/tutorials/angular-routing-using-ui-router)

[Some useful tips for ui-router from scotch.io](https://scotch.io/tutorials/3-simple-tips-for-using-ui-router)

[Adding animations with ui-router](https://www.youtube.com/watch?v=W89DYSthCTQ)

[https://github.com/angular-ui/ui-router](https://github.com/angular-ui/ui-router)

[https://github.com/angular-ui/ui-router/wiki](https://github.com/angular-ui/ui-router/wiki)
