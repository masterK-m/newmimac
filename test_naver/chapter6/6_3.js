const http = require('http');
const fs = require('fs');

//서버를 생성합니다.
http.createServer((request,resonse) =>{

    fs.readFile('Chrysanthemum.jpg',(error,file)=>{
        resonse.writeHead(200,{'Content-Type':'img/jpg'});
        resonse.end(file);
    });

}).listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});