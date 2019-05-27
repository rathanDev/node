const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const util = require('util');

const request = require('request');

// const express = require('express');
// const api = express();

console.log('InitS3-LambdaService');

exports.handler = function (event, context, callback) {

    console.log('ReadEventParameter: \n', util.inspect(event, {depth: 5}));

    const record = event.Records[0];

    const srcBucket = record.s3.bucket.name;
    console.log('SrcBucket:', srcBucket);

    const srcKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));
    console.log('SrcKey:', srcKey);

    const url = 'https://a/url';
    const formData = {};

    request.post({url: url, formData: formData}, function optionalCallback(err, httpResponse, body) {

        if (err) {
            return console.error('Err ', err);
        }

        console.log('Success', body);

    });


};
