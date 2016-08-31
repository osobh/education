"use strict"
// Global game parameters. These will be set based on the form input.
// They should be set in readQueryParams.
var GLOBALS = {};

// Global references to DOM elements
// These will get initialized when window.onload is called
var scoreBoard;
var gameStartButton;
var gameCurrentlyActive;

//
// Main entry point:
// Read the input paramaters,
// Build the Mole Field of Dreams
// Start the game
//
window.onload = function(){
    
    // Read and save the query parameters from your form 
    // HINT: Finish, then call the function readQueryParams 
    /* YOUR CODE HERE */
    readQueryParams();
    // Create the mole field 
    // HINT: Finish, then call the function createMoleField 
    /* YOUR CODE HERE */
    createMoleField();
    // Get the score-board dom element, and save it into 
    // our global variable scoreBoard
    /* YOUR CODE HERE */
    scoreBoard = document.getElementById("score-board");
    // Get the game-starter button dom element and save it
    // into our global variable gameStartButton
    /* YOUR CODE HERE */
    gameStartButton = document.getElementById("game-starter");
    // Add an event listener to the gameStartButton. 
    // It should call the startGame function when the 
    // 'click' event is triggered
    /* YOUR CODE HERE */
    document.getElementById("game-starter").addEventListener("click", startGame);

};

// Examine document.location.search and extract the info 
// from our form. Store each key/value pair as a property in GLOBALS.
// GLOBALS should have number values from the form for each of these
// keys:
//   MOLE_UP_MIN (in seconds)
//   MOLE_UP_MAX (in seconds)
//   NUMBER_OF_ROUNDS
//   MOLES_PER_ROUND
//   ROUND_COOLDOWN (in seconds)
function readQueryParams() {

    var search = document.location.search;

    var args = search.substring(1).split('&');

    var argsParsed = {};

    var i, arg, kvp, key, value;

    for (i=0; i < args.length; i++) {

        arg = args[i];

        if (-1 === arg.indexOf('=')) {

            argsParsed[decodeURIComponent(arg).trim()] = true;
        }
        else {

            kvp = arg.split('=');

            key = decodeURIComponent(kvp[0]).trim();

            value = decodeURIComponent(kvp[1]).trim();

            argsParsed[key] = value;
        }
    }
    GLOBALS = argsParsed;
    return GLOBALS;
}

// Create and insert a 3x3 HTML table.
// Use createSingleMoleHole() to create the <td> elements
function createMoleField() {
let moleField = document.createElement("table");
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr");
        for (let i = 0; i < 3; i++) {
            let newHole = createSingleMoleHole();
            row.innerHTML += newHole;
        }
        moleField.appendChild(row);
    }
    document.getElementById("mole-field").appendChild(moleField);
}


// Create a complex HTML snippet and return it. 
// The element returned from this function should look exactly like this
// <td><div data-hole-occupied="false" class="mole-hole"></div></td>
function createSingleMoleHole() {
    return `<td><div data-hole-occupied=false class="mole-hole"></div></td>`;
}

///
/// Game logic for rounds and restarting.
///
/// YOU WILL NOT NEED TO EDIT CODE BELOW THIS POINT
///

/**
 * Reset the score and start round 0
 */
function startGame() {
    // Make sure a game isn't already in progress before starting a game
    // set the game to be in progress if its not.
    if(gameCurrentlyActive){
        return;
    }
    else {
        gameCurrentlyActive = true;    
    }

    // Set the scoreboard back to zero
    
    scoreBoard.setAttribute('data-score', 0);
    scoreBoard.innerHTML = 0;

    // Hide the 
    gameStartButton.style.visibility = "hidden";
    initiateRound(0);
}

/**
* Use a closure and the event loop to act every ROUND_COOLDOWN seconds
*/
function initiateRound(roundNumber) {

    // Closing over roundNumber in this context is confusing - but important.

    // Without access to the environment variable roundNumber the rounds would not advance properly.
    // It's recursive, but also in an anonymous function, sent on "timeout", 
    // only to return after ROUND_COOLDOWN seconds. 
    var closureFunction = function() {

        if(roundNumber < parseInt(GLOBALS.NUMBER_OF_ROUNDS)) {

            // Create the moles 
            for(var i = 0; i < parseInt(GLOBALS.MOLES_PER_ROUND); i++) {
                new Mole(parseInt(GLOBALS.MOLE_UP_MIN)*1000, parseInt(GLOBALS.MOLE_UP_MAX)*1000);
            }

            // Next round, using our precious closed-over parameter 
            initiateRound(roundNumber + 1);
        }
        else {
            endGame();
        }
    };

    // Set it and forget it.
    setTimeout(closureFunction, GLOBALS.ROUND_COOLDOWN * 1000);
}

/**
 * When we're sure the last moles are done, let the user try again
 */
function endGame() {

    var maxTimeUp = GLOBALS.MOLE_ANIMATE_TIME + GLOBALS.MOLE_UP_MAX;

    // Wait a little while after final round, then put the 
    // gameStartButton back on the screen.
    setTimeout(function(){
        gameStartButton.style.visibility = "visible";
    }, maxTimeUp * 1000);
}
