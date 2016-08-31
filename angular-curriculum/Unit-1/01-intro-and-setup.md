# Introduction and Setup

### How This Curriculum Works

Unit 1:

 1. [Intro and Setup](/Unit-1/01-intro-and-setup.md)
 1. [Data Binding](/Unit-1/02-data-binding.md)
 1. [Angular MVC](/Unit-1/03-angular-mvc.md)
 1. [Expressions and Filters](/Unit-1/04-expressions-and-filters.md)
 1. [Built-In Directives](/Unit-1/05-built-in-directives.md)
 1. [Intro to Controllers](/Unit-1/06-intro-to-controllers.md)
 1. [Scope](/Unit-1/07-intro-to-scope.md)
 1. [Angular Events](/Unit-1/08-intro-to-events.md)
 1. [Form Validation](/Unit-1/09-form-validation.md)
 1. [Animations](/Unit-1/10-animation.md)
 1. [Unit 1 Assessment Reddit Clone](/Unit-1/11-reddit-clone.md)

Unit 2:

 1. [A New Structure](/Unit-2/01-a-new-structure.md)
 1. [Digest Cycle](/Unit-2/02-digest-cycle.md)
 1. [Dependency Injection](/Unit-2/03-dependency-injection.md)
 1. [Custom Filters](/Unit-2/04-custom-filters.md)
 1. [Routing](/Unit-2/05-routing.md)
 1. [HTTP Service](/Unit-2/06-http-service.md)
 1. [Movie Search App](/Unit-2/07-movie-search.app.md)
 1. [Services](/Unit-2/08-services.md)
 1. [Promises](/Unit-2/09-promises.md)
 1. [Custom Directives Part 1](/Unit-2/10-custom-directives-part1.md)
 1. [Custom Directives Part 2](/Unit-2/11-custom-directives-part2.md)
 1. [Shopping Cart App](/Unit-2/12-shopping-cart-app.md)

Unit 3 - Building Apps with the MEAN Stack

 1. [Express/Mongo Review](/Unit-3/01-express-mongo-review.md)
 1. [Routing and Postman](/Unit-3/02-routing-and-postman.md)
 1. [Angular Express Project](/Unit-3/03-angular-with-express-project.md)
 1. [MEAN CRUD](/Unit-3/04-mean-crud.md)
 1. [CRUD with ngResource](/Unit-3/05-crud-with-ngResource.md)
 1. [MEAN Auth](/Unit-3/06-mean-auth.md)
 1. [ui-router](/Unit-3/07-ui-router.md)
 1. [Unit 3 Assessment Reddit Clone Redux](/Unit-3/08-unit-3-assessment.md)

Unit 4 (Optional) - Firebase, Restructuring Angular Apps, Backend Integration with Rails

 1. [Firebase Intro](/Unit-4-(optional)/01-firebase-intro.md)
 1. [AngularFire Intro](/Unit-4-(optional)/02-angularfire-intro.md)
 1. [AngularFire Arrays and CRUD](/Unit-4-(optional)/03-angularfire-arrays-and-crud.md)
 1. [AngularFire Project](/Unit-4-(optional)/04-angularfire-project.md)
 1. [AngularFire Auth](/Unit-4-(optional)/05-angularfire-auth.md)
 1. [Angular Structure and Style](/Unit-4-(optional)/06-structuring-angular-apps.md)
 1. [Angular + Rails Setup](/Unit-4-(optional)/07-angular-with-rails-setup.md)
 1. [Angular + Rails Resources and HTML5 Pushstate](/Unit-4-(optional)/08-angular-with-rails-resources-and-paths.md)


Before you move on to the next lesson, you should:

* Complete all exercises and SAVE EVERY EXERCISE FOR FUTURE USE
* Answer all questions in ONE MARKDOWN FILE

Be prepared to review your exercises with instructors and peers as well as engage in discussions about the questions.

Let's get started!

### What is Angular?

According to the official Angular introduction, Angular is a-

> client-side technology, written entirely in JavaScript. It works with the long-established technologies of the web (HTML, CSS, and JavaScript) to make the development of web apps easier and faster than ever before.

Angular, along with other client-side libraries (Backbone, Ember, React), help us deal with larger, more complex code bases on the client-side. They also redefined the roles of the client and server, resulting in a new application structure called a Single-Page Application (or SPA). In this new structure, the client interacts with the server by making RESTful AJAX requests that are triggered by user interactions.

It boils down to this: **Angular helps us build complex, single-page applications very quickly.**

### Hello, Angular!

We're going to start by setting up a very simple Angular app to say Hello World - Angular-style!

Staying true to an iterative approach to coding, we'll start slow, defining everything (markup and Angular syntax) within a single `index.html` file - a true single page app! - and scale from there, learning about patterns for structuring complicated Angular apps.

1. Create an `index.html` file.
1. Add the Angular dependency. For now, we're going to utilize a CDN - `https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js`.
1. Add the `ng-app` attribute to the `<html>` element in your document. This indicates that *everything* inside of the `<html>` element - from the opening to closing tag - is part of an Angular app. In other words, all Angular code/tags that fall inside the `<html>` element will be rendered by the Angular interpreter. *Get used to that `ng` prefix as you will be seeing it A LOT!*
1. Test it out! Add the following Angular tag anywhere inside of the `<body>` tag - `<p>{{1 + 6}}<p>`. Open the page in your browser. If all is well then you should see `7`.
1. Finally, update the title element - `<title>{{ greeting }} World</title>` - and add the following two paragraphs:
  ```html
  <p>Say something to the world <input type="text" ng-model="greeting" ng-init="greeting='Hello, '"></p>
  <p>{{ greeting }} world!</p>
  ```

1. Test this out. Enter something in the input box and watch the DOM update! Note the new `ng-`attributes - you will learn more about them soon.

#### Final Code

```html
<!DOCTYPE html>
<html ng-app>
  <head>
    <meta charset="utf-8">
    <title>{{ greeting }} World</title>
  </head>
  <body>
    <p>{{1 + 6}}<p>
    <br>
    <p>Say something to the world <input type="text" ng-model="greeting" ng-init="greeting='Hello, '"></p>
    <p>{{ greeting }} world!</p>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
  </body>
</html>
```

## Questions

* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
* People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
* Is Angular an MVC framework?
* Turn to the Angular docs. Find `ng-app`. What is it and what does it do? What does `ng` stand for?

## Resources

* [Angular Docs](https://docs.angularjs.org/api)
* [Thinking in Angular](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background/15012542#15012542)
* [AngularJS by Example - Building a Bitcoin Investment Calculator](https://github.com/mjhea0/thinkful-angular)
* [Angular vs Ember vs Backbone] (https://www.airpair.com/js/javascript-framework-comparison)
