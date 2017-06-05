var express = require('express');
var app = express();
var port = 10000;
var ipaddress = '0.0.0.0';
app.listen(port, ipaddress, function() {
    console.log('listening at : http://'+ipaddress+':'+port);
});
app.use(express.static('./dist'));
