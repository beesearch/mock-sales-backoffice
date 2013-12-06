# Install the mock data for SAP legacy

### Sqlite3
```
Install Sqlite
brew install Sqlite3 	//MAC OS X
apt-get install sqlite3 //Ubuntu

Setup the database
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
```