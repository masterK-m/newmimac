const http = require('http');
const fs = require('fs');

//서버를 생성합니다.
http.createServer((request,response) =>{

    response.writeHead(302,{'Location':'http://www.mimacstudy.com'});
    response.end();
}).listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});