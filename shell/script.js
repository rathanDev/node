const {exec} = require('child_process');

console.log('script dev 2000-- -- ');

exec(
    `aws s3 ls s3://dev.trivyol.com --page-size 10 --profile triv-s3 | awk '{print $4,$5}' `,
    {maxBuffer: 1024 * 2000},
    function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
);

