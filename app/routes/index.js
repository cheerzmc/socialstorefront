var express = require('express');
//var bodyParser = require('body-parser');
//var multer = require('multer');

var router = express.Router();

/* GET home page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Sign in' });
});

/* POST authentication */
router.post('/auth', function(req, res, next) {
  res.render('signin', { title: 'Sign in' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.params.id);

  res.render('index', { title: 'Home' });
});
router.get('/index', function(req, res, next) {
  console.log(req.params.id);
  res.render('index', { title: 'Home' });
});


/* GET console page. */
router.get('/console', function(req, res, next) {
  res.render('console', { title: 'Console' });
});

/* GET store management page. */
router.get('/store', function(req, res, next) {
  res.render('store', { title: 'Store Management' });
});


/* GET store console page. */
router.get('/store_console', function(req, res, next) {
  res.render('store_console', { title: 'Item Management' });
});

module.exports = router;
