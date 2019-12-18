const ProductController = require('../controller/product.controller');

exports.routesConfig = (app) => {

    app.get('/product/all', [
        ProductController.list
    ]);

    app.get('/product/:id', [
        ProductController.findById
    ]);

    app.post('/product/create', [
        ProductController.create
    ]);

};
