var http = require('http');
var url = require('url');
var router = require('./router');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    // function recall(data) {
    //     response.write(data);
    //     response.end("ok");
    // }

    // opfile.readfileAsync('./views/login.html', recall);
    // console.log('main function finished');

    var pathname = url.parse(request.url).pathname; 
    pathname = pathname.replace(/\//, '');// '/' -> ''
    router[pathname](request, response);
    
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');