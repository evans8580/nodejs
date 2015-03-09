/**
 * New node file
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://dbadmin:test@localhost:27017", {
	db: { w: 1, native_parser: false },
	server: {
		poolSize: 5,
		socketOptions: { connectTimeoutMS: 500 },
		auto_reconnect: true
	},
	replSet: {},
	 mongos: {}
}, function(err, db) {
	if(err) {
		console.log("Connection Failed Via Connection String.");
	} else {
		console.log("Connected Via Connection String . . .");
		var adminDB = db.admin();
		adminDB.listDatabases(function(err, databases){
		    console.log("Before Add Database List: ");
		    console.log(databases);
		});
//		var newDB = db.db("newDB");
//		newDB.createCollection("newColleciton", function(err, collection) {
//			if(!err){ 
//				console.log("New Database and Collection Created");
//			}
//		});
		db.logout(function(err, result) {
			if(!err) {
				console.log("Logged out Via Connection String . . .");
			}
			db.close();
			console.log("Connection closed . . .");
		});
	}
});