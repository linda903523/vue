var mysql = require('mysql');

//创建连接池
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port     : 3306,
  database : 'vue',
  multipleStatements: true
});
module.exports = {
    insert:function(tsql,data,callback){
        pool.query(tsql,function(error, rows){
            if(error) throw error;           
        })
    },
    select: function(tsql,callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;
            callback(rows)
        })
    },
    delete: function(tsql,data,callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;          
        })
    },
    update: function(tsql,data,callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;
            callback(rows);
        })
    },
}