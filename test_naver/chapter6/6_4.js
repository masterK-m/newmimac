const http = require('http');
const fs = require('fs');

//서버를 생성합니다.
http.createServer((request,reponse) =>{

    reponse.writeHead(200,{'Content-Type':'text/htm',
                            'Set-Cookie':[
                                'braekfast=toast',
                                'dinner=chicken'
                            ]
    });
    reponse.end('<h1>Hello World..!</h1>')

}).listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});