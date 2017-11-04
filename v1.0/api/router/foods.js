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
        app.post("/car_insert",urlencode,function(request, response){
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
                    return false;
                }else {
                    aa = string.substring(0,string.length-1);
                    db.insert(`insert into carlist (name,img,price,number,type,decorations,status) values (${aa})`,function(result){
                            response.send(result);
                        })
                }
            })
            return false;
        })
        app.post('/serach', urlencode,function(request, response){
            var cname = request.body.name;
             db.select(`select * from foods where name like '%${cname}%'`,function(rows){
                response.send(rows);
            })  
        })
        app.post("/car_delete",urlencode,function(request, response){
            var data = JSON.parse(request.body.cc);
            db.delete(`delete from carlist where id=${data.id}`,function(result){
                response.send(result);
            })
        })
        app.post("/update",urlencode,function(request, response){
            db.update('update foods set '+ request.body +' where id=' + request.body.id,function(result){
                response.send(result);            
            })
        })   
         app.get('/pinglun', function(request, response){
            db.select('select * from review', function(rows){
                response.send(rows);
            })  
        })
          app.get('/my_select', function(request, response){
            db.select('select * from ai', function(rows){
                response.send(rows);
            })  
        })
        app.post("/review_insert",urlencode,function(request, response){
            var data = request.body;
            var zifu = '';
             for(var key in data){
                zifu+='"'+data[key]+'"'+','
            }
            aa = zifu.substring(0,zifu.length-1);
            db.insert(`insert into review (content,star) values (${aa})`,function(result){
                    response.send(result);
                })
        })
        app.post("/ai_insert",urlencode,function(request, response){
            var data = JSON.parse(request.body.cu);
            var str = '';
            var cname = '';
            var id='';
            for(var key in data){
                if(key!=='id' && key!='addTime'){
                    str+='"'+data[key]+'"'+','
                }
                if(key=='name'){
                    cname=data[key];
                }if(key=='id'){
                    id=data[key];
                }
            }
            db.select(`select * from ai where name like '%${cname}%'`,function(rows){
                if(rows.length>0){
                    response.send('false');
                }else{
                    aa = str.substring(0,str.length-1);
                    db.insert(`insert into ai (name,img,price,number,type,decorations) values (${aa})`,function(result){
                            response.send(result);
                        })
                }
            })
            
        })    
        
     }

}