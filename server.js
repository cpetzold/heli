var express = require('express'),
    impact = require('impact');
  
var server = express.createServer();

server.configure(function(){
  server.set('views', __dirname + '/views');
  server.use(express.methodOverride());
  server.use(express.bodyDecoder());
  server.use(server.router);
});

server.get('/', function(req, res){
  res.render('index.jade', {
    locals: { title: 'Heli' }
  });
});

var im = impact.listen(server, { root: __dirname + '/public/' });
server.use(express.staticProvider(im.root));

server.listen(8080);