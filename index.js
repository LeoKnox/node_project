var express = require('Express')
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/form', function(req, res) {
    res.render('form');
});

app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// form-urlencoded

var things = require('./things');
var id = require('./id');
var date = require('./date');

//both index.js and things.js should be in same directory
app.use('/things', things);
app.use('/id', id);
app.use('/date', date);
app.get('/param/:name', function(req, res){
    res.render('id_view', {
        name: req.params.name
    });
});
app.get('/first_view', function(req, res){
    res.render('first_view');
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);