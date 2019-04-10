/*미들웨어 사용법*/
/*var express = require("express"),
    http = require("http");

var app = express();

app.use(function(req,res,next){
   console.log("첫번째 미들웨어");
    res.writeHead("200",{"Content-Type":"text/html;charset=utf8"});
    res.end("<h1>Express 서버 응답결과</h1>");
});

http.createServer(app).listen(3000,function(){
   console.log("익스프레스 시작"); 
});*/

/*var express = require("express"),
    http = require("http");

var app = express();

app.use(function(req,res,next){
    console.log("첫번째 미들웨어");
    req.user = "동연";
    next();    
});

app.use("/",function(req,res,next){
   console.log("두번째 미들웨어");
   res.writeHead("200",{"Content-Type":"text/html;charset=utf8"});
   res.end("<h1>Express 서버 응답결과 "+req.user+"이 손을들었습니다.</h1>");
});

http.createServer(app).listen(3000,function(){
   console.log("익스프레스 시작"); 
});*/

/*var express = require("express"),
    http = require("http");

var app = express();

app.use(function(req,res,next){
    console.log("첫번째 미들웨어");
    res.send({name:"박동연",age:34});
});

http.createServer(app).listen(3000,function(){
   console.log("익스프레스 시작"); 
});*/

/*var express = require("express"),
    http = require("http");

var app = express();

app.use(function(req,res,next){
    console.log("첫번째 미들웨어");
    //res.status(403).send("Fobidden");
    //res.sendStatus(403);
    res.redirect("https://google.co.kr");
});

http.createServer(app).listen(3000,function(){
   console.log("익스프레스 시작"); 
});*/

var express = require("express"),
    http = require("http");

var app = express();

app.use(function(req,res,next){
    console.log("첫번째 미들웨어");
    var userAgent = req.header("User-Agent");
    var paramName = req.query.name;
    
    res.writeHead("200",{"Content-Type":"text/html;charset=utf8"})
    res.write("<h1>Express 응답결과");
    res.write("<div><p>User-Agent:"+userAgent+"</p></div>");
    res.write("<div><p>paramName:"+paramName+"</p></div>");
    res.end();
});

http.createServer(app).listen(3000,function(){
   console.log("익스프레스 시작"); 
});