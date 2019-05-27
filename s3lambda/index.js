const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const util = require('util');

console.log('Init S3-Lambda service');

exports.handler = function (event, context, callback) {

    console.log('Read event parameter: \n', util.inspect(event, {depth:5}));

    const record = event.Records[0];

    const srcBucket = record.s3.bucket.name;
    console.log('SrcBucket:', srcBucket);

    const srcKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));
    console.log('SrcKey:', srcKey);

};
