var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

module.exports = {
    Backstage:function(app){
        app.get('/back_select', function(request, response){
            db.select('select * from goods', function(rows){
                response.send(rows);
            })  
        })
        app.post("/back_delete",urlencode,function(request, response){
            console.log(request.body.id)
            db.delete('delete from goods where id=' + request.body.id,function(result){
                response.send(result);
            })
        })
        app.post("/back_update",urlencode,function(request, response){
            
            var DD=request.body.dd

            var cname = request.body.myname;
            console.log(DD)
            
            db.select(`select * from carlist where name like '%${cname}%'`,function(rows){
                console.log(rows)
                var dd = DD;
                var idd = rows[0].id;
                db.insert(`update carlist set dd= ${dd} where id=${idd}`,function(result){
                    response.send(result);
                })
            })
        })
        app.post("/backstage",urlencode,function(request, response){
            var data = JSON.parse(request.body.cc);
            var string = '';
            var cname = '';
            var id='';
            for(var key in data){
                if(key!=='id' ){
                    string+='"'+data[key]+'"'+','
                }
                if(key=='name'){
                    cname=data[key];
                }if(key=='id'){
                    id=data[key];
                }
            }
            db.select(`select * from goods where name like '%${cname}%'`,function(rows){
                if(rows.length>0){
                     var number = rows[0].number+1;
                     var idd = rows[0].id;
                    db.insert(`update goods set number= ${number} where id=${idd}`,function(result){
                    response.send(result);
                })
                }else {
                    aa = string.substring(0,string.length-1);
                    db.insert(`insert into goods (name,price,img,type,number,decorations,addTime) values (${aa}) `,function(result){
                            response.send(result);
                        })
                }
            })
        })      
    }
}