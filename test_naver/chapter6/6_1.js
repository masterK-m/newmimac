//모듈을 추출

const http = require('http');

//서버를 생성합니다.
const server = http.createServer();

server.on('request', (request, response)=>{
    //console.log('request 이벤트 발생');
    response.writeHead(200);
    response.write('Hello World...!');
    response.end();
});

server.on('connection', ()=>{
    console.log('connection 이벤트 발생');
});

//서버를 실행합니다.
server.listen(52273,() =>{
    console.log('Server Running at http://127.0.0.1:52273');
});