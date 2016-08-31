# JavaScript Document Object Model

## Objectives
* Create new DOM elements
* Modify existing DOM elements

## To Start
* Fork this repo
* Open `index.html`
* Add a `<script>` tag with **your code** from the [JS Classes Exercise](https://github.com/gSchool/js-classes-exercise) - specifically the **Book List**.
  * It should be in a script tag that references an external file: `<script src="bookList.js"></script>`
  * Create another `<script>` tag **under** the script tag that references your booklist.
  * Move the code that creates your instances of a `BookList` and `Book`s into the new script tag.

### Finding DOM nodes
* Using [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById), find the h2 with the ID of `bookListTitle`. Store it in a variable, we're going to use it later!
* Using [document.getElementsByClassName](), find the `<div>` with a class of `bookListContents`. Store it in a variable.

### Creating DOM nodes
* Using [`document.createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement), create an unordered list (`<ul>`). Store it in a variable.
* Create an `li` for each item in your bookList's books array. Use the `innerHTML` property to add content.
  * Make each li contain the book's title in [bold](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong), followed by the book's author in [italics](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em). 
  * If the book's `read` property is `true`, make the while thing [strikethrough](http://mdn.beonex.com/en/HTML/Element/del.html).

### Modifying DOM nodes
* Set the `innerText` property of the `h2` we found earlier to `Book List`
* Using [element.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild), append your `ul` we created to the `div` (the one with a class of `bookListContents`).
* Append all the `li`s containing your books to the `ul`.


### Stretch Goals
* Add another section that lists the book you're currently reading, what you read last, and what you're going to read next

### Super Stretch Goals
* Create a method called `render` on your `Book` class. Have it return an `li`, as we created before
* Create a method called `render` on your `BookList` class that calls render on all of the `Book`s, and returns a new `ul` with all the books appended.
* Advanced - Add a form to add books to your `BookList`, using the `add()` method on your booklist
* Advanced - Add a button that calls the `finishCurrentBook` method on your BookList
* Advanced - Replace the contents of the `.bookListContents` whenever you `add` a book, or `finishCurrentBook`, with a new `ul` from the `BookList`'s `render` method.







## To turn in
* In workbook, submit the link to your fork
