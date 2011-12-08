// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\nApp (outerspace) is running..');
// }).listen(12885);


var express = require("express"),
    app = express.createServer();
app.use(express.static(__dirname));
app.listen(12885);