var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();




router.get('/', function(request, response){
		
		userModel.getAllcar(function(results){
			response.render('newcar/carlist', {newcar: results});		
		});	
});

router.get('/edit/:id', function(request, response){

	userModel.getCarById(request.params.id, function(result){
		response.render('newcar/edit', result);
	});
	
});

router.post('/edit/:id', function(request, response){

	var car = {
		name: request.body.name,
		cost: request.body.cost,
		category: request.body.category,
		id: request.params.id
	};

	userModel.updatecar(car, function(status){
		
		if(status){
			response.redirect('/carlist');
		}else{
			response.redirect('/carlist/edit/'+request.params.id);
		}
	});
	
});

router.get('/delete/:id', function(request, response){

	userModel.getcarById(sql, function(result){
		response.render("newcar/delete", {car: result[0]});
	})
});

router.post('/delete/:id', function(request, response){

	userModel.delete(sql, function(status){	
		if(status){
			response.redirect("/carlist");
		}else{
			response.redirect("/newcar/delete/"+request.params.id);	
		}
	})
});

router.get('/details/:id', function(request, response){

	userModel.getById(request.params.id, function(result){
		response.render("user/details", result);
	})
});

module.exports = router;



