var http = require('http');
var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'https://www.sojson.com/open/api/weather/json.shtml?city=北京',
    method: 'GET',
    headers: headers,
    qs: {'key1': 'xxx', 'key2': 'yyy'}
}


http.createServer(function(req, response) {

// Start the request
console.log(options);
request(options, function (error, res, body) {
    if (!error && res.statusCode == 200) {
        // Print out the response body
        console.log(body)
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        console.log('visit');
        response.write(body);
        response.end('!!');//http协议执行完毕，否则浏览器一直转
    }
})

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