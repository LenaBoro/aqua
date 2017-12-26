var express = require('express'),
    path= require('path'),
    app = express(),
    bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var url =require('url');
// view engine setup

app.use('/', express.static('/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/send', index);
app.use('/users', users);

app.get(/^(.+)$/, function(req, res){
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]);
});

app.listen(8081,'localhost');
console.log('server start localhost:8081');
module.exports = app;
