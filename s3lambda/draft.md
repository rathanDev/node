
npm init 

npm i aws-sdk --save
npm i util --save
// npm i express --save
npm i request --save

cd other/
zip -r index.zip ../

error at 'require'
unresolved function or method require
In IntelliJ 2018.3.2: go to Settings (Preferences) | Languages & Frameworks | Node.js and NPM and enable Coding assistance for Node.js


Request - when a file uploaded

{
  "Records": [
    {
      "eventVersion": "2.1",
      "eventSource": "aws:s3",
      "awsRegion": "us-east-1",
      "eventTime": "2019-05-27T08:44:02.634Z",
      "eventName": "ObjectCreated:Put",
      "userIdentity": {
        "principalId": "A3ER7CJ70H7VNE"
      },
      "requestParameters": {
        "sourceIPAddress": "165.225.104.100"
      },
      "responseElements": {
        "x-amz-request-id": "67BD06E313487774",
        "x-amz-id-2": "eTEOZCF/W1ZIv3RVV8TQvi8gv9BrJUSGxAIgzpTcoi7P5xTVOwuMT7PPlK5mvkPiZd3cf8CVKKk="
      },
      "s3": {
        "s3SchemaVersion": "1.0",
        "configurationId": "ZGRmOGQxNjItOWRkNS00MDFlLWIxYTItZWFiYjc4Mzk4NGNk",
        "bucket": {
          "name": "baplie",
          "ownerIdentity": {
            "principalId": "A3ER7CJ70H7VNE"
          },
          "arn": "arn:aws:s3:::baplie"
        },
        "object": {
          "key": "trapac/index.js",
          "size": 1019,
          "eTag": "550e237dd758280076370793321ad2f7",
          "sequencer": "005CEBA35292F9BF8B"
        }
      }
    }
  ]
}
