var express = require('express');
var router = express.Router();
//For our small databases
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'MiniTWR' });
});

/* POST tweet. */
router.post('/', function(req, res, next) {
	
});

module.exports = router;
