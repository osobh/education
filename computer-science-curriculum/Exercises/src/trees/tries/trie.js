/*
  A Trie represents any node in a Trie, including the root.

  Each Trie has an Object of children characters, mapping a each
  character to another Trie. A Trie also encodes whether or not
  this node in the Trie represents a word.

  @param {boolean} isWord - a boolean which should only be true if this node is a word.
  @param {string} character - the character this node represents
*/
function Trie (isWord, character){
  this.characters = {};
  this.isWord = isWord || null;
  this.character = character || '';
}

/*
  Given a word add the word to the Trie. This function is recursive and
  uses an index value in order to track where in word we are as we traverse
  the trie. For example learn('hello', 1) represents the process of learning
  the 'e' in 'hello'.

  @param {string} word - the word being added to the trie
  @param {integer} index - the index of the current character in word. If index
                           is undefined it is set to 0.
  @return undefined
*/
Trie.prototype.learn = function(word, index){
  // This function should add the given word,
  // starting from the given index,
  // to this Trie.

  // It will be recursive.  It will tell
  // the correct child of this Trie to learn the word
  // starting from a later index.

  // Consider what the learn function should do
  // when it reaches the end of the word?
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words,
  // so that the words can be reconstructed later.

};

/*
  Returns all the words a particular Trie contains. A Trie can be a root, leaf
  or interal node in a Trie. This is a recrusive function.

  @param {Array} words - An array of strings representing the known words. If undefined,
                         it is assumed 'this' is the root node of a trie, and so words
                         should be set to an empty array.

  @param {string} currentWord - A string representing the current traversal. If undefined
                                'this' is assumed to be the root node of a trie, and so
                                currentWord is set to the empty string.

  @returns {Array} - an array of strings. Each string represents a valid word in the
                     Trie.
*/
Trie.prototype.getWords = function(words, currentWord){
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.

};

/*
  Given a word return true if that word is in the trie, and false otherwise.
  This recursive function searches a trie looking for a given word.

  @param {string} word - the word being added to the trie
  @param {integer} index - the index of the current character in word. If index
                           is undefined it is set to 0.

  @return {Trie} - the Trie representing the passed in word, or undefined if
                   the word passed in is not a member of this Trie.
*/
Trie.prototype.find = function(word, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.

  // Be sure to consider what happens if the word is not in this Trie.

};

/*
  Given a prefix (a string of characters) return all the words that can
  be built using that prefix. For example, 'tr' is a prefix of 'trie' and 'try'.

  Hint: This function can be built by using Trie.find and Trie.getWords...

  @param {string} prefix - a string representing a prefix.

  @returns {Array} - a list of strings representing all the valid words using
                     the passed in prefix. All of these words must start with
                     the passed in prefix.
*/
Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions
  // for a given prefix.
  // It should use find and getWords.

};

module.exports = Trie;
