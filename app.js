'use strict';
var http = require('http')
var nodeStatic = require('node-static')
var socketIO = require('socket.io')

var fileServer = new(nodeStatic.Server)();
var app = http.createServer(function(req, res) {
  fileServer.serve(req, res);
}).listen(3000);
