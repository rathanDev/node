var express = require("express");
var app = express();

var server = app.listen(3000, function () {
    console.log("Server is up and running on 3000");
});