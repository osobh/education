// TDD development by writing your own tests!

// In a simple memory game (http://en.wikipedia.org/wiki/Concentration_(game)) 
// we need an array containing tiles represented by integers in pairs.

// Memory games basics

// In the memory game, numbers are randomly placed face-down in a grid. 
// Each turn, the player chooses a number to peek at, and then replace, 
// face down. If they choose two of the same number in a row, those 
// numbers are removed from the grid. The aim is to clear the board!

// Your job is to produce an array of pairs of numbers, placed in a 
// random spot in the array.

// The array (and result) could look somthing like:

// [3,1,2,1,3,2,4,4]

// for an 8 tile memory game. (4 pairs). createTiles(8)

// Your task is to implement the function createTiles(n) where n is 
// the number of tiles. The function should return an array with the 
// length n containing randomized, paired, integers starting with 1. 
// Duplicate pairs are not allowed.

// Special cases:

// if n is odd or zero, an empty array should be returned


function createTiles(n){
var results = [];

//First loop to take in "n" input and generate a random array of whole numbers
for ( var i = 1; i<=n/2; i++ ) {
    var randoms = Math.floor(Math.random() * n);
    results.push(randoms, randoms);
}
//Here we take the final generated array and shuffle it

var currentIndex = results.length, temporaryValue, randomIndex ;
// While there remain elements to dshuffle...
  while (0 !== currentIndex) {
    
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = results[currentIndex];
    results[currentIndex] = results[randomIndex];
    results[randomIndex] = temporaryValue;
  }

return results

}
module.exports = {
 createTiles,
 attendance: "tebmethod" 
}