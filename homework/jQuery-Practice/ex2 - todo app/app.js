'use strict';
console.log("We are Loaded, Pffffft!");

// Grab the correct UL element for us to start something with
var eltodo = $('#todo');

// Event Handler for the form that I've created
$( "#todo-form" ).submit(function( event ) {
    event.preventDefault();
	
    //grab the input value 
	var newTask = $('#task').val();

    // we first want to create the <li> and add the input data to it

    var newLi = $('<li>');
    var input = $('<input type="checkbox" class="checker" value="ON">');
    var label = $('<label class="checkbox-inline">' + newTask + '</label>');

    // construct the whole li.
    newLi.append(input).fadeIn("slow").append(label);

    var formLi = $('#todo ul').append(newLi);

    input.on('click',function(event) {
        label.toggleClass('completed');

    $('#remove').on('click',function(event) {
        
        $('.completed').parent().fadeOut("slow");
    });


});

});