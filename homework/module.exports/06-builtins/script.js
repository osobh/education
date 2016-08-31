var showdown = require('showdown');
var querystring = require('querystring');
var date = require('./date');

var converter = new showdown.Converter();
var text = '#hello, markdown!';
var html = converter.makeHtml(text);


var query = 'foo=bar&baz=qux&baz=quux&corge';
var parsedQuery = querystring.parse(query);

console.log(date);