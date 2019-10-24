var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/adminlogin', function(request, response){
	response.render('login/index');
});

router.post('/adminlogin', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

	userModel.validateadmin(user, function(status){
		if(status){
			response.cookie('username', request.body.username);
			response.redirect('/adminhome');
		}else{
			response.send('invalid username/password');		
		}
	});

});

router.get('/userlogin', function(request, response){
	response.render('login/index');
});

router.post('/userlogin', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

	userModel.validateuser(user, function(status){
		if(status){
			response.cookie('username', request.body.username);
			response.render('/user/index');
		}else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;


