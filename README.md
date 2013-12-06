# Install the SAP legacy mock data for bee-backend

### Sqlite3
```
// Install Sqlite
brew install Sqlite3 	//MAC OS X
apt-get install sqlite3 //Ubuntu

// Setup the database
sqlite3 sap.db
sqlite3 sap.db < Chinook_Sqlite.sql
```

### Application
```
npm install
npm install sqlite3
```

### Start the server
```
node server.js

// Get customer 
http://localhost:3300/customers
http://localhost:3300/albums
http://localhost:3300/albumsWithArtistName
http://localhost:3300/invoices
http://localhost:3300/invoicesWithCustomerName
```