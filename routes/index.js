var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Fetch a picture from NASA's Astronomy Picture of the Day service */
router.get('/fetchpicture', function (req, res, next) {

  if (req.query.picturetype === 'random') {
    res.send('todo: get random picture');
  }
  else {
    //default is today's picture
      res.send('todo: get today\'s picture');
  }

});

module.exports = router;
