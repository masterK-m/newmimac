//모듈을 추출합니다.
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


//서버를 생성합니다.
const app = express();

//request 이벤트 리스너를 설정합니다.
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/files',express.static(`{__dirname}/public`));
app.get('/a',(req,res)=>{
    res.send(req.query);
    //res.send('<h1>A 페이지입니다.</h1>');
});
app.get('/b/:test/:page',(req,res)=>{
    res.send(`<h1>${req.params.test}::::${req.params.page}B 페이지입니다.</h1>`);
});
app.use((req,res,next)=>{
    console.log(req.body);
    res.send('Test');
});
app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});