const express = require('express')
const app = express();
var socket=require('socket.io')
const http = require('http');

var server=app.listen(3000, () => {
    console.log('listening for requests on port 3000');
});

var io=socket(server);

io.on('connection',(socket)=>{
    console.log(`New connection ${socket.id}`);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data)
    });

    socket.on('typing',function(data){
        io.sockets.emit('typing',data)
    });

})
