
var io = require('socket.io')();
io.on("connection", function(client){
    client.on('pay', function(data){
        io.emit("ok", data);
        console.log(data)
    })
    client.on('money', function(data){
        io.emit("finish", data);
    })
    client.on('pal', function(data){
        io.emit("oks", data);
        console.log(data)
    })
    client.on('socke_i', function(data){
        io.emit("ok_i", data);
        console.log(data)
    })
})
io.listen(8818)