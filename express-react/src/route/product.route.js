const ProductController = require('../controller/product.controller');

exports.routesConfig = (app) => {

    app.get('/products', [
        ProductController.list
    ]);

    // app.post('/product/create', [
    //     ProductController.create
    // ]);

    // app.post('/product/create', [
    //     // ProductController.create
    //     ProductController.product_create
    // ]);


    app.post('/product/create', (req, res) => {
        console.log('Create product here', req.body);
        res.send('Product will be created');
    });

};
