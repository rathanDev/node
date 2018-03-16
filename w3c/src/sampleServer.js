let http = require('http');
let clock = require('./myFirstModule');
let fs = require('fs');
let url = require('url');
let uc = require('upper-case');
let formidable = require('formidable');

console.log("NodeJs server listening...");


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time : ' + clock.myDateTime());
    res.write("\n url:" + req.url);
    res.end();
});


http.createServer(function (req, res) {

    fs.readFile('../other/profile.txt', function (err, data) {
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

});


http.createServer(function (req, res) {

    let parsedUrl = url.parse(req.url, true);
    let query = parsedUrl.query;
    console.log("query.file:", query.file);

    let fileName = `../other/${query.file}`;
    console.log("fileName:", fileName);

    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("404 Not Found");
            res.end();
            return;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })

});


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc('hello world'));
    res.end();
});


http.createServer(function (req, res) {

    let file = '../other/profile.txt';
    let readStream = fs.createReadStream(file);

    readStream.on('open', function (data) {
        console.log("The file is open ", data);
    })

});


http.createServer(function (req, res) {

    if (req.url === '/fileupload') {

        let form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {

            if(err) {
                console.log(err);
                console.log("Redirecting to 8888");
                res.writeHead(301, {Location: 'localhost:8888'});
                res.end();
                return;
            }

            console.log(fields);
            console.log(files);

            let tempPath =  files.filetoupload.path;
            let newPath = "/home/janarthan/practice/node/w3c/other/" + files.filetoupload.name;
            console.log(newPath);

            fs.rename(tempPath, newPath, function (err) {
                if(err) throw err;
                res.write("File uploaded and moved");
                res.end();
            });

        });

        return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <form action="fileupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload"> <br>
        <input type="submit">
        </form>
    `);
    res.end();

}).listen(8888);


