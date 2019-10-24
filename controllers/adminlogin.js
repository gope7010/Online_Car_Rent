var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/adminlogin', function(request, response){
	response.render('login/adminlogin');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

	userModel.validateadmin(user, function(status){
		if(status){
			response.cookie('username', request.body.username);
			response.redirect('/adminhome/index');
		}else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;


