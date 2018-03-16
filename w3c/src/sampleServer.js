let http = require('http');
let clock = require('./myFirstModule');
let fs = require('fs');
let url = require('url');
let uc = require('upper-case');


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

}).listen(8888);
