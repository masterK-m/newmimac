const http = require('http');
const server = http.createServer((request,resonse) =>{
    //response.writeHead(200);
    //response.end('Hello World!');
    resonse.writeHead(200,{
        'Content-Type' : 'text/html'
    });

    resonse.end('<h1>Hello World..!</h1>');
}).listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});