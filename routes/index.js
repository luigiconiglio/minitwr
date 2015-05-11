var express = require('express');
var router = express.Router();
//For our small database
var fs = require('fs');

/* Load the tweets */
var tweetsPath = 'public/tweets/tweets.json'
var tweets = JSON.parse(fs.readFileSync(tweetsPath, 'utf8'));


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'MiniTWR', tweets: tweets})
});

/* POST tweet. */
router.post('/', function(req, res, next) {
	var time = new Date();
	tweets.push({Message:req.body.message, When: time.toDateString(), Nick: req.body.nick});
	console.log(req.body);
	fs.writeFile(tweetsPath, JSON.stringify(tweets), function (err) {
												if (err)
												console.log('Tweet NOT stored!');
											});
	res.redirect('/');
});

module.exports = router;
