var fizzB = "";
for( var i = 0 ; i <= 100 ; i++){
	fizzB++;
	if( fizzB % 15 === 0 ){
		console.log("FizzBuzz");
	}else if (fizzB % 3 === 0){
		console.log("Fizz");
	}else if (fizzB % 5 === 0){
		console.log("Buzz");
	}else{
		console.log(fizzB);
	}
	
}