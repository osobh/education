// include the fs module
var fs = require("fs");

fs.readFile("./example.txt", function(err, data) {
console.log(process.argv.slice(1));

  if (err) throw err;

  // what gets logged in each case?
  console.log(data);

  console.log(data.toString());
}); 