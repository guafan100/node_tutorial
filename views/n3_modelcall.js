var http = require('http');
var User = require('./models/User');
var Teacher = require('./models/Teacher');
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    var user = new User(1, 'Will', 20);
    user.enter();
    var teacher = new Teacher(2, 'C', 30);
    teacher.enter();
    teacher.teach(response);
    response.end("");
}).listen(8000);
console.log('server running at http://127.0.0.1:8000/');