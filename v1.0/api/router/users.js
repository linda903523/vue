var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

module.exports = {
    User: function(app){
        app.post("/login",urlencode,function(request, response){
            console.log(request.body)
            db.select(`select * from users`,function(result){
                response.send(result);
            })
        })
        app.post("/register", urlencode, function(request, response){
            db.insert('insert into users set' + request.body,function(result){
                response.send(result);            
            })
        })
        app.post("/user_delete", urlencode, function(request, response){
            db.delete('delete from users where id=' + request.body.id,function(result){
                response.send(result);
            })
        })
        app.post("/user_updata", urlencode, function(request, response){
            db.update('update users set '+ request.body +' where id=' + request.body.id,function(result){
                response.send(result);            
            })
        }) 
    }    
};