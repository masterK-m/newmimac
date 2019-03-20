/*express 사용 기초*/
var express = require("express"),
    http = require("http");

var app = express();
app.set("port",process.env.PORT||3000);
http.createServer(app).listen(app.get("port"),function(){
   console.log("익스프레스 시작"); 
});