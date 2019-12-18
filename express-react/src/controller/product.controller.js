exports.list = (req, res) => {

    const product = {
        'id': 'productId',
        'name': 'productName',
        'description': 'productDescription'
    };

    res
        .status(200)
        .send(product);

};
