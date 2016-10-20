var express = require('express');
var ctrl = express.Router();

/* GET home page. */
ctrl.get('/', function(req, res, next) {
  res.render('index', { title: 'Elite Users DB' });
});

// get our users
ctrl.get('/view', function(req, res, next) {
	res.render('users', {title: 'AJAX'});
});

module.exports = ctrl;
