var express = require('express'),
    impact = require('impact');
      
var server = express.createServer();

server.configure(function(){
    server.use(express.methodOverride());
    server.use(express.bodyDecoder());
    server.use(server.router);
    server.use(express.staticProvider(__dirname + '/public'));
});

impact.listen(server);

server.listen(8080);