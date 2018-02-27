var http = require('http');
var url = require('url');
var router = require('./router'); 
var    exception    =    require('./models/Exception');
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname; 
    pathname = pathname.replace(/\//, '');// '/' -> ''

    try {
        // router[pathname](request, response);
        data = exception.expfun(0);
        response.write(data);
        response.end("");  
    } catch(err) {
        console.log(err);
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.write(err.toString());
        response.end("");        
    }
    console.log('finished');
    
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');