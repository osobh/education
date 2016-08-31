// Create a function mostLikely which compares two probabilities, returning true if the first one is most likely otherwise false.
// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.
// So:
// mostLikely('1:3','1:2') will return false as 1 in 3 is less likely than 1 in 2.

function mostLikely(p1,p2) {

var newP1 = p1.split(':');
var newP2 = p2.split(':');
var proB1 = (newP1[0] / newP1[1]);
var proB2 = (newP2[0] / newP2[1]);

if(proB1 > proB2){
	console.log("Probability P1 is more likely than P2");
	return true;
}	else {
	console.log("Probability P2 is more likely than P1");
	return false;
}
	
}

module.exports = {
  mostLikely: mostLikely,
  attendance: 'greenisforcompost'
};