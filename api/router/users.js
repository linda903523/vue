var db = require('../db/DBHerlper.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

module.exports = {
    User: function(app){
        app.post("/login",urlencode,function(request, response){
            var uname = request.body.username;
            db.select(`select * from users where username like '%${uname}%'`,function(rows){
                if(rows[0].password == request.body.password){
                    response.send({status:true})
                }else{
                    response.send({status:false,message:'登录出错'})
                }
            })
        })
        app.post("/register", urlencode, function(request, response){
            db.insert('insert into users set' + request.body,function(result){
                response.send(result);            
            })
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