//모듈을 추출합니다.
const express = require('express');

//서버를 생성합니다.
const app = express();

//request 이벤트 리스너를 설정합니다.
app.use((req, res, next) =>{
    req.a = 1;
    //res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.end('<h1>Hello express</h1>');
    /*res.status(404).send({
        name : '윤인성',
        job : '프리랜서'
    });*/
    console.log('첫번째 이벤트 핸들러');
    next();
});
app.use((req, res, next) =>{
    //res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.end('<h1>Hello express</h1>');
    /*res.status(404).send({
        name : '윤인성',
        job : '프리랜서'
    });*/
    console.log(req.a);
    console.log('두번쨰 이벤트 핸들러');
    next();
    
});
app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});