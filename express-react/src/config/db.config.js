const mongoose = require('mongoose');
// let dbConnectionUrl = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
const dbConnectionUrl = 'mongodb://localhost:27017/mongoredis';
const mongoDB = process.env.MONGODB_URI || dbConnectionUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log(`Db configured with url ${dbConnectionUrl}`);
