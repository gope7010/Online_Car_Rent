var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('register/reg');
});

router.post('/', function(request, response){
	var user = {
		username: request.body.username,
		email: request.body.email,
		password: request.body.password
	};

	userModel.insertuser(user, function(status){
		
		if(status){
			response.redirect('/login/user');
		}else{
			response.redirect('/reg');
		}
	});
	
	
});

module.exports = router;


