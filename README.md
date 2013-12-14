#  Sales backoffice 
#### Mock data for bee-backend

### Install the mock
```
npm install
npm install sqlite3
```

### Start the server
```
node server.js
```

### Sqlite3
```
Install Sqlite
```
brew install Sqlite3 	//MAC OS X
apt-get install sqlite3 //Ubuntu

Use the database
```
sqlite3 sales.db

//Reset the database
sqlite3 sales.db < sales.sql
```