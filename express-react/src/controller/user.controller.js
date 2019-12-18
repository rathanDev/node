const MongoClient = require('mongodb').MongoClient;
// const dbConnectionUrl = 'mongodb://localhost:27017/mongorediss';
const dbConnectionUrl = 'mongodb://localhost:27017/';

MongoClient.connect(dbConnectionUrl, (err, db) => {
    if(err) {
        console.error(`Error connecting database ${dbConnectionUrl}`, err);
        return;
    }
    console.log('Db connection successful');

    const dbo = db.db('mongoredis');
    const query = {};

    console.log('Find doc from course collection');

    const cursor = dbo
        .collection('course')
        .find(query)
        .toArray(function (err, results) {
            if(err) {
                console.error('Err ', err);
                throw err;
            }
            console.log('result', results);
            db.close();
        })

    // cursor.each((err, doc) => {
    //    console.log('doc', doc);
    // });
    //
    // db.close();
});

exports.list = (req, res) => {
    const result = {'name': 'aname', 'role': 'arole'};
    res.status(200).send(result);
};
