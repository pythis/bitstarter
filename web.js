var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());
var buf;

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
  buf = data;
});

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
