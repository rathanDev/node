const { spawn } = require('child_process');
const { exec } = require('child_process');

const ls = exec(`aws s3 ls s3://dev.trivyol.com --page-size 10 --profile triv-s3 | awk '{print $4,$5}'`);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);

    for(name in ${data}) {
        console.log('name: ', name);
    }

});