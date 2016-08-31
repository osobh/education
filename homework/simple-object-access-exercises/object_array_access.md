# Objects and Arrays Exercises

Take each variable, paste it into [repl.it](http://repl.it) at the top of the file.
Access the specified location, put it into a seperate variable.
Console.log that variable, and make sure it matches the prompt.

## Array Access
1. Given the following array:

```javascript
var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];

```
Write a statement that outputs the following:
* `"The Hobbit"`

* `"The Universe in a Nutshell"`

2. Given the following array:
```javascript
var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"]
```

Write a loop that outputs the following:  

```
> "Call Me Maybe"
> "Pacabel's Cannon in D"
> "Smells Like Teen Spirit"
```


3. Given the following arrays:
```javascript
var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"]

var riders = ["Kelly", "Steve", "Georgio", "Fabio"]

```

Write a loop that outputs the following:  

```
> "Kelley drives a Chevy Tahoe"
> "Steve drives a Ford Fiesta"
> "Georgio drives a Toyota Yaris"
> "Fabio drives a Honda Fit"
```


## Nested Array Access

1. Given the following array of arrays:

```javascript
var trilogies = [
	["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
	["The Empire Strikes Back","Return of the Jedi","A New Hope"],
	["Back to the Future", "Back to the Future II", "Back to the Future III"],
	["The Hunger Games", "Catching Fire", "Mockingjay"],
	["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
	["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
	["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe","Life, the Universe and Everything","So Long, and Thanks for All the Fish","Mostly Harmless","And Another Thing..."]
]

```
* Write a loop that prints all movies
* Write a loop that prints only the last movie in the trilogy
* Write a loop that prints only the first movie in the trilogy
* Write a loop that prints only odd-numbered movies

### Bonus
2. The following array of arrays represent tic tac toe boards. Write an algorithm that determines the winner:

```javascript
var gameBoard1 = [
	["x", "o", "x"],
	["x", "o", "o"],
	["x", "x", "o"]
] // winner "x"

var gameBoard2 = [
	["o", "o", "x"],
	["x", "o", "x"],
	["x", "x", "o"]
] // winner "o"

var gameBoard3 = [
	["x", "o", "x"],
	["o", "x", "o"],
	["x", "x", "o"]
] // winner "x"
```

## Object Access

Below you have three users. Write several functions:

1. return true if the email address contains an "@" symbol.
2. return true if the phone number is valid (###-###-####).
3. return true if the user has a first and last name.

```javascript
var user = {
	name : "Jenny Appleseed",
	phone : "555-656-2323",
	email: "j.appleseed@appleseedanddaughters.com",
	address : "123 Main street, anytown USA"
}

var user2 = {
	name : "Kerri Appleseed",
	phone : "555-456-3344",
	email: "k.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

var user3 = {
	name : "Sally Appleseed",
	phone : "555-34-663",
	email: "s.appleseed@appleseedanddaughters.com",
	address : "123 main street, anytown USA"
}

```



### Bonus:
Write a function that prints a given user an ascii-art business card that looks like this:


```
###############################################
#                                             #
#  Jenny Appleseed                            #
#  Appleseed and Daughters                    #
#                                             #
#                                             #
#  123 Main street, anytown USA               #
#  j.appleseed@appleseedanddaughters.com      #
#                                             #
###############################################
```


3. The following objects represent hands in "go fish". The keys are cards that are present in the card. Write a function that looks in the hands for the existance of a card. Remember, in Go Fish, one player says to the other- "Got any 3s?" and the player has to give up any threes, regardless of suit. The function should return false if the is not present, and return true *and delete the property from the card* if it is found (representing the loss of the card.)

```javascript
var fish_hand1 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}

var fish_hand2 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}

var fish_hand3 = {
	"K_spades" : true,
	"Q_spades" : true,
	"3_hearts" : true,
	"3_spades" : true,
	"3_clubs" : true
}
```


## Nested Object Access
Given the following object:

```javascript

var library = {
	city: "San Francisco",
	name: "SF Public",
	bestBook: {
			title: "JavaScript for Dummies",
			company: {
				name: "BookCo",
				employees: {
					writers: [
						{
							firstName: "Bob",
							lastName: "Marley",
						}
					],
					publisher: {
						firstName: "Fred",
						lastName: "Bambam"
					}
				}
			}
		}
	}
}

```

Write a statement that outputs the following:

 1. The city of the library

 2. The name of the library

 3. The bestBook in the library

 4. The title of the bestBook in the library

 5. The company of the bestBook in the library

 6. The publisher of the company of the bestBook in the library


## Arrays in Objects

Below is a recipe:

```javascript
var cremeBrulee = {
	ingredients: [
		"eggs",
		"heavy cream",
		"vanilla pods"
	],
	cookware: [
		"mixing bowl",
		"whisk",
		"ramekins",
		"oven",
		"measuring cups"
	]
}
```

Write statements that do the following:

 1. Returns our Crème Brûlée's ingredients:
 ```javascript
 [ "eggs", "heavy cream", "vanilla pods"]
 ```

 2. Returns our Crème Brûlée's cookwares:
 ```javascript
 [ "mixing bowl", "whisk", "ramekins", "oven", "measuring cups" ]
 ```

 3. Returns the first item in our Crème Brûlée's ingredients:
 ```javascript
 "eggs"
 ```

 4. Returns the third item in our Crème Brûlée's cookwares:
 ```javascript
 "ramekins"
 ```

 5. Adds sugar to our Crème Brûlée's ingredients:
 ```javascript
 [ "eggs", "heavy cream", "vanilla pods", "sugar"]
 ```

 6. Change "eggs" in our Crème Brûlée's ingredients to "egg yolks":
 ```javascript
 [ "egg yolks", "heavy cream", "vanilla pods", "sugar"]
 ```

### Bonus:
*(the nefarious rival chef!)*   

Make a function called 'spoiled' that takes in the cremeBrulee object, and adds 'rotten' in front of all of the ingredients.

***
### *hints*

 First, how do we output all of the ingredients in cremeBrulee? Remember that cremeBrulee is just an object with keys that we can access.  

 For example, let's look at a much simpler object:

 ```javascript
   var catRecords = {
 		catOne: "Hulk",
 		catTwo: "Gary",
 		catThree: "Fifi"
 		allCats: ["Hulk", "Gary", "Fifi"]
 	  }
 ```

 To retrieve catOne in the catRecords we say `catRecords.catOne`.  

 `catRecords.catOne` returns:
 ```javascript
 "Fifi"
 ```

 `catRecords.catTwo` returns:
 ```javascript
 "Gary"
 ```

 `catRecords.catThree` returns:
 ```javascript
 "Hulk"
 ```

 `catRecords.allCats` returns:
 ```javascript
 ["Hulk", "Gary", "Fifi"]
 ```

 Notice that `catRecords.allCats` is actually an array.  That means we can use it like one too!

 so `catRecords.allCats[0]` will return the first element:

 ```javascript
 "Hulk"
 ```

 ...and because `catRecords.allCats` is an array, we can also add things to it!

 `catRecords.allCats.push('Lola')` adds 'Lola' to our allCats list:
 ```
 ["Hulk", "Gary", "Fifi", "Lola"]
 ```
***


## Objects in Arrays

Here are some recent FriendFace posts on your wall feed:

```javascript
var postOne = {user: "Tammy", message: "I did it!"}
var postTwo = {user: "Tom", message: "seriously?"}
var postThree = {user: "Zorro", message: "why don't people just get it!"}
var postFour = {user: "Jorge", message: "good day today"}
var postFive = {user: "Victoria", message: "yay!"}
var postSix = {user: "Bobo", message: "Last night was the most amazing afternoon"}
```

Create an array called `posts` and add the above posts to it.

It should look like this (should not include the variable names):

```javascript
 var posts = [
 			{ user: "Tammy", message: "I did it!" },
 			{ user: "Tom", message: "seriously?" },
 			{ user: "Zorro", message: "why don't people just get it!" },
 			{ user: "Jorge", message: "good day today" },
 			{ user: "Victoria", message: "yay!" },
 			{ user: "Bobo", message: "Last night was the most amazing afternoon" },
		]
```

Write code that does the following:

 1. Prints out all messages.

 2. Prints out all users.

 3. Prints out every odd indexed post in the array.

 4. Update user Bobo's message to have an `!` at the end of it.


## Objects in Arrays in Objects

Using the posts array that you made:

```javascript
 var posts = [
 			{ user: "Tammy", message: "I did it!" },
 			{ user: "Tom", message: "seriously?" },
 			{ user: "Zorro", message: "why don't people just get it!" },
 			{ user: "Jorge", message: "good day today" },
 			{ user: "Victoria", message: "yay!" },
 			{ user: "Bobo", message: "Last night was the most amazing afternoon!" },
		]
```

Write code that does the following:

1. Adds a new property to each posts called `friends` that is an array of every user except the user that the post belongs to.  *Do not re-write it manually!*

The first post should look like this:

```javascript
var posts = [
	 { user: "Tammy", message: "I did it!", friends: ["Tom", "Zorro", "Jorge", "Victoria", "Bobo"]},

	 . . .
	 ]
```





## Arrays in Objects in Arrays in Objects

Below is a recipe for minestrone soup:

```javascript
var minestroneSoup = {
	materials: [
		ingredients: [
			"olive oil",
			"vegetable stock",
			"onions",
			"celery",
			"salt",
			"pepper",
			"tomatoes",
			"garlic",
			"basil",
			"oregano",
			"carrots",
			"green beans",
			"kidney beans",
		],
		cookware: [
			"cooking pot",
			"cooking spoon",
		]
	],
	quantities: [
		{teaspoons: [
			{"olive oil": 5},
			{"salt": 1},
			{"pepper": 1},
			{"basil": 2},
			{"oregano": 2},
			{"garlic": 2}
		]},
		{cups: [
			{"vegetable stock": 2},
			{"kidney beans": 1},
			{"green beans": 1}
		]},
		{whole: [
			{"onions": 2},
			{"celery": 1},
			{"carrots": 2},
			{"tomatoes": 2}
		]},
	]
}
```

Write statements that do the following:

 1. Returns our Minestrone soup's ingredients.

 2. Returns our Minestrone soup's cookwares.

 3. Returns all of the quantities in our Minestrone soup.

 4. Returns all ingredients that are measured in teaspoons.

 5. Returns the first ingredient that is measured in whole pieces.

 6. Adds a new item in quantities under cups for 1 cup of elbowPasta.

Write code that does the following:

 1. Returns the first three ingredients that are measured in cups.

 2. Returns the total number of teaspoons in the recipe.


### Bonus:

Return each ingredient as a string with it's corresponding quantity and type i.e.

 ```javascript
 . . .

	"5 teaspoons of olive oil"
	"1 teaspoons of salt"
	"2 teaspoons of pepper"
. . .
 ```

## Mind-Bending Access

Print out company names and underneath print out all of the people who are employed there, with their titles.

```javascript
var crm = {
  people: [
    {
      id: 2,
      firstName: "Savannah",
      lastName: "Clementina",
      employments: []
    },
    {
      id: 3,
      firstName: "Elyse",
      lastName: "Jensen",
      employments: [ { companyId: 142, title: "Chief Communications Consultant" } ]
    },
    {
      id: 4,
      firstName: "Frieda",
      lastName: "Tess",
      employments: [ { companyId: 31, title: "Dynamic Data Specialist" } ]
    },
    {
      id: 6,
      firstName: "Elise",
      lastName: "Camylle",
      employments:
      [
        { companyId: 57, title: "Regional Applications Designer" },
        { companyId: 9, title: "Internal Mobility Executive" }
      ]
    },
    {
      id: 8,
      firstName: "Francis",
      lastName: "Arlo",
      employments: []
    },
    {
      id: 9,
      firstName: "Clementina",
      lastName: "Geraldine",
      employments:
      [
        { companyId: 6, title: "Direct Response Agent" },
        { companyId: 3, title: "Investor Metrics Officer" }
      ]
    },
    {
      id: 10,
      firstName: "Jeanie",
      lastName: "Annie",
      employments: [ ]
    },
    {
      id: 11,
      firstName: "Myra",
      lastName: "Sylvester",
      employments: [ { companyId: 57, title: "Direct Directives Officer" } ]
    },
    {
      id: 12,
      firstName: "Magdalen",
      lastName: "Wendy",
      employments:
      [
        { companyId: 9, title: "Product Operations Officer" },
        { companyId: 3, title: "Customer Paradigm Designer" }
      ]
    },
    {
      id: 16,
      firstName: "Eloisa",
      lastName: "Aubree",
      employments:
      [
        { companyId: 89, title: "Internal Configuration Producer" },
        { companyId: 31, title: "Regional Branding Administrator" }
      ]
    },
    {
      id: 17,
      firstName: "Rozella",
      lastName: "Walter",
      employments: []
    },
    {
      id: 18,
      firstName: "Brent",
      lastName: "Shannon",
      employments:
      [
        { companyId: 31, title: "District Implementation Developer" },
        { companyId: 57, title: "District Factors Designer" }
      ]
    },
    {
      id: 19,
      firstName: "Jaren",
      lastName: "Easter",
      employments:
      [
        { companyId: 142, title: "District Communications Director" }
      ]
    },
    {
      id: 20,
      firstName: "Jaqueline",
      lastName: "Genoveva",
      employments: []
    },
    {
      id: 22,
      firstName: "Darby",
      lastName: "Della",
      employments: [ { companyId: 57, title: "Principal Branding Strategist" } ]
    },
    {
      id: 27,
      firstName: "Jane",
      lastName: "Otto",
      employments: []
    },
  ],
  companies: {
    0: "Nicolas and Sons",
    57: "Mueller LLC",
    2: "Mohr, King and Gleason",
    3: "Grimes Inc",
    142: "Schmidt-Rolfson",
    5: "Shanahan, Altenwerth and Nikolaus",
    6: "Dickens, Blanda and Bosco",
    31: "Nikolaus Inc",
    89: "Rempel, Berge and Bogan",
    9: "Steuber, Wisozk and Gorczany"
  }
}
```

Expected output is:

```javascript
Nicolas and Sons
Mueller LLC
	Elise Camylle - Regional Applications Designer
	Myra Sylvester - Direct Directives Officer
	Brent Shannon - District Factors Designer
	Darby Della - Principal Branding Strategist
Mohr, King and Gleason
Grimes Inc
	Clementina Geraldine - Investor Metrics Officer
	Magdalen Wendy - Customer Paradigm Designer
Schmidt-Rolfson
	Elyse Jensen - Chief Communications Consultant
	Jaren Easter - District Communications Director
Shanahan, Altenwerth and Nikolaus
Dickens, Blanda and Bosco
	Clementina Geraldine - Direct Response Agent
Nikolaus Inc
	Frieda Tess - Dynamic Data Specialist
	Eloisa Aubree - Regional Branding Administrator
	Brent Shannon - District Implementation Developer
Rempel, Berge and Bogan
	Eloisa Aubree - Internal Configuration Producer
Steuber, Wisozk and Gorczany
	Elise Camylle - Internal Mobility Executive
	Magdalen Wendy - Product Operations Officer
```
