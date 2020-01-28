var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var http = require('https').Server(app);

app.set('port',process.env.PORT || 3000);
app.use(express.static('public'));

const server=app.listen(app.get('port'),()=>{
  console.log('server on port',app.get('port'));
})
var io = require('socket.io')(server);


app.get('/', function(req, res){
  console.log('entró')
res.redirect('index.html');
});

io.on('connection', function(socket){
socket.on('stream',function(image){
socket.broadcast.emit('stream', image);
});
});
