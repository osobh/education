var express = require('express'),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require('method-override'),
  db = require("./models"),
  morgan = require("morgan");

app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.route('/icecreams')
.get(function(req,res){
  db.Icecream.find({},function(error,response){
    res.json(response);
  });
})
.post(function(req, res) {
  db.Icecream.create(req.body, function(error, icecream) {
    if (error) return res.json({error: error.message});
    if (icecream && !icecream.imageUrl) {
      icecream.imageUrl = "http://www.purpledooricecream.com/content/images/mystery-icecream_website(1).jpg";
      icecream.save();
    }
    res.json({ message: 'Ice-cream created!' });
  });
});

apiRouter.route('/icecreams/:icecreamId')
.get(function(req,res){
  db.Icecream.findById(req.params.icecreamId,function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error finding that ice-cream!", error: error});
    res.json(icecream);
  });
})
.put(function(req,res){
  db.Icecream.findByIdAndUpdate(req.params.icecreamId, req.body, function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error!", error: error});
    if (icecream && !icecream.imageUrl) {
      icecream.imageUrl = "http://www.purpledooricecream.com/content/images/mystery-icecream_website(1).jpg";
      icecream.save();
    }
    res.json({ message: 'Ice-cream updated!' });
  });
})
.delete(function(req,res){
  db.Icecream.findById(req.params.icecreamId, function(error,icecream){
    if (error) return res.json({message: "Sorry, there was an error finding that ice-cream!", error: error});
    icecream.remove();
    res.json({ message: 'Ice-cream successfully deleted' });
  });
}); 

app.get('/', function(req, res) {
  res.render('index.ejs');
});

var PORT = 3001;

app.listen(PORT, function() {
  console.log("Listening on localhost:", PORT); 
});