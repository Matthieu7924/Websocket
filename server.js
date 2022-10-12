var app = require('express')();//Express.js est un framework pour construire des applications web basées sur Node.js.
//Express est le framework standard pour le développement de serveur en Node.js4.

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get("/",function(req,res)
{
    res.sendFile(__dirname + '/index.html');
})


io.on('connection', function(socket){
    console.log('a user is connected');
    socket.on('disconnection' ,function(){
        console.log('a user is diconnected')
    })
    socket.on('chat message' ,function(msg){
        console.log('message reçu :' + msg);
        io.emit('chat message',msg);
    })
})

http.listen(3000,function()
{
    console.log("Server running on 3000")

})