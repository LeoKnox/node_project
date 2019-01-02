var express = require('express');
var router = express.Router();

router.set('view engine', 'pug');
router.set('views','./views');

// pass name data through route
router.get('/:name', function(req, res){
    res.render('id_view', {
        name: req.params.name
    });
});