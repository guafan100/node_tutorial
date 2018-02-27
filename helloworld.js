var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    console.log('visit');
    response.write('hello world');
    response.end('!!');//http协议执行完毕，否则浏览器一直转
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');

// var http =  require('http');  
// http.createServer(function  (request, response)  {  
//    if(request.url!=="/favicon.ico"){  //清除第2次visit
//     response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});  
//     console.log('visit');  
//     response.write('hello world');  
//    }
// }).listen(8000);  
// console.log('Server  running  at  http://127.0.0.1:8000/');