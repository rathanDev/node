var http = require("http");

http

    .createServer(function (request, response) {

        console.log("received request");

        request.on("end", function () {
            response.writeHead(200, {'Content-Type': 'text/plain'});
        });

        response.end('Hello Http!');

    })

    .listen(8080);


