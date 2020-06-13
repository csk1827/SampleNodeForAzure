var express = require('express');
var app = express();

app.get('/', async function (req, res) {
 res.send("Hello world!");
})

const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
   var port_ = server.address().port
   console.log("Example app listening at port %s", port_)
})