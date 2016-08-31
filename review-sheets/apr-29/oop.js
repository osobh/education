"use strict"
// Object Oriented Programming is a style of programming focused
// on the creation and heirarchy of "objects". In this style
// classes are used to create templates for "types" of objects.

// We are already using OOP because the language JavaScript uses
// OOP patterns itself, especially one called "inheritance".

// In JS we typically use a "constructor function" to represent a 
// "class". Here's one:
function User(name, emailAddress) {
    // When we call the constructor function, it will
    // create space for an object called "this". In the 
    // constructor scope, "this" represents the object we
    // are "constructing".

    // Create "public" properties by putting them on "this"
    this.name = name;
    this.emailAddress = emailAddress;

    // Create "private" properties by using a closure
    // and the var keyword.
    var articlesAuthored = 0;

    // To access "private" variables we can use a "public" method
    // but it must be created inside the constructor function in 
    // order to "close over" articles authored.
    this.addToAuthored = function(numAuthored) {
        articlesAuthored += numAuthored;
    }

    this.getArticlesAuthored = function() {
        return articlesAuthored;
    }
}

// For properties and methods that can be shared across all
// Users, it's common and wise to use the prototype object
// which is created once, and shared by all new Users.

// When we call a method that lives on the prototype object
// we have access to "this" which is the user in question. 
// The user we called "printUserInfo" on. 
User.prototype.printUserInfo = function() {
    console.log(this.name, this.emailAddress)
}

// To create a user, we use the constructor function the new keyword:
var tylerUser = new User("Tyler Bettilyon", "tyler.bettilyon@galvanize.com");
var lizUser = new User("Liz Howard", "liz.howard@galvanize.com");

// We can examine and change the "public" properties directly!
tylerUser.addToAuthored(10);
tylerUser.printUserInfo();
console.log(tylerUser.getArticlesAuthored());

lizUser.printUserInfo();
console.log(lizUser.getArticlesAuthored());

// Objects follow an inheritance pattern by default. Our User objects
// can do anything that a regular Object can do!
tylerUser.newProp = "some value";

// We can even call methods from the Object prototype!
tylerUser.hasOwnProperty('name');
