var db = require('../db/DBHerlper.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

module.exports = {
    Backstage:function(app){
        app.post("/back_update",urlencode,function(request, response){            
            var dd = request.body.dd
            var cname = request.body.myname;
            db.select(`select * from carlist where name like '%${cname}%'`,function(rows){
                var idd = rows[0].id;
                db.insert(`update carlist set status= ${dd} where id=${idd}`,function(result){
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
            db.select(`select * from foods where name like '%${cname}%'`,function(rows){
                if(rows.length>0){
                    var number = rows[0].number+1;
                    var idd = rows[0].id;
                    db.insert(`update foods set number= ${number} where id=${idd}`,function(result){
                        response.send(result);
                    })
                }else {
                    aa = string.substring(0,string.length-1);
                    db.insert(`insert into foods (name,price,img,type,number,decorations,addTime) values (${aa}) `,function(result){
                            response.send(result);
                        })
                }
            })
        })      
    }
}