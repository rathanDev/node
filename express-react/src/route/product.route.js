const ProductController = require('../controller/product.controller');

exports.routesConfig = (app) => {

    app.get('/products', [
        ProductController.list
    ]);

    app.get('/product/create', [
        ProductController.create
    ]);

};
