var express = require('express');
var url = require("url");
var swagger = require("swagger-node-express");
var http = require('http');

var app = express();

// Set Swagger App Handler
swagger.setAppHandler(app);

// Add API Key Access
swagger.addValidator(
  function validate(req, path, httpMethod) {
    //  example, only allow POST for api_key="special-key"
    if ("POST" == httpMethod || "DELETE" == httpMethod || "PUT" == httpMethod ) {
  
      var apiKey = req.headers["api_key"];
      if (!apiKey) {
        apiKey = url.parse(req.url,true).query["api_key"]; }
      if ("bee" == apiKey) {
        return true; 
      }
      return false;
    }
    return true;
  }
);  

// Add models and methods to swagger
//var models = require("./models/album.js");
var album = require('./routes/invoice');
swagger.addGet(album.listAllInvoice); 

// Configures the app's base path and api version.
swagger.configure("http://localhost:3301", "0.1");

// Start the server
app.set('port', process.env.PORT || 3301);
app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log("############################################");
  console.log("# Products Products listening on port 3301 #");
  console.log("############################################");
});
