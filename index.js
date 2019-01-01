var express = require('Express')
var app = express();

var things = require('./things');
var id = require('./id');
var date = require('./date');

//both index.js and things.js should be in same directory
app.use('/things', things);
app.use('/id', id);
app.use('/date', date);

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);