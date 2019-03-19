const http = require('http');
const fs = require('fs');

//서버를 생성합니다.
//페이지 라우터 TEST
// C-> S :요청메시지
// S-> C : 응답 메시지
//Content-Type
//Status Code : wirteHead()
//body : write()
//Set Cookie
http.createServer((request,response) =>{
    if(request.url == '/a'){
        fs.readFile('Chrysanthemum.jpg',(error,file) =>{
            response.writeHead(200,{
                'Content-Type' : 'image/jpg'
            });
            response.end(file);
        });
    }else if(request.url == '/b'){
        fs.readFile('Desert.jpg',(error,file) =>{
            response.writeHead(200,{
                'Content-Type' : 'image/jpg'
            });
            response.end(file);
        });
    }else{
        response.writeHead(404);
        response.end(); 
    }
  
}).listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});