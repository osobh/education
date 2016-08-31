## Angular Basic Set Up
<a name="angular-routes"></a>
```js
// app.js

var app = angular.module('pirates', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/pirates.html',
    controller: 'PiratesController'
  })
})
```
```js
app.controller('PiratesController', ['$scope', function ($scope) {
  $scope.message = "I am a pirate"
}])

```
```html
<!-- index.html -->
<!DOCTYPE html>
<html ng-app='pirates'>
  <head>
    <meta charset="utf-8">
    <title>Pirates Demo</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="/stylesheets/style.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body ng-controller="PiratesController">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#/">
            <span class="glyphicon glyphicon-eye-close"></span>
          </a>
        </div>
      </div>
    </nav>
    <div ng-view></div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-route.min.js"></script>
    <script type="text/javascript" src="/javascripts/app.js"></script>
    <script type="text/javascript" src="/javascripts/controllers/pirates_controller.js"></script>
  </body>
</html>
```

## Express Routes
<a name="express-routes"></a>
__Express app.js__

```js
// app.js, instead of users or routes
var api = require('./routes/api');
```

```js
// app.js instead of users or routes
app.use('/api/pirates', api);
```

__Express routes__
```sh
routes
  └── api.js
```

```js

// in api.js
var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
function Pirates() {
  return knex('pirates');
}

router.get('/', function(req, res, next) {
  Pirates().select().then(function (pirates) {
    res.json(pirates);
  })
});

module.exports = router;
```

## Pirates Controller invoking our Pirates Service all function:
```js
// app.js

app.controller('PiratesController', ['$scope', 'PiratesService', function ($scope, PiratesService) {
  PiratesService.all().then(function (pirates) {
    $scope.pirates = pirates;
  })
}])
```
