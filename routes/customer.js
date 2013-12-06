//[Customer] ([CustomerId], [FirstName], [LastName], [Address], [City], [Country], [PostalCode], [Phone], [Email], [SupportRepId])

var sqlite3 = require("sqlite3").verbose();

/*
 * GET users listing.
 */

 exports.list = function(req, res){
 	var sqlite3 = require('sqlite3').verbose();
 	var db = new sqlite3.Database('db/sap.db');
 	var customer = []

 	console.log("select all customer");
 	db.all("SELECT CustomerId, FirstName, LastName, Address, City, Country, PostalCode, Phone, Email, SupportRepId FROM Customer", function(err, rows) {
 		rows.forEach(function (row) {
 			customer.push([{
 				CustomerId: row.CustomerId, 
 				FirstName: row.FirstName, 
 				LastName: row.LastName, 
 				Address: row.Address, 
 				City: row.City, 
 				Country: row.Country, 
 				PostalCode: row.PostalCode, 
 				Phone: row.Phone, 
 				Email: row.Email, 
 				SupportRepId: row.SupportRepId
 			}]);
 		});

 		res.send(customer);

 		db.close();
 	});
 };