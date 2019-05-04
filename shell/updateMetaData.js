const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls() {

    console.log('Start  ', new Date());


    const {stdout: stdOut, stdErr} = await exec(
        `aws s3api list-objects-v2 --bucket dev.trivyol.com --max-item 2 --starting-token eyJDb250aW51YXRpb25Ub2tlbiI6IG51bGwsICJib3RvX3RydW5jYXRlX2Ftb3VudCI6IDN9 --profile triv-s3`,
        {maxBuffer: 200 * 1024 * 1024}
    );

    if(stdErr) {
        console.log('Err', stdErr);
        return;
    }

    const res = JSON.parse(stdOut);
    console.log(res);

    console.log('End    ', new Date());

}

ls();