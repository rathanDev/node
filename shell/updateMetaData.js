const util = require('util');
const exec = util.promisify(require('child_process').exec);

var count = 1;
const maxIterations = 10;
const maxItem = 10;
const bucketName = 'dev.trivyol.com';

async function ls() {

    console.log('Start  ', new Date());

    const {stdout: stdOut1, stdErr} = await exec(
        `aws s3api list-objects-v2 --bucket ${bucketName} --max-item 1 --profile triv-s3`,
        {maxBuffer: 200 * 1024 * 1024}
    );

    if (stdErr) {
        console.log('Err', stdErr);
        return;
    }

    const res = JSON.parse(stdOut1);
    var nextToken = res.NextToken;

    for (var i = 0; i < maxIterations; i++) {

        if(!nextToken) {
            console.log('End of bucket');
            break;
        }

        const {stdout: stdOut2, stderr} = await exec(
            `aws s3api list-objects-v2 --bucket ${bucketName} --max-item ${maxItem} --starting-token ${nextToken} --profile triv-s3`,
            {maxBuffer: 2 * 1024 * 1024}
        );

        if (stderr) {
            console.log('Err', stderr);
            return;
        }

        const res = JSON.parse(stdOut2);

        nextToken = res.NextToken;
        console.log('nextToken', nextToken, '\n');

        const files = res.Contents;

        for (var j = 0; j < files.length; j++) {
            const file = files[j];
            const name = file.Key;
            console.log('File ', count, name);


            const {stdout: stdOut2, stderr} = await exec(
                `aws s3api put-object --bucket ${bucketName} --key ${name} --content-disposition attachment --content-type image/jpeg --profile triv-s3;`
            );

            if (stderr) {
                console.log('Err', stderr);
                return;
            }

            const res = JSON.parse(stdOut2);
            console.log('Updated? ', res, '\n');


            count++;
        }

    }

    console.log('No of files : ', count);
    console.log('End    ', new Date());

}

ls();