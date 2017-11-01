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

app.post('/insert', function(request, response){
    var newData = request.body;
    console.log(newData)
    var sql = `insert into dishname (name, classify, number, picture, price, time, creatDate, status) values ('${newData.name}', '${newData.classify}','${newData.number}','${newData.picture}','${newData.price}','${newData.time}','${newData.creatDate}','${newData.status}')`;
    db.insert(sql, function(data){
        response.send(data);
    })  
})

// app.post("/insert",'_data',function(request, response){
//     console.log(121)
//     db.insert('insert into goods set' + '_data',function(result){
//         response.send(result);            
//     })
// })
app.post("/insert",function(request, response){
    var data = JSON.parse(request.body.cc)
    var string='';
    var name='';
    var id='';
    for(var key in data){
        if(key!=='id'){
            string+='"'+data[key]+'"'+','
        }
        if(key=='name'){
            name=data[key];
        }if(key=='id'){
            id=data[key];
        }
    }
    db.select(`select * from menu where name like '%${name}%'`,function(rows){
        if(rows.length>0){
             var number = rows[0].number+1;
             var idd = rows[0].id;
            db.insert(`update menu set number= ${number} where id=${idd}`,function(result){
            response.send(result);
        })
        }else {
            aa=string.substring(0,string.length-1);
            db.insert(`insert into menu (name,img,price,type) values (${aa}) `,function(result){
                    response.send(result);
                })
        }
    })
})
app.get('/select', function(request, response){
    // console.log(request)
	db.select('select * from goods', function(rows){
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