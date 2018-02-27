var http = require('http');
var url = require('url');
var router = require('./router'); 
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname; 
    pathname = pathname.replace(/\//, '');// '/' -> ''
    router[pathname](request, response);
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');