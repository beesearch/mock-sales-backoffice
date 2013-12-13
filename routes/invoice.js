var sqlite3 = require("sqlite3").verbose();
var https = require('https');
var sw = require("swagger-node-express");
var param = require("../node_modules/swagger-node-express/Common/node/paramTypes.js");
var swe = sw.errors;


function writeResponse (res, data) {
	sw.setHeaders(res);
	res.send(JSON.stringify(data));
}

exports.listAllInvoice = {
	'spec': {
		"description" : "Operations about invoice",
		"path" : "/invoice/listAllInvoice",
		"notes" : "Returns all invoice",
		"summary" : "List all invoice",
		"method": "GET",
		"nickname" : "listAllInvoice"
	},
	'action': function (req,res) {
		var sqlite3 = require('sqlite3').verbose();
		var db = new sqlite3.Database('db/sales.db');
		var invoice = []

		console.log("--> listAllInvoice");
		db.all("SELECT InvoiceId, CustomerId, InvoiceDate, BillingAddress, BillingCity, BillingState, BillingCountry, BillingPostalCode, Total FROM Invoice", function(err, rows) {
			rows.forEach(function (row) {
				invoice.push([{
					InvoiceId: row.InvoiceId, 
					CustomerId: row.CustomerId, 
					InvoiceDate: row.InvoiceDate, 
					BillingAddress: row.BillingAddress, 
					BillingCity: row.BillingCity, 
					BillingState: row.BillingState, 
					BillingCountry: row.BillingCountry, 
					BillingPostalCode: row.BillingPostalCode, 
					Total: row.Total
				}]);
			});

			res.send(invoice);

			db.close();
		});
	}
};

exports.listAllInvoiceWithCustomerName = {
	'spec': {
		"description" : "Operations about invoice",
		"path" : "/invoice/listAllInvoiceWithCustomerName",
		"notes" : "Returns all invoice with CustomerName",
		"summary" : "List all invoice with CustomerName",
		"method": "GET",
		"nickname" : "listAllInvoiceWithCustomerName"
	},
	'action': function (req,res) {
		var sqlite3 = require('sqlite3').verbose();
		var db = new sqlite3.Database('db/sales.db');
		var invoice = []

		console.log("--> listAllInvoiceWithCustomerName");
		db.all("SELECT Invoiceid, FirstName, LastName FROM invoice, customer where invoice.customerid = customer.customerid", function(err, rows) {
			rows.forEach(function (row) {
				invoice.push([{
					InvoiceId: row.InvoiceId, 
					CustomerFirstName: row.FirstName, 
					CustomerLastName: row.LastName
				}]);
			});

			res.send(invoice);

			db.close();
		});
	}
};


