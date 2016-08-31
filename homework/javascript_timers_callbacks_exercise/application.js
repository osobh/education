// Finish these functions. You may need to add parameters
// as well as function bodies. 

// Refer back to the readme.md for descriptions of the 
// function behavior!

function liftoff(){
	var counter = 10;
	setTimeout(blastOff, 10);
	//after 10ms blastOff is called
		function blastOff(){
			if(counter > 0){
				counter --;
				console.log("tick");
				setTimeout(blastOff, 100);
			} else if(counter === 0){
				console.log("liftOff!");
			  }
		}
}

function each(array, function(element)) {
	for(var i = 0 ; i < array.length ; i++){
		console.log(element);
	}

}

function transform(array, function(element)) {
	var newArr=[];
	for(var i = 0 ; i < array.length ; i++){
		var newItem = adding(arr[i]);
		newArr.push(newItem);
	}
	return newArr;

}

//BONUS
function filter() {
    
}