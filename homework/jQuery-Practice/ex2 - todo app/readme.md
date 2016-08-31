# Challenge 2 - jQuery Todo 

## Task

You are going to build a small to-do app that allows a the user to add todos to a list. When the todo is added, the user should have the option of checking a box which adds a line through the todo text (marking it as complete) as well as the option for removing the todo from the list

## Getting started

1. When the user submits the form, the todo should be added to the DOM (you can use `li`)
2. When the user checks the box next to the todo, it should add a class of "completed" which strikes through the todo (check out the text-decoration property in CSS)
3. When the user unchecks a box, the class of completed should be removed
3. When the user clicks the remove button, the todo should be removed from the DOM. Make sure that the correct todo is removed from the DOM (if you remove the 5th todo, make sure that one is deleted) 

### jQuery methods you may use 

* addClass()
* removeClass()
* append() or prepend()
* remove()
* val()
* text()
* parent()
* next()
* on()

## Bonus

1. Have each todo fadeIn and fadeOut when they are added and removed
2. When the text of a todo is double-clicked, remove it from the list (look at the `dblclick` event in the jQuery docs)

## Extra-bonus

- Store your Todos using LocalStorage. If done successfully, you should be able to refresh the page and see your todos as well as the ones that have been marked as complete (checked). This also means that when you remove a todo, it does not only get removed from the DOM, but from LocalStorage as well. Good luck!  