let http = require('http');
let clock = require('./myFirstModule');

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type':'text/html'});
   res.write('The date and time : ' + clock.myDateTime());
   res.write("\n url:" + req.url);
   res.end();
}).listen(8888);
