var express = require('express'),
    path= require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static');

var index = require('./routes/index');
var url =require('url');
// view engine setup
app.get("/", function(req, res) {
    res.sendfile('index.html')
});
app.use('/', express.static('/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/send', index);

app.get(/^(.+)$/, function(req, res){
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]);
});
app.listen(8080,'localhost');
console.log('server start localhost:8080');
module.exports = app;
