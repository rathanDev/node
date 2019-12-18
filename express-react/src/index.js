const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




const UserRoute = require('./route/user.route');
UserRoute.routesConfig(app);

const ProductRoute = require('./route/product.route');
ProductRoute.routesConfig(app);




const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Web service listening on port ${port}`);
});



app.get('/', (req, res) => {
    console.log('params', req.params);
    res.send('Just get');
});

app.get('/:param1', (req, res) => {
    console.log('params', req.params);
    res.send('Get with path param');
});

app.post('/a-post', (req, res) => {
    console.log('body', req.body);
    res.send('Post with body');
});




// app.post('/product/create', (req, res) => {
//     console.log('body', req.body);
//     res.send('/product/create');
// });

// const ProductController = require('./controller/product.controller');
//
// app.post('/product/create', [
//     ProductController.create
// ]);
