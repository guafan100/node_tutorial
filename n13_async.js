var async = require('async');   

function oneFun() {
    ii = 0;
    setInterval(function(){
        console.log('aaa='+ new Date());
        ii++;
        if(ii === 3) {
            clearInterval(this);
        }
    }, 1000);
    console.log('oneFun');
}

function twoFun() {
    jj = 0;
    setInterval(function(){
        console.log('bbb='+ new Date());
        jj++;
        if(jj === 3) {
            clearInterval(this);
        }
    }, 1000);
    console.log('twoFun');
}

// oneFun();
// twoFun();

function exec() {
    // async.parallel({ // series, parallel 串行无关联， 并行无关联如果是并行， 其中一个出错，会破坏掉其他的回调函数，但是打印继续完成。
    //     one: function(done) {
    //         ii = 0;
    //         setInterval(function(){
    //             console.log('aaa='+ new Date());
    //             ii++;
    //             if(ii === 3) {
    //                 clearInterval(this);
    //                 done(null, 'one'); //只要done不执行或者done里有err，就不继续往下执行.
    //             }
    //         }, 1000);
    //     },
    //     two: function(done) {
    //         jj = 0;
    //         setInterval(function(){
    //             console.log('bbb='+ new Date());
    //             jj++;
    //             if(jj === 3) {
    //                 clearInterval(this);
    //                 done(null, 'two');
    //             }
    //         }, 1000);
            
    //     }
    // }, function(err, rs) {
    //     console.log(err);
    //     console.log(rs);
    // })
    async.waterfall([ // series, parallel 串行无关联， 并行无关联如果是并行， 其中一个出错，会破坏掉其他的回调函数，但是打印继续完成。
        function(done) {
            ii = 0;
            setInterval(function(){
                console.log('aaa='+ new Date());
                ii++;
                if(ii === 3) {
                    clearInterval(this);
                    done(null, 'one'); //只要done不执行或者done里有err，就不继续往下执行.
                }
            }, 1000);
        },
        function(preValue, done) {
            jj = 0;
            setInterval(function(){
                console.log('bbb='+ new Date());
                jj++;
                if(jj === 3) {
                    clearInterval(this);
                    done(null, preValue + 'two');
                }
            }, 1000);
            
        }
    ], function(err, rs) {
        console.log(err);
        console.log(rs);
    })
}

exec();

console.log('main process finished');