var express = require('express');
var db = require('./../models/db');

var router = express.Router();

router.get('/', function(request, response){	
		
		response.render('adminhome/index');
		
});

module.exports = router;



