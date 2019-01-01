var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Request sent at: ' + Date.now());
});

module.exports = router;