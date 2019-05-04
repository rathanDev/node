const util = require('util');
const exec = util.promisify(require('child_process').exec);
// --page-size 100
async function ls() {

    console.log('start 200', new Date()); // 19.11

    const {stdout, stderr} = await exec(
        `aws s3 ls --recursive s3://dev.trivyol.com --page-size 100 --profile triv-s3 | awk '{print $4,$5}'`,
        {maxBuffer: 200 * 1024 * 1024}
    );

    // console.log('stdout:', stdout);
    // console.log('stdout:', stdout.length);

    console.log('got stdout');

    names = stdout.split("\n");
    console.log('names med ', names);
    console.log('names len ', names.length);

    // for (var i = 0; i < names.length; i++) {
    //     const name = names[i];
    //     if(!name) {
    //         console.log('Invalid ', name);
    //         continue;
    //     }
    //     console.log('Name --------> ', name);
    // }

    console.log('stderr:', stderr);

}

ls();