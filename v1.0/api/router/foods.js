var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

module.exports = {
    Food:function(app){
        app.get('/select', function(request, response){
            db.select('select * from foods', function(rows){
                response.send(rows);
            })  
        })
        app.get('/re_select', function(request, response){
            db.select('select * from foods where type=1', function(rows){
                response.send(rows);
            })  
        })
        app.get('/liang_select', function(request, response){
            db.select('select * from foods where type=2', function(rows){
                response.send(rows);
            })  
        })
        app.get('/tian_select', function(request, response){
            db.select('select * from foods where type=3', function(rows){
                response.send(rows);
            })  
        })
        app.get('/ying_select', function(request, response){
            db.select('select * from foods where type=4', function(rows){
                response.send(rows);
            })  
        })
        app.get('/carlist', function(request, response){
            db.select('select * from carlist', function(rows){
                response.send(rows);
            })  
        })
        app.post("/insert",urlencode,function(request, response){
            var data = JSON.parse(request.body.cc);
            var string = '';
            var cname = '';
            var id='';
            for(var key in data){
                if(key!=='id' && key!='addTime'){
                    string+='"'+data[key]+'"'+','
                }
                if(key=='name'){
                    cname=data[key];
                }if(key=='id'){
                    id=data[key];
                }
            }
            db.select(`select * from carlist where name like '%${cname}%'`,function(rows){
                if(rows.length>0){
                     var number = rows[0].number+1;
                     var idd = rows[0].id;
                    db.insert(`update carlist set number= ${number} where id=${idd}`,function(result){
                    response.send(result);
                })
                }else {
                    aa = string.substring(0,string.length-1);console.log(aa)
                    db.insert(`insert into carlist (name,img,price,number,type,decorations) values (${aa}) `,function(result){
                            response.send(result);
                        })
                }
            })
        })
        app.post("/delete",urlencode,function(request, response){
            db.delete('delete from foods where id=' + request.body.id,function(result){
                response.send(result);
            })
        })
        app.post("/update",urlencode,function(request, response){
            db.update('update foods set '+ request.body +' where id=' + request.body.id,function(result){
                response.send(result);            
            })
        })       
    }
}