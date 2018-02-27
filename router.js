var opfile = require('./models/opfile');

function getRecall(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    function recall(data) { 
        res.write(data);
        res.end("");        
    }
    return recall;
}

module.exports={
    login:function(req, res){
        recall = getRecall(req, res);
        opfile.readfileAsync('./views/login.html', recall);
    },
    zhuce:function(req, res){
        recall = getRecall(req, res);
        opfile.readfileAsync('./views/zhuce.html', recall);
    },
    write: function(req, res) {
        function recall(data) {
            res.write(data);
            res.end("");
        }     
        opfile.writeFileAsync('./views/one.txt', 'my file', recall);   
    },
    showimg: function(req, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        opfile.readImg('./imgs/sf.jpg', res);
    }
} 