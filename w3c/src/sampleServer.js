let http = require('http');
let clock = require('./myFirstModule');

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type':'text/html'});
   res.end('The date and time : ' + clock.myDateTime());
}).listen(8888);
