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



    // console.log('List all products');

    // Product.find({}, function (err, products) {
    //     if(err) {
    //         console.error('Error finding products', err);
    //         return;
    //     }
    //     console.log('Products', products);
    // })



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

exports.create = (req, res) => {

    console.log('Create product');

    let product = new Product({
        name: 'productName',
        price: 11.00
    });

    product.save(function (err) {
        if(err) {
            console.error('Err', err);
            return next(err);
        }
        res.send('Product created successfully');
    })

};


