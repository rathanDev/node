const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls() {

    const { stdout, stderr } = await exec(`aws s3 ls --recursive s3://dev.trivyol.com --page-size 100 --profile triv-s3 | awk '{print $4,$5}'`);

    console.log('stdout:', stdout);
    console.log('stdout:', stdout.length);

    names = stdout.split("\n");
    console.log('names ', names);
    console.log('names len ', names.length);

    // for(i=0; i=names.length; i++) {
    //     console.log('i-- ', names[i]);
    // }

    console.log('stderr:', stderr);

}
ls();