//Starting Books loop
console.log("\n");
console.log("** Books Loop **");
console.log("--------------------------------------------------------");
var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];
console.log("'" + books[0] + "'");
console.log("'" + books[2] + "'");
console.log("--------------------------------------------------------");
console.log("\n");

// Starting songs loop
console.log("** Songs Loop **");
console.log("--------------------------------------------------------");
var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"];
for (var i = 0 ; i < songs.length ; i++){
	console.log("'" + songs[i] + "'" );
}
console.log("--------------------------------------------------------");
console.log("\n");


// Starting Cars and Riders
console.log("** Array Access **");
console.log("--------------------------------------------------------");
var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"];
var riders = ["Kelly", "Steve", "Georgio", "Fabio"]

for (var i = 0 ; i < cars.length ; i++){
	console.log("'" + riders[i] + " drives a " + cars[i] + "'");
}
console.log("--------------------------------------------------------");
console.log("\n");

// Nested Array Access
console.log("** Nested Array Access **");
console.log("--------------------------------------------------------");
var trilogies = [
    ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
    ["The Empire Strikes Back","Return of the Jedi","A New Hope"],
    ["Back to the Future", "Back to the Future II", "Back to the Future III"],
    ["The Hunger Games", "Catching Fire", "Mockingjay"],
    ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
    ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
    ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe","Life, the Universe and Everything","So Long, and Thanks for All the Fish","Mostly Harmless","And Another Thing..."]
]
console.log("** Printing All Movies **");
console.log("--------------------------------------------------------");
for(var i =0 ; i < trilogies.length ; i++){
	for(var j = 0 ; j < trilogies[i].length ; j++){
	console.log(trilogies[i][j]);
}
}
console.log("--------------------------------------------------------");
console.log("** Printing The Last Movie **");
console.log("--------------------------------------------------------");
for(var i =0 ; i < trilogies.length ; i++){
	console.log(trilogies[i][trilogies[i].length-1]);
}
console.log("--------------------------------------------------------");
console.log("** Printing The First Movie **");
console.log("--------------------------------------------------------");
for(var i =0 ; i < trilogies.length ; i++){
	console.log(trilogies[i][0]);
}
console.log("--------------------------------------------------------");
console.log("** Printing The Odd Numbered Movies **");
console.log("--------------------------------------------------------");
for(var i =0 ; i < trilogies.length ; i++){
	for(var j = 0 ; j < trilogies[i].length ; j++){
		if(j % 2 == 0){
		console.log(trilogies[i][j]);
}
}
}
console.log("\n");


// Object Access
console.log("** Object Access**");
console.log("--------------------------------------------------------");
var user = {
    name : "Jenny	",
    phone : "555-656-2323",
    email: "j.appleseedappleseedanddaughters.com",
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
function emailChecker(user){
	if(user.email.includes('@') ){
		return true;
	} else {
		return false;
	}
	
}
console.log("emailChecker returns " + emailChecker(user2));

function phoneChecker(user){

	var phoneSplit = user.phone.split("-");
	
	if(phoneSplit[0].length === 3 && phoneSplit[1].length === 3 && phoneSplit[2].length === 4){
		return true;
	}
}
console.log("phoneChecker returns " + phoneChecker(user));

function nameChecker(user){

	var nameSplit = user.name.split(" ");
	console.log(nameSplit.length);
	if(nameSplit.length > 1 ){
		
		return true;
	} else {
		return false;
	}
}
console.log("nameChecker returns " + nameChecker(user));

console.log("\n");	
// Go Fish
console.log("** Go Fish**");
console.log("--------------------------------------------------------");

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
function goFish(hand){
for (var key in hand) {
  if(key.indexOf(3) === 0){
  	delete hand[key]
  }else{

  }
}
console.log(hand);
}
goFish();

console.log("\n");	

// Nested Object Access
console.log("** Nested Object Access**");
console.log("--------------------------------------------------------");

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
console.log(library["city"]);
console.log(library["name"]);
console.log(library["bestBook"]);
console.log(library["bestBook"]["title"]);
console.log(library["bestBook"]["company"]["name"]);
console.log(library["bestBook"]["company"]["employees"]["publisher"]);

console.log("\n");

// Arrays in Objects
console.log("** Arrays in Objects**");
console.log("--------------------------------------------------------");

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

console.log(cremeBrulee["ingredients"])
console.log(cremeBrulee["cookware"])
console.log(cremeBrulee.ingredients[0])
console.log(cremeBrulee.cookware[2])
console.log(cremeBrulee.ingredients.push("Sugar"))
cremeBrulee.ingredients[0]="egg yolks"

console.log("**Bonus**");
console.log("--------------------------------------------------------");

function spoiled(food){
	var currentArr = food.ingredients
	for (var key in currentArr) {
  		console.log(key);
  		console.log(currentArr[key]);
  	}
}
spoiled(cremeBrulee);

console.log("\n");	

// Objects in Arrays
console.log("** Objects in Arrays **");
console.log("--------------------------------------------------------");

var postOne = {user: "Tammy", message: "I did it!"}
var postTwo = {user: "Tom", message: "seriously?"}
var postThree = {user: "Zorro", message: "why don't people just get it!"}
var postFour = {user: "Jorge", message: "good day today"}
var postFive = {user: "Victoria", message: "yay!"}
var postSix = {user: "Bobo", message: "Last night was the most amazing afternoon"}

//pushing objects into an array
var posts = [];
posts.push(postOne, postTwo, postThree, postFour, postFive, postSix);

//looping through object in an array and pulling out the messages
for(var key in posts){
	console.log(posts[key]["message"]);
}

//looping through object in an array and pulling out every odd indexed post array
for(var key in posts){
	console.log(posts[key]["user"]);
}

for( var i = 0 ; i < posts.length; i++){
	if( i  % 2 == 1 ){
		console.log(posts[i]);
	}
}
// looping through the objects in an array and finding the user "Bobo" and adding an exclamation to his message.
for(var i = 0 ; i < posts.length ; i++){

	// console.log(posts[i].user);
	if(posts[i].user == "Bobo"){
	console.log(posts[i].message + " !")
	}
}

console.log("\n");	

// Objects in Arrays in Objects
console.log("** Objects in Arrays in Objects **");
console.log("--------------------------------------------------------");

for( var i = 0 ; i < posts.length ; i ++){
	//setting up the new friends array
	 friendsArr = [];
	 for(j = 0 ; j < posts.length ; j++){
	 	if(posts[j].user != posts[i].user){
	 		friendsArr.push(posts[j].user)
	 	}
	 }
	posts[i].friends = friendsArr;
	//console.log(posts[i].friends);
	console.log(posts[i]);
	
} 
       
console.log("\n");	

// Objects in Arrays in Objects
console.log("** Arrays in Objects in Arrays in Objects **");
console.log("--------------------------------------------------------");

var minestroneSoup = {
    materials: [
        { ingredients: [
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
        ] },
        { cookware: [
            "cooking pot",
            "cooking spoon",
        ] }
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

//return minestrone soups ingredients

console.log(minestroneSoup.materials[0]);

//return minestrone soups cookwares

console.log(minestroneSoup.materials[1]);

//return moinestrone soup quantities
console.log(minestroneSoup.quantities);

//return minestrons soup quantities measured in teaspoons
console.log(minestroneSoup.quantities[0]);

//return minestrons soup quantities measured in whole
console.log(minestroneSoup.quantities[2]);

//add in one cup of elbow pasta to  quantities
var pasta={};
pasta["elbow pasta"] = 1;
console.log(pasta);
minestroneSoup.quantities[1].cups.push(pasta);
console.log(minestroneSoup.quantities[1].cups);

//Returns the first three ingredients that are measured in cups.
for(var i = 0 ; i < ingreeds.length ; i++){
	var currentIngredient = ingreeds[i];
	for(var j = 0 ; j < cups.length ; j++){
		var currentCup = cups[j];
		for(var key in currentCup){
		var currentVeggie = key;
		if(currentIngredient != currentVeggie){
			console.log("not equal");
		}else{
			console.log(currentVeggie);
			}
	
		}
	}
}

// returning the total teaspoons 
var teaspoons = minestroneSoup.quantities[0].teaspoons;
var count = 0;
for(var i = 0 ; i < teaspoons.length ; i++){
	currentT = teaspoons[i];
	for(var key in currentT){
	totalT = currentT[key];
	//console.log(totalT);
	}
	count = count + totalT;
}
console.log(count);

console.log("\n");	

// Mind bending Access
console.log("** Mind Bending Access **");
console.log("--------------------------------------------------------");
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
};

var people = crm.people;
var companies = crm.companies;
for(var key in companies){
	console.log(companies[key]);
	
}
for(var i = 0 ; i < people.length ; i++){
	for(var key in people[i].employments){
		if(people[i].employments !== 0){
		console.log(people[i].employments);	
	} else{
		console.log("There are no jobs here");
	}
	}
}
