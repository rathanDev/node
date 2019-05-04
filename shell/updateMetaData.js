const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls() {

    console.log('Start  ', new Date());

    const {stdout: stdOut, stdErr} = await exec(
        `aws s3api list-objects-v2 --bucket dev.trivyol.com --max-item 1 --profile triv-s3`,
        {maxBuffer: 200 * 1024 * 1024}
    );

    if (stdErr) {
        console.log('Err', stdErr);
        return;
    }

    const res = JSON.parse(stdOut);
    var nextToken = res.NextToken;

    var count = 1;
    const maxIterations = 10;
    const maxItem = 10;

    for (var i = 0; i < maxIterations; i++) {

        if(!nextToken) {
            console.log('End of bucket');
            break;
        }

        const {stdout: stdOut, stdErr} = await exec(
            `aws s3api list-objects-v2 --bucket dev.trivyol.com --max-item ${maxItem} --starting-token ${nextToken} --profile triv-s3`,
            {maxBuffer: 200 * 1024 * 1024}
        );

        if (stdErr) {
            console.log('Err', stdErr);
            return;
        }

        const res = JSON.parse(stdOut);

        nextToken = res.NextToken;
        console.log('nextToken', nextToken);

        const files = res.Contents;

        for (var j = 0; j < files.length; j++) {
            const file = files[j];
            const name = file.Key;
            console.log('name ', name);
            count++;
        }

    }

    console.log('No of files : ', count);
    console.log('End    ', new Date());

}

ls();