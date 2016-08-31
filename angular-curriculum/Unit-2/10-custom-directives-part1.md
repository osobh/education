# Custom Directives: Part 1

Way back in [Unit 1, Lesson 5](https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/5-built-in-directives.md), we went over built in directives.  These are directives that angular comes with.  In this lesson, we're going to build our own custom directives. But first...

- Name at least 5 built in directives you've used so far.
- Watch [AngularJS Directives Tutorial - Part 1 - Demystifying Angular Directives](https://www.youtube.com/watch?v=0r5QvzjjKDc)

### Simple Custom Directive

We are going to make a simple directive that just puts some html on the page.  This is not a great use for directives, but we'll get to more complicated examples later.

`app.js`:

```js
var app = angular.module('simpleDirectiveApp', [])
app.directive('gsAngularLogo', function() {
  return {
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  };
});
```

Our `index.html` would look like this:

```html
<!DOCTYPE html>
<html ng-app="simpleDirectiveApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js" type="text/javascript"></script>
  <script src="app.js" type="text/javascript"></script>
</head>
<body>
  <gs-angular-logo></gs-angular-logo>
</body>
</html>
```

A few things to notice with our new custom directive:

1. Our directive is called `gsAngularLogo` but in the html we use it by calling it `gs-angular-logo`.
2. We prefixed our directive name with gs (galvanize school).  Acording to angular docs, adding a prefix is a good practice so that the chance of a name collision is minimized.
3. The built in directives we've seen so far are called in the view by adding them as attributes of an html tag.  For example: `<html ng-app="simpleDirectiveApp">`.  The `ng-app` directive is an attribute of the html tag.

These observations lead to a few topics:

**Normalization of Html**

When angular looks over your html document, it goes through a process called normalization.  The process essentially goes over each tag, looks for angular directives, and then normalizes the name from dash-delimited name to a camel case name.  For example, angular translates `gs-angular-logo` into `gsAngularLogo`.  This process is necessary because dash delimited names are not the only possiblity for directives.  For example, `gs_angular_logo` would also be valid.

**EXERCISE**

Look through [the normalization section of the angular docs on directives](https://docs.angularjs.org/guide/directive).  Investigate all types of acceptable directive names.  Try all possible formats in the example above.  What is the preferred format for directive naming?

**Using Restrict**

In our example, the directive we used creates an img tag that displays the angular logo.  We could change our html to look like this as well:

```html
<body>
  <h5 gs-angular-logo></h5>
</body>
```

This doesn't really make a lot of sense though.  Angular will add the img tag as a child of the h5 tag.  But our custom directive doesn't really have anything to do with the h5 tag we are claiming to modify.

In this case, it's possible to _restrict_ the custom directive so that it can only be used as an element, rather than an attribute. To do this, we can use the `restrict` option as follows:

`app.js`:

```js
var app = angular.module('simpleDirectiveApp', [])
app.directive('gsAngularLogo', function() {
  return {
    restrict: 'E', // 'E' for element
    template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
  };
});
```

With this restriction in place, you should see that `<h5 gs-angular-logo></h5>` no longer renders the image, but `<gs-angular-logo></gs-angular-logo>` does.

**Best Practice**

Use an angular directive as an attribute only when it decorates a tag or somehow relates to it.  Otherwise, create a separate element for the directive. To put it another way, as stated in the Angular docs:

> Use an element when you are creating a component that is in control of the template. The common case for this is when you are creating a Domain-Specific Language for parts of your template. Use an attribute when you are decorating an existing element with new functionality.

**EXERCISE**

Update the html inside of your body as follows:

```html
  <p>Element directive:</p>
  <gs-angular-logo></gs-angular-logo>
  <p>Attribute directive:</p>
  <h4 gs-angular-logo></h4>
  <p>Class directive:</p>
  <p class="gs-angular-logo"></p>
```

Note that we're using a custom directive in three ways: as an element, as an attribute, and as a class. When you load the page, what do you see? How could you modify `restrict` to show just the class? Just the attribute? All three?

(As an aside, if you check out the [docs](https://docs.angularjs.org/guide/directive) you'll see it's also possible to trigger a directive by comment. However, this feature is included mainly for compatibility with older versions of angular, and shouldn't be used. Stick to elements and attributes.)

**Template Url**

Typically a directive's template will become larger.  To make the directive cleaner, you can use `templateUrl` instead of `template` in the directive.  The `templateUrl` defines an html file that will be requested via ajax and used as the template.

**EXERCISE**

Fix our example to use `templateUrl` instead of template.  **HINT**: Keep in mind that the request for the `templateUrl` is via **ajax**.

### Directives And Scope

Let's add some data to a controller and see how it interacts with the directive.  In the following example, we'll show a yoyo's details in our directive:

`app.js`:


```js
var app = angular.module('yoyoDirectiveApp', [])

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.yoyo = {name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  };
}]);

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'yoyo-details.html',
  };
});
```

`yoyo-details.html`

```html
<h3>{{yoyo.name}}</h3>
<img ng-src="{{yoyo.img}}">
```

`index.html`:

```html
<!DOCTYPE html>
<html ng-app="yoyoDirectiveApp">
<head>
<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.3/angular.js" type="text/javascript"></script>
<script src="app.js" type="text/javascript"></script>
</head>
<body ng-controller="YoyoController">
  <gs-yoyo-details></gs-yoyo-details>
</body>
</html>
```

We can see here that the directive has access to the yoyo from the controller's scope.  By default, when a directive is placed inside of a controller, it will have access to everything on its parent controller's scope.

**Exercise** add a `message` property to the `YoyoController`, then show the message both inside and outside of the directive.

There are a couple of problems with this default behavior of the directive having access to everything in the parent's scope. For one, it's often not a good idea to have your directives so tightly coupled to your controller.  If you change the variable name in the  controller or try to use the directive again somewhere else, you may run into errors. Also, from a practical standpoint you may not want your directive to have access to all of the information in your controller. For example, if you have a list of yoyos and a custom directive governing the display of a yoyo's information, that directive only needs to know about one yoyo, not all of them.

The solution to these problems involves creating an `isolate scope` for the directive. Before doing this, let's see what happens if we don't create an isolate scope.

**Exercise** Change `scope.view.yoyo` to `scope.view.yoyos`, an array of yoyo objects. In your view, render each yoyo's information using your custom directive. 

Possible solution:

`app.js`

```js
var app = angular.module('yoyoApp', []);

app.controller('YoyoController', function($scope) {
  $scope.view = {};
  $scope.view.yoyos = [{
    name: "Duncan Metal Drifter",
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  }, {
    name: "Duncan Hello Kitty Pro Yo yoyo",
    img: "http://cdn6.bigcommerce.com/s-8ndhalpa/products/277/images/613/duncan-hello-kitty-pro-yo-yoyo-15__90815.1404161701.1280.1280.jpg"
  }];
});

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: '../yoyo-details.html'
  }
});
```

`index.html`

```html
<!DOCTYPE html>
<html lang="en" ng-app="yoyoApp">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body ng-controller="YoyoController">
  <gs-yoyo-details ng-repeat="yoyo in view.yoyos"></gs-yoyo-details>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.js"></script>
  <script src="./js/app.js"></script>
</body>
</html>
```

`yoyo-details.html`

```html
<h3>{{ yoyo.name }}</h3>
<img ng-src="{{ yoyo.img }}">
```

#### Isolate Scope

Once you have more than one yoyo, and you have a copy of your custom directive on the page for each yoyo, we can create an isolate scope by using the `scope` option when we create our directive. Here's the basic syntax:

```javascript
app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: '../yoyo-details.html',
    scope: {
      yoyoInDirective: '=yoyoAttribue'
    }
  }
})
```

If you refresh the page, you'll see that the yoyos have disappeared -- our app is broken! Let's take a moment to understand how isolate scope is working in this case, so that we can debug the issue.

The value of `scope` must be an object. The keys in this object (e.g. `yoyoInDirective` correspond to how Angular expects you to name your data in the directive. In this case, since we used a key of `yoyoInDirective`, we should refactor our `yoyo-details.html` as follows:

```html
<h3>{{ yoyoInDirective.name }}</h3>
<img ng-src="{{ yoyoInDirective.img }}">
```

As you can see, the value corresponding to `yoyoDirective` is `'=yoyoAttribute'`. Let's ignore the equals sign for a moment (we'll get to it later). The 'yoyoAttribue' corresponds to an _attribute name_ that we must use when passing data from our controller to our directive. Passing data via attributes is how we get the parts of the scope that we care about into our directive.

In the current example, this means we need to include an attribute so that our custom directive looks like this: 

```html
<gs-yoyo-details yoyo-attribute="yoyo" ng-repeat="yoyo in view.yoyos"></gs-yoyo-details>
```

At the risk of making things overly verbose, let's change the placeholder name we're repeating over from `yoyo` to `yoyoFromRepeat`. Then our HTML would look like this:

```html
<gs-yoyo-details yoyo-attribute="yoyoFromRepeat" ng-repeat="yoyoFromRepeat in view.yoyos"></gs-yoyo-details>
```

So, how does data about an individual yoyo get passed from our controller to our directive?

1. We iterate over each `yoyo` in the controller's `yoyos` array, storing the data in `yoyoFromRepeat`.
2. Each `yoyoFromRepeat` gets passed into our custom directive via the `yoyo-attribute` attribute.
3. In the html for our custom directive, we have access to `yoyoFromRepeat`'s data in `yoyoInDirective`. This conndtion is possible because we told our directive that `yoyoInDirective` should correspond to whatever we pass into the directive via the `yoyo-attribute` attribute.

Of course, we've now got two different names for our data depending on where we are (`yoyoFromRepeat` and `yoyoInDirective`), plus a third name for the attribute on our directive. It's common to name all of these the same; the downside with this approach is that if we name everything `yoyo`, it's much less clear how the directive's isolate scope is connected to the controller's scope.

**Exercise** Refactor your code to eliminate `yoyoInDirective`, `yoyoAttribute`, and `yoyoFromRepeat` in favor of just `yoyo`. 

**Exercise** Fun fact: if in your scope you have a key and value with the same name (e.g. `foo: '=foo'`), you can omit the name in the value (e.g. `foo: '=') and Angular will still know what to do! Use this to refactor your directive even more.

**Exercise** After completing the previous two exercises, try replacing one of the strings `yoyo` somewhere in your app with the string `foo`. Where else do you need to replace `yoyo` by `foo` to get your app working again?

**EXERCISE**

Create an app that uses the [pokemon api](http://pokeapi.co/docs/).  The app should first make a request to the pokedex to get all possible pokemon.  Then randomly select 5 pokemon to display.  The app should display the pokemon's name, types, name of moves (limit it to 6), and a sprite for the pokemon. Use a custom directive to display the pokemon.

The app should use a custom directive for each pokemon (eg `pokemon-item`).

**Bonus**: For the pokemon fans out there, write an algorithm that randomly picks two pokemon and decide who would win.  I do not know anything about the pokemon game, so this would be up to you to figure out.

![](http://s8.postimg.org/eo2kbbnb9/pokemon.png)
