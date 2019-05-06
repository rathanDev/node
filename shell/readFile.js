const fs = require('fs');

console.log('Start reading');

function readData() {

    fs.readFile('/Users/janarthan/Practice/node/shell/README.md', {encoding: 'utf-8'}, function (err, data) {

        if (err) {
            console.error('Err', err);
            return;
        }

        console.log('data', data);
    });

}


readData();
