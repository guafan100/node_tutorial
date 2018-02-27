var http = require('http');
var otherfun = require('./models/otherfuns.js')
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fun1(response);
    otherfun(response);
    // otherfun.fun3();
    // otherfun['fun3']();
    response.end("");
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');

function fun1(res) {
    console.log('fun1');
    res.write('this is fun1');
}

