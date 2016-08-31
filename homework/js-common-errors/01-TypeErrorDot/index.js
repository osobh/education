// INFO: A pending test is one that is started with xdescribe instead of describe
// To run those tests, open their file inside of the test folder and change it
// from xdescribe to describe

// A TypeError https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
// Is caused when you try to operate on the wrong type.

// One cause is if you try to reference a property on a value that is
// not an object

function getAddress () {
  var number = 1
  var person = {
				 name: "Danny",
				 address: { city: "Denver"}
				}
 
 if (person.address.city == "Denver") {
    return true
  } else {
    return false
  }
}

module.exports = getAddress
