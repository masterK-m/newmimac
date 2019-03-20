/*쿠키사용 예제*/
var express = require("express"),
    http = require("http"),
    path = require("path");

var bodyParser = require("body-parser"),
    static = require("serve-static");

var app = express();
var cookieParser = require("cookie-parser");


app.set("port",process.env.PORT||3002);
app.use(cookieParser());
app.use(static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var router = express.Router();
/* GET 방식 */
router.route("/process/showCookie").get(function(req,res)
{
    console.log("/process/showCokie 호출");
    res.send(req.cookies);

});

router.route("/process/setCookie").get(function(req,res)
{
    res.cookie("user",{
        id:"sado119",
        name:"동연",
        auth:true
    });
    res.redirect("/process/showCookie");
});


/*localhost:3001/ 하위 내용은 다 router를 사용하게 된다고 명시*/
app.use("/",router);

/*라우터 등록된 페이지 외 호출되면 처리 등록된 라우터를 위에서부터 매칭시키고 매칭이 없을시 예외처리 호출*/
app.all("*",function(req,res){
    console.log("요청 예외처리");
    res.status(404).send("<h1>요청하신 페이지는 없습니다.</h1>") ;
});

http.createServer(app).listen(3002,function(){
   console.log("익스프레스 시작"); 
});