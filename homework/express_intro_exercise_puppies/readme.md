## Intro to express....with puppies!

![http://www.unitedwaynorman.org/sites/unitedwaynorman.org/files/cutepuppy.jpg](http://www.unitedwaynorman.org/sites/unitedwaynorman.org/files/cutepuppy.jpg)

### Background

Your task is to build an application that allows the user to see a list of puppies as well as add and see individual puppies.

You should use an array of `puppies` to create and display puppies (while you are building this, think why an array may not be the best long term solution for storing data). 

## Routes

You'll need the following `puppies` routes:

* `get` `/` to display information about all of the puppies.
* `get` `/puppies/new` to get a form to save a new puppy (each puppy should have an id which increments, a name and an age)
* `get` `/puppies` to save a puppy to your `puppies` array.
* `get` `/puppies/:id` to find a puppy by id in the array of `puppies` and display it.

You'll need the following `site` related routes:

* `get` `/about` serve a static about your page.
* `get` `/contact` serve a static `contact` page.

## Getting started

Start your node application by using the same steps we did in class:

- fork and clone this repository
- run `npm install` to install dependencies
- make sure you have a `views` folder for your application (you will want to have subfolders for your site views and puppies views)
- make your first commit!
- Start in your app.js by including the proper dependencies and middleware

When you're done - give this puppy a high five!

![http://cutepuppyclub.com/wp-content/uploads/2015/05/648b42e4-ef9e-41e2-9844-f02c61cbe1cc.jpg](http://cutepuppyclub.com/wp-content/uploads/2015/05/648b42e4-ef9e-41e2-9844-f02c61cbe1cc.jpg)


## Bonus

- Include some navigation links to help the user navigate the site.
- When creating a puppy, allow the user to include a link to an image for the puppy and display that image when the puppies are listed.
- Try and figure out how to add css/javascript to your page (this will involve looking at the express documentation for `express.static` and understanding what `__dirname` is)
- Issuing a GET request to add puppies to the array is a little strange. Usually POST requests handle the creation of new data on our server. But in order to make POST requests work in Express, you'll need to install a module called [Body parser](https://github.com/expressjs/body-parser). Research this module and refactor your code to change your GET to "/puppies" to a POST to "/puppies". 

## Super Bonus

- Add a new resource called owners. An owner can have many puppies; in other words, the relationship between owners and puppies is one to many. Use nested routes to implement full CRUD on both owners and puppies.
