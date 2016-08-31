# Authentication with Angular and JSON Web Tokens

**Standard**: Implement and diagram JWT-based authentication between single-page apps and servers

The **objectives** for this article are:

- Use interceptors to respond to HTTP requests/responses globally
- Use `resolve` in routes to resolve dependencies that use promises
- Use route life cycle + listeners to run code whenever routes change globally
- Use `angular.run` to run code when the angular app boots


### Introduction to Token Authentication

Now that we are getting more comfortable building applications with the MEAN stack, it's time to add authentication to our application. This is one of the more difficult topics when learning about how to build Single Page Applications. Before continuing - answer the following questions

1. What is authentication? What is authorization?
2. How have you previously implemented authentication?

For the second answer, you might have thought of something like cookies and sessions, where you would authenticate the user on every request with some cookie data that is sent to the server, but there is another way that we can authenticate users as well - we can use tokens.

First off, what is a token? Simply put, it is a piece of information that is used as a lookup mechanism. All it really is, is a signed (secured) string that is sent to the server on every request. So why would we want to use tokens?

## Why use tokens instead of cookies?

Now that we have a basic understanding of what a token is - let's think about why we might want to use it over cookies?

Before the emergence of single page applications, we usually had a single client and server and used cookies/sessions to maintain state and handle authentication. However, the way we structure our applications has changed   greatly over the past couple years.

We now have many different technologies and tools and our Single Page Applications consume multiple APIs. We can easily have an application that uses a Node API, a Rails API as well as other Web/Mobile APIs. This makes it a nightmare and almost impossible to try to share cookie/session data between these APIs. It would be really nice if we could have one single "secret" (a key we store on a server) on all of our servers and share the token between each one!

Some other advantages include performance, CSRF protection, ease of testing and mobile development. You can read more about these advantages [here](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/)

### Introducing JSON Web Tokens

So now that we know that tokens are a better option, what kind of token should we use? The most popular tool right now are JSON Web Tokens (JWT for short - pronounced "Jot"). So what is a JWT?

From [jwt.io](jwt.io):

> JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with HMAC algorithm) or a public/private key pair using RSA.

That's quite a lot. Let's try to understand this a bit more by reading the documentation...

#### Exercise

Read [http://jwt.io/introduction/](http://jwt.io/introduction/) introduction and answer the following questions

1. In your own words - what is a JSON Web Token?
1. Authentication is a great use case for JWTs, what other technologies/tools have you used for authentication previously?
2. What three parts comprise the structure of a JWT?
3. What data goes in the header?
4. What is a claim? Compare and contrast reserved, and private claims.
5. What is the signature? What stops someone from just making up their own JWT and gaining access to your site?
1. What is a HTTP header?
2. In the reading it states "it should send the JWT, typically in the Authorization header using the Bearer schema." What is the Bearer schema? What is another type of schema you can use with the Authorization header?
3. What is Cross-Origin Resource Sharing? Why is this not a problem when using JWTs?
4. What other types of tokens exist? Why is JWT easier to work with than some other options?

#### Additional Resources

1. [The Anatomy of a JSON Web Token](https://scotch.io/tutorials/the-anatomy-of-a-json-web-token)
1. [Understanding JSON Web Tokens (JWT)](https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec#.h0649q1oi)

## Some essential angular concepts/tools for Auth

Now that we have a better understanding of what JWTs are, let's look at a few tools in angular and `ngRoute` to help prepare us for building an app with authentication.

## Interceptors

Interceptors are services that allow us to modify requests and responses before they are sent and after they return.

In order to create an interceptor, we make a new service and then include that service inside of the interceptors array on the `httpProvider` object (a service given to us by ng-route)

```js
var app = angular.module("interceptorApp",['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $routeProvider.when('/',{
    templateUrl: "templates/home.html",
    controller: "HomeController",
  });
  $httpProvider.interceptors.push('testInterceptor');
})

.service('testInterceptor', function testInterceptor(){
  return {
    // always make sure to return anything you use here!
    request: function(config){
      debugger
      return config;
    },
    requestError: function(err){
      debugger
      return err;
    },
    response: function(config){
      debugger
      return config;
    },
    responseError: function(err){
      debugger
      return err;
    }
  };
})

.controller("HomeController", ['$http', function($http){
    // // to see successful requests / responses
    // $http.get('http://omdbapi.com?t=titanic')
    //   .then(function(res) {
    //     console.log(res.data.message)
    //   });
    // to see an unsuccessful response
    $http.get('http://dsajdkslajdklsajdsa.com').then(function(res){
      console.log(res)
    })
}]);

```

### So what can we do with these interceptors?

We can intercept our HTTP requests to attach the token to the header! This will allow us to send the token to the server (which we will need when checking to see if a user is authorized) To do this we find our token inside of local storage and attach it to `config.headers`, which is an object that contains any headers.

`config.headers.Authorization = "Bearer " + "some_token"`

In an interceptor, this looks something like:

```js
request: function(config){
  var token = localStorage.getItem("token");
  if(token)
    config.headers.Authorization = "Bearer " + token;
  return config;
}
```

## Resolve

Very commonly, we want to make sure that promises are resolved before we render a page. For example, if we are requesting some data from a server, we might want to wait until we have that data before we render the page. To do this, we use the resolve property which is accessible in each one of our routes. Another excellent use case for resolve is to make sure that a user is authorized to access a certain page. We wouldn't want to partially load a page that a user should not access - we should stop them before they see anything!

Here is an example of a resolve. In this route we are injecting two dependencies into our controller, currentUser and users.
```js
.when('/home',{
  templateUrl: "templates/home.html",
  controller: "HomeController",
  resolve: {
    currentUser : function(UserService) {
      return UserService.getCurrentUser();
    },
    users: function(UserService){
      return UserService.getAllUsers()
    }
  }
})
```

Here are three good resources to learn more about resolve:

[https://www.youtube.com/watch?v=vIDvluer97A](https://www.youtube.com/watch?v=vIDvluer97A)

[https://www.youtube.com/watch?v=rbqRJQZBF3Q](https://www.youtube.com/watch?v=rbqRJQZBF3Q)

[https://www.youtube.com/watch?v=cRjh7Pwobug](https://www.youtube.com/watch?v=cRjh7Pwobug)

If you are using `ui-router`, it also implements similar functionality: https://github.com/angular-ui/ui-router/wiki#resolve

### Route Life Cycle + Listeners

Previously, we saw that if there was some data for the user in the session - we knew that they were logged in! In our case, it means that there is a token in local storage! So we need to check local storage to see if there is a token. We also will want to send this token from localStorage to our server to verify the authenticity of the user. At the same time, we want to protect certain routes that we are on. In order to do this we will use a mix of interceptors and listen for changes in our routes. We will see this more in our example, but if you want to learn more about the Route Life Cycle with `ngRoute` you can learn more [here](https://www.youtube.com/watch?v=P6KITGRQujQ) and [here](https://egghead.io/lessons/angularjs-route-life-cycle)

### A Sample Application with Authentication

We are going to be using this example to see how this can be implemented:

[Example Auth Application](./examples/auth_example)

### Refactoring to use angular-jwt + angular-storage

So writing our own interceptors is quite rough! It would be really nice if we had a tool that could handle the creation and management of our interceptor. For that we have angular-jwt. You can learn more about it as well as a useful tool for handling localStorage (and fallback management) with angular-storage [here](https://www.youtube.com/watch?v=lDb_GANDR8U) and [here](https://github.com/auth0/angular-jwt)

### Social Auth

There is also another tool called [satelizer](https://github.com/sahat/satellizer) which can handle multiple social auth providers for you. You can see a demo [here](https://satellizer.herokuapp.com/#/) as well as an example for what a backend with node might look like [here](https://github.com/sahat/satellizer/blob/master/examples/server/node/server.js)

 If you find satelizer to be too difficult, Auth0 is another option tool. You can get started with this tutorial (here)[https://www.youtube.com/watch?v=ug_KmAZFe9Q](https://www.youtube.com/watch?v=ug_KmAZFe9Q) (but be warned - this is still quite challenging)

### Exercise

Add authentication to your todo app! This is going to be quite challenging so take your time to review the example and concepts discussed in this readme. Users should be able to see other users todos, but not be able to update and delete them.

### Additional Things to consider + read

Expiring Tokens - right now our tokens never expire, for security they should! Research how to add this to your JWT and see an example [here](https://github.com/sahat/satellizer/blob/master/examples/server/node/server.js)

[https://auth0.com/blog/2014/01/27/ten-things-you-should-know-about-tokens-and-cookies/#token-cross-domains](https://auth0.com/blog/2014/01/27/ten-things-you-should-know-about-tokens-and-cookies/#token-cross-domains)

[https://stormpath.com/blog/token-auth-spa/](https://stormpath.com/blog/token-auth-spa/)

If you would like to use passport for authentication - this is a great example.
[http://mherman.org/blog/2015/07/02/handling-user-authentication-with-the-mean-stack/#angular-app](http://mherman.org/blog/2015/07/02/handling-user-authentication-with-the-mean-stack/#angular-app)
