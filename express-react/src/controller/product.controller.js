const Product = require('../model/product.model');
const Joi = require('joi');
const Validators = require('../config/validation.config');


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

    // Product.find({_id: req.params.id}, (err, product) => {
    //     if (err) {
    //         console.error('Error finding product', err);
    //         return next(err);
    //     }
    //     console.log('Product', product);
    //     res.send(product);
    // });

    Product.findById(req.params.id, (err, product) => {
        if (err) {
            console.error('Error finding product', err);
            return next(err);
        }
        console.log('Product', product);
        res.send(product);
    })

};


exports.create = (req, res) => {

    const {error, value} = Joi.validate(req.body, Validators.productDef);
    if (error) {
        console.error('Err', error);
        return res.status(400).send(error.details[0].message);
    }

    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });

    product.save((err) => {
        if (err) {
            console.error('Err', err);
            return next(err);
        }
        res.send('Product created successfully');
    })

};


exports.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
        if (err) {
            return next(err);
        }
        res.send(product);
    })
};
