const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const util = require('util');

const request = require('request');

// const express = require('express');
// const api = express();

console.log('InitS3TriggerLambdaService');

exports.handler = function (event, context, callback) {

    console.log('ReadEventParameter: \n', util.inspect(event, {depth: 5}));

    const record = event.Records[0];

    const srcBucket = record.s3.bucket.name;
    console.log('SrcBucket:', srcBucket);

    const srcKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));
    console.log('SrcKey:', srcKey);

    const url = 'https://reqres.in/api/users';
    const postData = {
        "name": srcKey,
        "job": srcBucket
    };

    request.post({url: url, formData: postData}, function optionalCallback(err, httpResponse, body) {

        if (err) {
            return console.error('Err ', err);
        }

        console.log('Successful');
        console.log('HttpResponse', httpResponse);
        console.log('body', body);

    });


};
