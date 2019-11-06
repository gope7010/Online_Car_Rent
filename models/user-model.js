var db = require('./db')

module.exports = {

	getById: function(id, callback){

			var sql = "select * from user where id=?";
			db.getResults(sql, [id], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	getCarById: function(id, callback){

			var sql = "select * from newcar where id=?";
			db.getResults(sql, [id], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	validate: function(user, callback){
		var sql ="select * from user where name=? and password=?";
		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},

	validateadmin: function(user, callback){
		var sql ="select * from admin where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length >0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},

	validateuser: function(user, callback){
		var sql ="select * from users where name=? and password=?";
		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length >0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},
	getAllcar: function(callback){
		var sql = "select * from newcar";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	getAll: function(callback){
		var sql = "select * from user";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insertuser: function(user, callback){

		var sql ="insert into users (id,name,email,password) values('', ? , ? , ? )";
		db.execute(sql, [user.username, user.email, user.password], function(status){
			callback(status);
		});
	},
	insertadmin: function(user, callback){

		var sql ="insert into admin values('', ?, ?)";
		db.execute(sql, [user.username, user.password], function(status){
			callback(status);
		});
	},
	insertcar: function(car, callback){

		var sql ="insert into newcar values('',?, ?, ?)";
		db.execute(sql, [car.name,car.cost,car.category], function(status){
			callback(status);
		});
	},
	insert: function(user, callback){

		var sql ="insert into user values('', ?, ?)";
		db.execute(sql, [user.username, user.password], function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql ="update user set username=?, password=? where id=?";
	
		db.execute(sql, [user.username, user.password, user.id], function(status){
			callback(status);
		});
	},
	
	updatecar: function(car, callback){
		var sql ="update newcar set name=?,cost=?,category=? where id=?";
	
		db.execute(sql, [car.name,car.cost,car.category, car.id], function(status){
			callback(status);
		});
	},
	
	
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}



