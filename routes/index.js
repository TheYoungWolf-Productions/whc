var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET Sign In page */ 
router.get('/signin', (req, res) => {
  res.render('signin.html')
})

/* GET Sign In page */ 
router.get('/signup', (req, res) => {
  res.render('signup.html')
})

/* GET Web hosting */ 
router.get('/web-hosting', (req, res) => {
  res.render('web-hosting.html')
})

module.exports = router;
