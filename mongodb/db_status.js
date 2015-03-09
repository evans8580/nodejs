/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:test@localhost", function(err, db) {
	var adminDB = db.admin();
	adminDB.serverStatus(function(err, status) {
		console.log(status);
		db.close();
	});
});