var express = require('express');
var router = express.Router();

// passes route id/id # where id # is 5 digits long
router.get('/:id([0-9]{5})', function(req, res){
    console.log('Request sent at: '+ Date.now());
    res.send('The id you specified is ' + req.params.id);
});

//export this router to use in our index.js
module.exports = router;