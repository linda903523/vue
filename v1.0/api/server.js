var express = require('express');
var app = express();
// var bodyparser = require('body-parser');
// var urlencode = bodyparser.urlencoded({extended: false});
var db = require('./db.js');

app.all('*', function(req, res, next) {
    // res.writeHead(200, {"Content-Type"})
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      	res.sendStatus(200);/*让options请求快速返回*/
    } else{
      	next();
    }
});

// app.post("/insert",_data,function(request, response){
//     db.insert('insert into foods set' + _data,function(result){
//         response.send(result);            
//     })
// })

app.get('/select', function(request, response){
	db.select('select * from foods', function(rows){
        console.log(rows)
		response.send(rows);
	})	
})

// app.post("/delete",_data,function(request, response){
//     db.delete('delete from foods where id=' + _data.id,function(result){
//         response.send(result);
//     })
// })
// app.post("/update",_data,function(request, response){
//     db.update('update foods set '+ _data +' where id=' + _data.id,function(result){
//         response.send(result);            
//     })
// })

app.listen(88);