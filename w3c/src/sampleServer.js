let http = require('http');
let clock = require('./myFirstModule');
let fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time : ' + clock.myDateTime());
    res.write("\n url:" + req.url);
    res.end();
}).listen(8877);

http.createServer(function (req, res) {

    fs.readFile('../other/profile.txt', function (err, data) {
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

}).listen(8888);
