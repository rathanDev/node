const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const file = '/Users/janarthan/Practice/node/shell/Here_is_the_list_of_images_names_to_use.txt';
const bucketName = 'trivyol-media';

async function readFile() {

    fs.readFile(file, {encoding: 'utf-8'}, async function (err, data) {

        if (err) {
            console.error('Err', err);
            return;
        }

        // console.log('data', data);

        const keys = data.split('\n');
        console.log('No of keys : ', keys.length);

        for (let i = 0; i < keys.length; i++) {

            const key = keys[i].replace('\r', '');
            if (!key) {
                console.log('Invalid key - ', key);
                continue;
            }

            console.log('key ' + (i + 1), `${key}`);

            try {
                const {stdout: stdOut2, stderr} = await exec(
                    `aws s3api put-object --bucket ${bucketName} --key '${key}' --content-disposition attachment --content-type image/jpeg --profile triv-s3;`
                );

                if (stderr) {
                    console.log('Err', stderr);
                    return;
                }

                const res = JSON.parse(stdOut2);
                console.log('Updated? ', res, '\n');
            } catch (e) {
                console.error('Err ', e);
            }

        }


    });

}


readFile();
