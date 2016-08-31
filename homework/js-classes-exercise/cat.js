var Cat = function(tiredness, hunger, happiness, lonliness){
	this.tiredness = tiredness || 10;
	this.hunger = hunger || 10;
	this.lonliness = lonliness || 10;
	this.happiness = happiness || 10;
};

Cat.prototype.feed = function(bags){
	// We use the bag number to help determine how much to feed the cat.
	// We use the hunger amount to determine wether or not to feed the cat.
	//console.log("This is the cats current Hunger "+ this.hunger);
	//console.log("These are the current bags being fed: "+ bags);
	console.log("You feed the cat: ")
	console.log("\n")
	if(this.hunger >= bags){
		console.log("OMG, Kitty is starving!!! ");
		console.log("NOM NOM, Kitty eats all the bags");
		this.hunger -= bags;
		//console.log("After eating, Cats New Hunger Number is " + this.hunger);
		if(this.hunger < 5){
			console.log("Cat is still hungry, amazing huh? please the cat some more..");
		}else{
			console.log("Cat is Not hungry, The bags satisfied its hunger...");
		}
		console.log("\n");
	} else if (this.hunger < bags){
		console.log("Hunger is less than the bags, ");
		console.log("Cat Walks Away ");
		console.log("\n");
	}

};

Cat.prototype.sleep = function(hours){
	console.log("You feed the cat: ")
	console.log("\n")
	if(this.sleep >= hours){
		console.log("OMG, Kitty is sleepy!!! ");
		console.log("nap nap, Kitty sleeps");
		this.sleep -= naps;
		//console.log("After eating, Cats New Hunger Number is " + this.hunger);
		if(this.sleep < 5){
			console.log("Cat is still sleepy amazing huh? please let the cat sleep some more..");
		}else{
			console.log("Cat is Not sleepy, The hours of sleep have satisfied its tiredness");
		}
		console.log("\n");
	} else if (this.sleep < naps){
		console.log(" Cat is not so tired..");
		console.log("Cat Walks Away ");
		console.log("\n");
	}
};

Cat.prototype.pet = function(strokes){
	console.log("You pet the cat: ")
	console.log("\n")
	if(this.happiness >= strokes){
		console.log("OMG, Kitty is soooo Happy!!! ");
		console.log("Purrrrrrrr kitty is happy!");
		this.happiness -= strokes;
		//console.log("After eating, Cats New Hunger Number is " + this.hunger);
		if(this.happiness < 5){
			console.log("Cat is still hungry, amazing huh? please the cat some more..");
		}else{
			console.log("Cat is Not hungry, The bags satisfied its hunger...");
		}
		console.log("\n");
	} else if (this.happiness < strokes){
		console.log("Hunger is less than the bags, ");
		console.log("Cat Walks Away ");
		console.log("\n");
	}
};

Cat.prototype.isolate = function(kicks){
	console.log("You feed the cat: ")
	console.log("\n")
	if(this.lonliness >= kicks){
		console.log("OMG, Kitty is is not feeling good!!! ");
		console.log("Skrreeee kitty needs to get away");
		this.lonliness -= kicks;
		//console.log("After eating, Cats New Hunger Number is " + this.hunger);
		if(this.lonliness < 5){
			console.log("Cat is still lonely...");
		}else{
			console.log("Cat is happy not being kicked and runs away");
		}
		console.log("\n");
	} else if (this.lonliness< kicks){
		console.log("lonliness is so great no need to kick");
		console.log("Cat flys away");
		console.log("\n");
	}
};

//Function for creating Random Hunger
function hunger(){
	return Math.floor((Math.random() * 10) + 1);
}

function feeder(){
	return Math.floor((Math.random() * 10) + 1);
}

var skye = new Cat(10,hunger(),10,10);
skye.feed(5);
