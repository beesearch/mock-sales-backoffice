var sqlite3 = require("sqlite3").verbose();

/*
 * GET all invoices.
 */

 exports.listAllInvoice = function(req, res){
 	var sqlite3 = require('sqlite3').verbose();
 	var db = new sqlite3.Database('db/sap.db');
 	var Invoice = []

 	console.log("select all Invoice");
 	db.all("SELECT InvoiceId, CustomerId, InvoiceDate, BillingAddress, BillingCity, BillingState, BillingCountry, BillingPostalCode, Total FROM Invoice", function(err, rows) {
 		rows.forEach(function (row) {
 			Invoice.push([{
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

 		res.send(Invoice);

 		db.close();
 	});
 };

/*
 * GET all invoices with customers infos.
 */

 exports.listAllInvoiceWithCustomerName = function(req, res){
 	var sqlite3 = require('sqlite3').verbose();
 	var db = new sqlite3.Database('db/sap.db');
 	var Invoice = []

 	console.log("select all InvoiceWithCustomerName");
 	db.all("SELECT Invoiceid, FirstName, LastName FROM invoice, customer where invoice.customerid = customer.customerid", function(err, rows) {
 		rows.forEach(function (row) {
 			Invoice.push([{
 				InvoiceId: row.InvoiceId, 
 				CustomerFirstName: row.FirstName, 
 				CustomerLastName: row.LastName
 			}]);
 		});

 		res.send(Invoice);

 		db.close();
 	});
 };