//main aplication.
var express = require('express'); 
var app  = express();
var fs = require('fs');
var 
app.get('/', function(req, res){
    res.send('Hello word!!');
});
app.get('/login', function(req,res){
    res.send('Login please!!');
});
app.listen(3000, function(){
    console.log('Connected 3000 port!!!!');
});