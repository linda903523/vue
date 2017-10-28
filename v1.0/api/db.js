var mysql = require('mysql');

//创建连接池
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port     : 3306,
  database : 'vue'
});


module.exports = {
    insert:function(tsql, callback){
        pool.query(tsql,function(error, rows){
            if(error) throw error;
            callback(rows);
        })
    },
    select: function(tsql, callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;
            callback(rows);
        })
    },
    delete: function(tsql, callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;
            callback(rows);
        })
    },
    update: function(tsql, callback){
        pool.query(tsql, function(error, rows){
            if(error) throw error;
            callback(rows);
        })
    },
}