'use strict'
//setup globalVariables
var paintBrush = null;


//Adding in the GameBoard
//Looping through and creating all the child div's
for( let i = 0 ; i < 900; i++){
	$('#gameboard').append('<div class="gamediv"></div>');
}

//Setting up the event handler for paintBrush so that if it clicks on a  divs it will assign it the color
$('.gamediv').on("click",(function(){ 
	$(this).css("background", paintBrush);
}));

//setting up the event handler for the paintbrush so click will assign the color to it
// newBrush = $('.colordiv').on("click",(function(){ 
// 	$(this).css("background","");
// }));

//Adding in the color Palette
var palColors = 180;
for( let i = 0 ; i < palColors; i++){
	//Randomized color creator
	let colorMixer = "#" + Math.random().toString(16).slice(2, 8);
	
	//each loop creates a div
	$('#colorPalette').append('<div id=' + i + ' class="colordiv"></div>');
	//with each loop we add css the the div with a random color
	$('#'+i).css("background",`${colorMixer}`);
	$('#'+i).on('click', function(evt) {
		var newSwatch = $(this).css("background");
		paintBrush = newSwatch;
		console.log(paintBrush);
	})

	
}


