var express =require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var usocket = [];

// 访问根目录
// __dirname指向js文件的绝对路径
app.use(express.static("public"))

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on("join", function(name){
        console.log(name);
        usocket[name] = socket;
        io.emit("join", name);
    });

    socket.on("message", function(name, msg){
        console.log(name+": "+msg);
        io.emit("message", name, msg);
    });
});


// listen
http.listen(3000, function(){
    console.log('listening on *:3000');
});


