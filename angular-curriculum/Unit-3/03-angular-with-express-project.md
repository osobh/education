# Adding Angular to Express

Let's keep working off of the app you built in the first section of this unit. With our ExpressJS app we just need to make a few more changes and we're ready to add angular!

To begin, let's fix our app so that the root path once again renders our `index.ejs` file, rather than returning JSON. To do this, we'll need to update the routes in our `apiRouter` so that they follow paths like `localhost:3001/api/icecreams . . .`

Making the changes should be fairly straightforward, and should look like this, **server.js:**

```javascript
app.use('/api', apiRouter);

// ROOT
app.get('/', function(req,res){
  res.render('index.ejs');
});
```

If you go to `localhost:3001` at this time, you'll probably see a `ReferenceError`, since we're no longer making a database query in the `app.get` to our root. That's okay -- now's the time to refactor our `index.ejs` file to use angular!

First thing's first: let's add AngularJS, Bootstrap, and any other supporting files in to **views/index.ejs** (or into the relevant partial, if you used a partial for your header):

```html
<!DOCTYPE html>
<html ng-app=[NAME OF YOUR ANGULAR APP]>
  <head>
    <meta charset="utf-8">
    <title>Ice Cream Shop</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
    <script src="/js/angular/app.js"></script>
  </head>
```

Notice the `js/angular/app.js`, your angular app will reside in `public/js/angular/app.js`.  All angular related javascript files will be in the `public/js/angular` folder, and included like this:

```html
 <script src="/js/angular/[NAME OF YOUR ANGULAR FILE].js"></script>
```

Previously, your `index.ejs` file gained access to the list of all ice creams thanks to the express router. But now that we've added angular to our project, let's use the `$http` module to grab that data instead. Create a `controllers.js` file and make an `IcecreamController`. Inside of it, you can use the following code to grab all of the Ice cream data:

```javascript
$http.get('/api/icecreams').then(function(res) {
  $scope.icecreams = res.data;
});
```

**Exercise** Refactor your `index.ejs` file to use angular rather than embedded javascript to loop through all of the ice creams and show information on each one. (Note: for now, you'll need to access the id of an ice cream using something like `icecream._id`, not `icecream.id`.)

**Exercise** If you don't have it already, add the ability to delete an ice cream directly from the index of all ice creams. You'll need to use the `$http` service to delete an ice cream from the databse.

**Exercise** Refactor your earlier app so that all functionality lives in the `index.ejs` file. You should be able to add and edit ice creams from this single page (similar to how you added posts in the Reddit clone). Don't worry about routing yet -- we'll break these CRUD operations out into separate files and use the angular router soon enough! Note: in order for data to be passed from your form to your server correctly, you may need to add the following line to your `server.js` file: `app.use(bodyParser.json());`

**Bonus** Try to create some custom directives for your ice cream app. What sorts of issues do you run into?
