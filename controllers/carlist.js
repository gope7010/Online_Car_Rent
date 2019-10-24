var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();


router.get('/', function(request, response){
	response.render("newcar/carlist");
});
router.post('/carlist', function(request, response){

	var user = {
		username: request.body.username,
		password: request.body.password,
	};

	userModel.insertuser(user, function(status){
		
		if(status){
			response.redirect('/home');
		}else{
			response.redirect('/user/adduser');
		}
	});
	
});

router.get('/addadmin', function(request, response){
	response.render("user/addadmin");
});
router.post('/addadmin', function(request, response){

	var user = {
		username: request.body.username,
		password: request.body.password,
	};

	userModel.insertadmin(user, function(status){
		
		if(status){
			response.redirect('/home');
		}else{
			response.redirect('/user/addadmin');
		}
	});
	
});



router.get('/userList', function(request, response){
		
		userModel.getAll(function(results){
			response.render('user/index', {users: results});		
		});	
});

router.get('/edit/:id', function(request, response){

	userModel.getById(request.params.id, function(result){
		response.render('user/edit', result);
	});
	
});

router.post('/edit/:id', function(request, response){

	var user = {
		username: request.body.username,
		password: request.body.password,
		id: request.params.id
	};

	userModel.update(user, function(status){
		
		if(status){
			response.redirect('/user/userlist');
		}else{
			response.redirect('/user/edit/'+request.params.id);
		}
	});
	
});

router.get('/delete/:id', function(request, response){

	userModel.getById(sql, function(result){
		response.render("user/delete", {user: result[0]});
	})
});

router.post('/delete/:id', function(request, response){

	userModel.delete(sql, function(status){	
		if(status){
			response.redirect("/user/userList");
		}else{
			response.redirect("/user/delete/"+request.params.id);	
		}
	})
});

router.get('/details/:id', function(request, response){

	userModel.getById(request.params.id, function(result){
		response.render("user/details", result);
	})
});

module.exports = router;



