var mongoClient = require('mongodb').MongoClient();
var url = "mongodb://localhost:27017/myDb";

mongoClient.connect(url, function (err, db) {
    if(err) {
        throw err;
    }

    console.log("database created");

    db.createCollection("customers", function (err, res) {
        if(err) {
            throw err;
        }
        console.log("Collection created");
        db.close();
    });
});