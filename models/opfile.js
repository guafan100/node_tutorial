var fs = require('fs'); //操作文件的模块
module.exports = {
    readfileSync: function(path) {      //同步读取
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");            
    },
    
    readfileAsync: function(path, recall) {      //异步执行
        fs.readFile(path, function(err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log(data.toString());
              recall(data);
            }
        });
        console.log("异步方法执行完毕");
    },

    writeFileAsync:function(path, data, recall){    //异步方式
        fs.writeFile(path, data, function (err)  {
            if (err) {
                throw err;
            }
            console.log('It\'s saved!');  //文件被保存
            recall('write successfully');
          });
    },

    writeFileSync:function(path,data){  //同步方式
        fs.writeFileSync(path, data);
        console.log("同步写文件完成");
    },
    
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,  filedata)  {
            if  (err)  {
                console.log(err);
                return;
            }else{
                res.write(filedata, 'binary');
                res.end();
            }
        });
    }

} 