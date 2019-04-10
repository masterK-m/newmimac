/*바디 파서를 사용해서 파라미터 가져오기*/
var express = require("express"),
    http = require("http"),
    path = require("path");

var bodyParser = require("body-parser"),
    static = require("serve-static");

var app = express();

app.set("port",process.env.PORT||3000);
/*localhost:3000/login.html*/
app.use(static(path.join(__dirname,"public")));
/*localhost:3000/public/login.html
app.use("/public",static(path.join(__dirname,"public")));*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(function(req,res,next){
    console.log("첫번째 미들웨어");
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.pw || req.query.pw;
 
    
    res.writeHead("200",{"Content-Type":"text/html;charset=utf8"})
    res.write("<h1>Express 응답결과");
    res.write("<div><p>paramId:"+paramId+"</p></div>");
    res.write("<div><p>paramPassword:"+paramPassword+"</p></div>");
    res.end();
});

http.createServer(app).listen(3000,function(){
   console.log("익스프레스 시작"); 
});