function fun2(res) {
    console.log('this is fun2');
    res.write('hello this is fun2');
}

module.exports = fun2;

/*      
//支持多个函数      
module.exports={      
    getVisit:function(){      
        return  visitnum++;      
    },      
    add:function(a,b){      
        return  a+b;      
    }      
}      
*/