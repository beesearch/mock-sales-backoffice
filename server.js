
/**
 * Module dependencies.
 */

var express = require('express');
var customer = require('./routes/customer');
var album = require('./routes/album');
var invoice = require('./routes/invoice');
var http = require('http');


var app = express();

// all environments
app.set('port', process.env.PORT || 3300);
app.use(app.router);


// routes
app.get('/customers', customer.list);
app.get('/albums', album.list);
app.get('/invoices', invoice.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
