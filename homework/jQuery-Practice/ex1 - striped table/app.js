'use strict';

console.log("We are Loaded, Pffffft!");

//First we want to select the div element that we will create the tables under
var elTable = $('table');    
var thead = elTable.append("<thead></thead>");
var tbody = elTable.append("<tbody></tbody>");
var tfoot = elTable.append("<tfoot></tfoot>");
var tr = $("<tr>");
tr.append("<td>").append("<td>").append("<td>");
var theadTableRows = $("thead").append("<tr></tr>");
var tBodyRows = $( "tbody").append( tr );

var theadTableRowsCount = 3;
// Use a Loop to generate the Table Head Elements
for(let i = 0 ; i < theadTableRowsCount ; i ++){
	$('thead tr').append("<th></th>");	
}

//Use a loop to generate the Table Body Rows
var theadBodyRowsCount = 5;
for(let i = 0 ; i < theadBodyRowsCount ; i ++){
	$('tbody').append("<tr></tr>");
}

//process submit
$( "#change-bg" ).submit(function( event ) {
    event.preventDefault();
	//color is the value that the user input
	var color = $('#bg-value').val();
	var cLower = color.toLowerCase();
 	$('tbody tr:even').css('background-color', cLower);

});