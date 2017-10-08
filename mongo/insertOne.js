var mongoClient = require('mongodb').MongoClient();
var url = "mongodb://localhost:27017/myDb";

mongoClient.connect(url, function (err, db) {
    if(err) {
        throw err;
    }

    var doc = {name: "name", address: "address"};

    db.collection("customers").insertOne(doc, function (err, res) {
        if(err) {
            throw err;
        }
        console.log("document inserted");
        db.close();
    });
});