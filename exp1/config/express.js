'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('express-jwt');
const logger = require('./logger');
const multer = require("multer");
const cors = require("cors");
// const rfs = require('rotating-file-stream')

const db = require("./mongoose");
const config = require("./config").get(process.env.NODE_ENV);

/**
 * @desc - initialize other application configurations
 */
module.exports.initializeAppConfigs = (app) => {
  // setting the morgan logger and winston
  logger.info('Initializaing configs');
  // setup the body-parser
  app.use(bodyParser.json({ limit: '5mb' }))
  app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));

  // enable cors in the application
  app.use(cors());

  // setup static resources
  // app.use('/static', express.static(__dirname + "/public"));
  app.use('/static', express.static('public'))

  // setup the json web token secret
  app.use(jwt({ 
    secret: config.jwt.secret,
    base: "base64",
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  }).unless({ path: [
      '/api/v1/geoname/locations',
      '/api/v1/categories/all',
      '/api/v1/auth/login/user',
      '/api/v1/auth/login/customer',
      '/api/v1/customers/signup',
      '/api/v1/customers/search/public',
      /\/api\/v1\/customers\/forPublic*/,
      /\/api\/v1\/services\/byCategoryType*/,
      /\/api\/v1\/customers\/profileimg*/, // need to remove this after tests
      /\/api\/v1\/geonames*/,
      /\/api\/v1\/locations*/,
      /\/static*/,
      /\/api\/v1\/getIp*/,
      '/api/v1/ideabiz/admin/search',
      '/api/v1/ideabiz/admin/history',
      '/api/v1/ideabiz/admin/subscriptions',
      '/api/v1/ideabiz/admin/rental',
      
      '/api/v1/ideabiz/getToken',
      '/api/v1/ideabiz/sendOTPCode',
      '/api/v1/ideabiz/verifyOTP'
    ]}));


  // setup the multer for file uploading
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, config.multer.imageUploadPath);
    },
    filename: function (req, file, cb) {
      const type = file.mimetype.split("/")[1];
      const format = (type == 'jpeg') ? 'jpg' : 'png';
      const filename = file.fieldname + '-' + Date.now() + '.' + format;
      
      cb(null, filename);
    }
  });

  const upload = multer({
    storage: storage, limits: { fileSize: 2097152}, fileFilter: (req, file, cb) => {
    if (!file) {
      cb(new Error("File requied"));
    } else {
      const fileType = file.mimetype.split("/")[1];
      if (fileType && (fileType == 'jpeg' || fileType == 'png')) {
        cb(null, true);
      } else {

        logger.info("FileType: " + fileType)
        cb(new Error("Only support .png and .jpg files"));
      }
    }
  }});
  app.set("uploader", upload);

  // setup the routes
  this.initializeServerRoutes(app);
}

/**
 * @desc - setup db connection and models
 */
module.exports.initDbConfigs = () => {
  // initialize the database
  db.init();

  // need to require all mongoose models here
  require("../models/user");
  require('../models/comment');
  require("../models/category");
  require('../models/service');
  require("../models/customer");
  require("../models/continent");
  require("../models/country");
  require("../models/state");
  require("../models/region");
  require("../models/city");
  require("../models/payment-history");
  require("../models/pending-payments");
  require('../models/map-setting');
  require("../models/subscription-price");
  require("../models/customer-search-history");
  require("../models/audit-trail.model");
  require("../models/subscription");
  require('../models/event-history');
}

/**
 * @desc - initialize the all sever routes (REST end points);
 */
module.exports.initializeServerRoutes = (app) => {
  logger.info("initilizing routes");
  require("../routes/auth.route")(app);
  require('../routes/analytics.route')(app);
  require('../routes/fiancial.route')(app);
  require('../routes/dashboard.route')(app);
  require("../routes/user.route")(app);
  require("../routes/customer.route")(app);
  require("../routes/service.route")(app);
  require("../routes/category.route")(app);
  require("../routes/geoname.route")(app);
  require("../routes/locations.route")(app);
  require("../routes/pending-payment.route")(app);
  require("../routes/audit-trail.route")(app);
  require("../routes/price.routes")(app);
  require("../routes/ideabiz.route")(app);
}

module.exports.initErrorHandlers = (app) => {

  // if error is not an instanceOf APIError, convert it.
  // app.use((err, req, res, next) => {
  //   // if (err instanceof expressValidation.ValidationError) {
  //   //   // validation error contains errors which is an array of error each containing message[]
  //   //   const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
  //   //   const error = new APIError(unifiedErrorMessage, err.status, true);
  //   //   return next(error);
  //   // } else 
  //   if (!(err instanceof APIError)) {
  //     const apiError = new APIError(err.message, err.status, err.isPublic);
  //     return next(apiError);
  //   }
  //   return next(err);
  // });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    // const err = new APIError('API not found', httpStatus.NOT_FOUND);
    return next();
  });
  
  // error handler, send stacktrace only during development
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    logger.error(JSON.stringify(err));

    const status = err.status ? err.status : 400;
    return res.status(status)
      .json({
        message: err.message,
        stack: config.env === 'development' || config.env.env === "dev" ? err.stack : {}
      });
  });

  app.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });

}

/**
 * @desc - initialize the application
 */
module.exports.init = () => {
  const app = express();

  this.initializeAppConfigs(app);
  this.initDbConfigs();
  this.initErrorHandlers(app);
  this.initializeServerRoutes(app);

  return app;
}