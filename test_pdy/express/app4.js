/*get,post,url방식으로 라우터 설정*/
var express = require("express"),
    http = require("http"),
    path = require("path");

var bodyParser = require("body-parser"),
    static = require("serve-static");

var app = express();

app.set("port",process.env.PORT||3001);
app.use(static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var router = express.Router();
/* GET 방식 */
router.route("/process/login").get(function(req,res)
{
    console.log("/process/login GET 에서 처리");
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.pw || req.query.pw; 
    
    res.writeHead("200",{"Content-Type":"text/html;charset=utf8"})
    res.write("<h1>Express 응답결과");
    res.write("<div><p>paramId:"+paramId+"</p></div>");
    res.write("<div><p>paramPassword:"+paramPassword+"</p></div>");
    res.end();

});
/* POST 방식 */
router.route("/process/login").post(function(req,res)
{
    console.log("/process/login POST 에서 처리");
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.pw || req.query.pw; 
    
    res.writeHead("200",{"Content-Type":"text/html;charset=utf8"})
    res.write("<h1>Express 응답결과");
    res.write("<div><p>paramId:"+paramId+"</p></div>");
    res.write("<div><p>paramPassword:"+paramPassword+"</p></div>");
    res.end();

});
/* URL 파라미터 방식 */
router.route("/process/login/:name").get(function(req,res)
{
    console.log("/process/login POST 에서 처리");
    var paramName = req.params.name;    
    
    res.writeHead("200",{"Content-Type":"text/html;charset=utf8"})
    res.write("<h1>Express 응답결과");
    res.write("<div><p>paramName:"+paramName+"</p></div>");    
    res.end();
});

/*localhost:3001/ 하위 내용은 다 router를 사용하게 된다고 명시*/
app.use("/",router);

/*라우터 등록된 페이지 외 호출되면 처리 등록된 라우터를 위에서부터 매칭시키고 매칭이 없을시 예외처리 호출*/
app.all("*",function(req,res){
    console.log("요청 예외처리");
    res.status(404).send("<h1>요청하신 페이지는 없습니다.</h1>") ;
});

http.createServer(app).listen(3001,function(){
   console.log("익스프레스 시작"); 
});