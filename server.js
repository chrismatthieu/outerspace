var express = require("express"),
    app = express.createServer();
app.use(express.static(__dirname));
app.listen(12885);