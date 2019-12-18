const Product = require('../model/product.model');


exports.list = (req, res) => {

    console.log('Find all products');

    Product.find({}, function (err, products) {
        if (err) {
            console.error('Error finding products', err);
            return;
        }
        console.log('Products', products);
        res.send(products);
    })

};


exports.findById = (req, res) => {

    console.log('req params', req.params);

    Product.find({_id: req.params.id}, (err, product) => {
        if (err) {
            console.error('Error finding product', err);
            return next(err);
        }
        console.log('Product', product);
        res.send(product);
    });

};


exports.create = (req, res) => {

    console.log('Create product hereee', req.body);

    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function (err) {
        if (err) {
            console.error('Err', err);
            return next(err);
        }
        res.send('Product created successfully');
    })

};

