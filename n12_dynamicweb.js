var http = require('http');
var url = require('url');
var router = require('./router'); 
var cheerio = require('cheerio');
var    exception    =    require('./models/Exception');
http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname; 
    pathname = pathname.replace(/\//, '');// '/' -> ''

    try {
        router[pathname](req, res);
    } catch(err) {
        console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(err.toString());
        res.end("");        
    }
    console.log('finished');
    
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');