var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});
var db = require('./db.js');
app.all('*', function(req, res, next) {
    // res.writeHead(200, {"Content-Type"})
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      	res.sendStatus(200);/*让options请求快速返回*/
    }else{
      	next();
    }
});
app.post("/insert",urlencode,function(request, response){
    var data = JSON.parse(request.body.cc)
    var string='';
    var cname='';
    var id='';
    for(var key in data){
        if(key!=='id'){
            string+='"'+data[key]+'"'+','
        }
        if(key=='name'){
            cname=data[key];
        }if(key=='id'){
            id=data[key];
        }
    }
    db.select(`select * from foods where name like '%${cname}%'`,function(rows){
        if(rows.length>0){
             var number = rows[0].number+1;
             var idd = rows[0].id;
            db.insert(`update foods set number= ${number} where id=${idd}`,function(result){
            response.send(result);
        })
        }else {
            aa=string.substring(0,string.length-1);
            db.insert(`insert into foods (name,nianling,xingbie,img,jiage,miaoshu,type,number) values (${aa}) `,function(result){
                    response.send(result);
                })
        }
    })
})
app.post("/carlistjian",urlencode,function(request, response){
    var data = JSON.parse(request.body.ccc)
    var cname='';
    var id='';
    for(var key in data){
        if(key=='name'){
            cname=data[key];
        }if(key=='id'){
            id=data[key];
        }
    }
    db.select(`select * from foods where name like '%${cname}%'`,function(rows){
             var number = rows[0].number-1;
             var idd = rows[0].id;
            db.insert(`update foods set number= ${number} where id=${idd}`,function(result){
            response.send(result);
        })
    })
})
app.post("/carlistjia",urlencode,function(request, response){
    var data = JSON.parse(request.body.cccc)
    var cname='';
    var id='';
    for(var key in data){
        if(key=='name'){
            cname=data[key];
        }if(key=='id'){
            id=data[key];
        }
    }
    db.select(`select * from foods where name like '%${cname}%'`,function(rows){
             var number = rows[0].number+1;
             var idd = rows[0].id;
            db.insert(`update foods set number= ${number} where id=${idd}`,function(result){
            response.send(result);
        })
    })
})
app.get('/select', function(request, response){
	db.select('select * from vue', function(rows){
		response.send(rows);
	})	
})
app.get('/carlist', function(request, response){
    db.select('select * from foods', function(rows){
        response.send(rows);
    })  
})
app.post('/serach', urlencode,function(request, response){
    var cname = request.body.name;
     db.select(`select * from foods where name like '%${cname}%'`,function(rows){
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