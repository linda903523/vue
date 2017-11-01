var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

module.exports = {
    Food:function(app){
        app.post("/insert",urlencode,function(request, response){
            db.insert('insert into foods set' + request.body,function(result){
                response.send(result);            
            })
        })
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