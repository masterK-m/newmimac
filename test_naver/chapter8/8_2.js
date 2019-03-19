//모듈을 추출합니다.
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

//서버를 생성합니다.
const app = express();

//request 이벤트 리스너를 설정합니다.
app.use(morgan('combined'));
app.use(cookieParser());


app.use((req, res, next) =>{
    // 쿠리를 입력한다.
   res.cookie('name','윤인성');
    // 응답합니다.
   res.send(req.cookies);
});

app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});