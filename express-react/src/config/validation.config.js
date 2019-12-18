const Joi = require('joi');

const productDef = {
    name: Joi.string().min(4).required(),
    price: Joi.number().min(0).required()
};

module.exports.productDef = productDef;
