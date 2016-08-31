var fs  = require("fs");
var mapper = fs.readFileSync("data/map-07.txt").toString();
var mapperArray = mapper.split("\n");
coorX = 0;
coorY = 0;

for( var i = 0 ; i < mapperArray.length ; i++){
	// console.log(mapperArray[i], "foo")
	var currentLine = mapperArray[i];
	for(var j = 0; j < currentLine.length ; j++){
		//console.log(currentLine[j]);
		if (currentLine[j] === "X"){
			coorX = j -1;
			coorY = -(i - 1);
			console.log("[ " + coorX + " , " + coorY + " ] ")
			}
	}
		
	}
