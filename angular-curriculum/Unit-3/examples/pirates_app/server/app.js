const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const pirates = require('./routes/pirates');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('tiny'));

app.use('/javascripts', express.static(__dirname + "/../client/javascripts"));
app.use('/stylesheets', express.static(__dirname + "/../client/stylesheets"));
app.use('/views', express.static(__dirname + "/../client/views"));

app.use('/api/pirates', pirates);

app.get('*', function(req, res) {
  res.sendFile('layout.html', {root: './client/views'});
});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});
