var http = require('http');
var opfile = require('./models/opfile');

http.createServer(function(request, response) {
    // response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.writeHead(200, {'Content-Type': 'image/jpeg'});
    opfile.readImg('./imgs/sf.jpg', response);
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');