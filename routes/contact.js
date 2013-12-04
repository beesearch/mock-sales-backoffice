var sqlite3 = require("sqlite3").verbose();

/*
 * GET users listing.
 */

 exports.list = function(req, res){
 	var sqlite3 = require('sqlite3').verbose();
 	var db = new sqlite3.Database('db/sap.db');
 	var contact = []

 	console.log("select all contact");
 	db.all("SELECT uid, name, email FROM contact", function(err, rows) {
 		rows.forEach(function (row) {
 			contact.push([{id: row.uid, name: row.name, email: row.email}]);
 		});

 		res.send(contact);

 		db.close();
 	});
 };