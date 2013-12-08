var sqlite3 = require("sqlite3").verbose();
var https = require('https');

/*
 * GET all albums.
 */

 exports.listAllAlbum = function(req, res){
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

 /*
 * GET all albums with artists infos.
 */

 exports.listAllAlbumWithArtistName = function(req, res){
 	var sqlite3 = require('sqlite3').verbose();
 	var db = new sqlite3.Database('db/sap.db');
 	var album = []

 	console.log("select all album");
 	db.all(" SELECT AlbumId, Title, Name FROM Album, Artist where Album.ArtistId = Artist.ArtistId", function(err, rows) {
 		rows.forEach(function (row) {
 			album.push([{
 				id: row.AlbumId, 
 				title: row.Title, 
 				artist: row.Name
 			}]);
 		});

 		res.send(album);

 		db.close();
 	});
 };


 /*
 * Update all albums with cover url
 */

 exports.updateAlbum = function(req, res){
 	var sqlite3 = require('sqlite3').verbose();
 	var db = new sqlite3.Database('db/sap.db');
 	var album = []
	var options = {}

 	console.log("update all album");
 	db.all(" SELECT AlbumId, Title, Name FROM Album, Artist where Album.ArtistId = Artist.ArtistId AND Album.ArtistId = 1", function(err, rows) {

 		rows.forEach(function (row) {
 			console.log("Title : " + row.Title);
				
				// options = {
				//   host: 'https://itunes.apple.com',
				//   path: '/search?term=' + 'U2',
				//   method: 'GET'
				// };

			https.request('https://itunes.apple.com/search?term=' + row.Title, function(res) {


			    var data = '';

				res.setEncoding('utf8');
			    
			    res.on('data', function (chunk){
			        data += chunk;
			    });

			    res.on('end',function(){
			        var obj = JSON.parse(data);
			        //console.log(JSON.stringify(obj));
			        console.log( obj.results[0].collectionName );
			    })

				
			}).end();

			
 		});
		
 		res.send(album);

 		db.close();
 	});






 };