/*세션 사용 예제*/
var express = require("express"),
    http = require("http"),
    path = require("path");

var bodyParser = require("body-parser"),
    static = require("serve-static");

var app = express();
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");

app.set("port",process.env.PORT||3002);
app.use(static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    secret:"my key",
    resave:true,
    saveUninitialized:true
}));

var router = express.Router();

router.route("/process/product").get(function(req,res)
{
    console.log("/process/product 호출");
    if(req.session.user)
    {
        res.redirect("/product.html");        
    }
    else
    {
        res.redirect("/login2.html");
    }

});

router.route("/process/login").post(function(req,res)
{
    console.log("/process/login POST 에서 처리");
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.pw || req.query.pw;     
    
    if(req.session.user)
    {
        console.log("이미 로그인된 상태");
        res.redirect("/public/product");
    }
    else
    {
        req.session.user = {id:"sado119",name:"동연",auth:true};
        res.writeHead("200",{"Content-Type":"text/html;charset=utf8"})
        res.write("<h1>로그인성공</h1>");
        res.write("<div><p>paramId:"+paramId+"</p></div>");
        res.write("<div><p>paramPassword:"+paramPassword+"</p></div>");
        res.write("<a href='/process/product'>상품 페이지로 이동</a>");
        res.end();
        
    }
});

router.route("/process/logout").get(function(req,res)
{
    console.log("/process/logout POST 에서 처리");    
    
    if(req.session.user)
    {
        console.log("로그아웃 합니다.");
        req.session.destroy(function(err){
            if(err){throw err;}
            
            console.log("세션삭제후 로그아웃");
            res.redirect("/login2.html");
        })
    }
    else
    {
        console.log("아직 로그인 되지 않았습니다.");
        res.redirect("/login2.html");        
    }
});

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