var sqlite3 = require("sqlite3").verbose();
var https = require('https');
var sw = require("swagger-node-express");
var param = require("../node_modules/swagger-node-express/Common/node/paramTypes.js");
var swe = sw.errors;

function writeResponse (res, data) {
	sw.setHeaders(res);
	res.send(JSON.stringify(data));
}

exports.listAllCustomer = {
	'spec': {
		"description" : "Operations about customer",
		"path" : "/customer/listAllCustomer",
		"notes" : "Returns all customer",
		"summary" : "List all customer",
		"method": "GET",
		"nickname" : "listAllCustomer"
	},
	'action': function (req,res) {
		var sqlite3 = require('sqlite3').verbose();
		var db = new sqlite3.Database('db/sales.db');
		var customer = []

	 	console.log("--> listAllCustomer");
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
	}
};