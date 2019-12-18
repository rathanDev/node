const Product = require('../model/product.model');


exports.list = (req, res) => {

    // const product = {
    //     'id': 'productId',
    //     'name': 'productName',
    //     'description': 'productDescription'
    // };
    //
    // res
    //     .status(200)
    //     .send(product);



    console.log('Find one product');

    Product.findOne({}, function (err, product) {
        if(err) {
            console.error('Error finding product', err);
            return;
        }
        console.log('Product', product);
        res.send(product);
    })

};

exports.product_create = function(req, res) {
    console.log('Create product here', req.body);
    res.send('Product will created');
};

exports.create = (req, res) => {

    console.log('Create product hereee', req.body);

    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save(function (err) {
        if(err) {
            console.error('Err', err);
            return next(err);
        }
        res.send('Product created successfully');
    })

};


