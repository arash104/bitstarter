var express = require('express');
var fs = require('fs');
var contents = fs.readFileSync('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
response.send(contents.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
