var express = require("express");
var app = express();

var server = app.listen(3000, function () {
    console.log("Server is up and running on 3000");
});

app.get('/', function (req, res) {
    res.send("hello from mighty express");
});