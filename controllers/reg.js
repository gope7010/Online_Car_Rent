var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('register/reg');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};
	
	
});

module.exports = router;


