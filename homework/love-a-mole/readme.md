# love-a-mole
During this exercise, you'll be using a great deal of what you've already learned. In the completion of love-a-mole you'll be using:

* DOM manipulation
* HTML Forms
* Prototypes & Object Oriented JavaScript
* Closures
* Overwriting the value of `this` with `call`/`apply`/`bind`
* Timers and asynchronous code

Your goal is to create a web-based version of [Whack-a-Mole][01]. For those of you unfammiliar with this awesome game, here's the objective: In a limited amount of time, moles will rise from a collection of holes in a randomized order. When a mole appears, a player attempts to strike the mole with a mallet before the mole returns to its hole. Sounds fun, right?!

In the original version, we whack moles with a mallet; in this version, we're going to help moles find love in the world. Because, in the end, all we really need is love. 

# Instructions
To complete this exercise, you'll need to follow the following three steps:

## Step 1: Fork and Clone

Get the code locally! 

```
$ git clone [yourForkURL]
$ cd love-a-mole
```


## Step 2: Write the Missing Code 
In this repository, you'll notice the following directory structure:

```bash
.
├── css
|   └── whack-a-mole.css
├── images
|   └── found-love.png
|   └── heart.png
|   └── mole.png
├── javascript
|   └── main.js
|   └── mole.js
├── .gitignore
├── index.html
├── README.md
└── whack-a-mole.html

```

Several of the files in above directory is missing code. Your task is to locate the omitted code and then add that code. To give you some direction, you'll be focusing your attention on just these files:

1. `index.html`
2. `css/whack-a-mole.css`
3. `javascript/main.js`
4. `javascript/mole.js`

You will probably find yourself editing each of the files several times to complete different features. Pick a feature you want to work, then tackle it until it works. For example, one reasonable way to start this assignment would be:

1. Make the HTML form on index.html submit data to populate the `GLOBALS` variable in `main.js`.
2. Create the gameboard in `main.js`
	* Create some css styles for the game board
3. Add the appropraite CSS rules for an HTML element with a class of `mole`
	* Manually create an element like `<div class="mole"></div>` in order to test your CSS rules
4. Make the game-starter button work.
	* You'll need to edit the `Mole` class to make sure Moles can occupy a mole-hole
	* You'll need to handle a click-event for the button

... and so on ... 

Whatever order you decide to approach the tasks, try to break them into small chunks! The work will be easier to manage if you can identify small steps towards the bigger goal.

When you've made some meaningful progress--such as completed the style for a CSS selector or completed the definition of a function--add and commit your work. In other words, don't have your entire solution in one commit!

## Step 3: Submission

When you're done, push your work to your forked repository. Then copy the URL of your forked repository and paste it into the workbook exercise box. 

[00]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[01]: https://en.wikipedia.org/wiki/Whac-A-Mole

