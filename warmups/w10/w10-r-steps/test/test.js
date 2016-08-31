var expect = require('chai').expect;
var wordStep = require('../prompt').wordStep;


describe('wordStep function', function() {
  it('should return a matrix of awesomeness with a few words', function() {
    var longStr = 'SNAKES SHOE EFFORT TRUMP POTATO'
    expect(wordStep(longStr)).to.deep.equal(
      [['S','N','A','K','E','S',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
       [' ',' ',' ',' ',' ','H',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
       [' ',' ',' ',' ',' ','O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
       [' ',' ',' ',' ',' ','E','F','F','O','R','T',' ',' ',' ',' ',' '],
       [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','R',' ',' ',' ',' ',' '],
       [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','U',' ',' ',' ',' ',' '],
       [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','M',' ',' ',' ',' ',' '],
       [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','P','O','T','A','T','O']]
      );
     });

  it('should return a matrix of awesomeness with more words', function() {
    var longStr = 'WORDS STILL LINK KINDLY YEAR REGULAR'
    expect(wordStep(longStr)).to.deep.equal(
      [ [ 'W', 'O', 'R', 'D', 'S', ' ', ' ', ' ', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', 'T', ' ', ' ', ' ', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', 'L', ' ', ' ', ' ', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', 'L', 'I', 'N', 'K', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'I', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'N', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'D', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'L', ' ', ' ', ' ' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Y', 'E', 'A', 'R' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'U' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'L' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'A' ],
        [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R' ] ]
      );

  });


});