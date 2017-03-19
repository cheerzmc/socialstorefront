var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Sign in' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
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
