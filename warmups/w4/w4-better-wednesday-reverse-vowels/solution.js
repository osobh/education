function reverseVowels (s) {
    var vowels = {'a':1, 'e':1,'i':1,'o':1,'u':1};
    var found = [];
        
    // Compare case insensitive
    var lowerCase = s.toLowerCase();
    var strArray = lowerCase.split('');

    // Finds vowels in order
    for(var i = 0; i < strArray.length; i++) {
        var currentChar = strArray[i];

        if(vowels[currentChar]) {
            found.push(s[i]); // Original casing
        }
    }

    // Swapping vowel orders
    var strBuilder = '';
    for(var j = 0; j < s.length; j++) {
        var currentChar = strArray[j];

        if(vowels[currentChar]) {
            strBuilder += found.pop();
        }
        else {
            strBuilder += s[j]; // Original casing
        }
    }

    return  strBuilder;
}

module.exports = {
  reverseVowels: reverseVowels,
  attendance: 'Word up'
};