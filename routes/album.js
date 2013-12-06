//[Album] ([AlbumId], [Title], [ArtistId])

var sqlite3 = require("sqlite3").verbose();

/*
 * GET users listing.
 */

 exports.list = function(req, res){
 	var sqlite3 = require('sqlite3').verbose();
 	var db = new sqlite3.Database('db/sap.db');
 	var album = []

 	console.log("select all album");
 	db.all("SELECT AlbumId, Title, ArtistId FROM album", function(err, rows) {
 		rows.forEach(function (row) {
 			album.push([{
 				id: row.AlbumId, 
 				title: row.Title, 
 				artistId: row.ArtistId
 			}]);
 		});

 		res.send(album);

 		db.close();
 	});
 };