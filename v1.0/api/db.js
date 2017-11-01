var mysql = require('mysql');

//创建连接池
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port     : 3306,
  database : 'cnrmall'
});


module.exports = {
    insert:function(tsql,_data,callback){
        pool.query(tsql,function(error, rows){
            if(error) throw error;
            console.log(rows);
            callback(rows);
        })
    },
    select: function(tsql,callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;
            callback(rows);
        })
    },
    delete: function(tsql,data,callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;
            callback(rows);
        })
    },
    update: function(tsql,data,callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;
            callback(rows);
        })
    },
}