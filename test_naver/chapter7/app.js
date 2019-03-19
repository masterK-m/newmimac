//모듈을 추출합니다.
//const ejs = require('ejs');
const pug= require('pug');
const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
    fs.readFile('jadePage.jade','utf8',(error,file) =>{
        //console.log(file.toString('utf8'));
       /* const output = ejs.render(file,{
            name : '윤인성 테스트'

        });*/
        //PUG 모듈을 활용합니다.
        const fn = pug.compile(file);
        const output = fn ({
            name : '윤인성 테스트',
            datas :[{
                i:10,
                name:'테스트A'
            },{
                i:11,
                name:'테스트B'
            }]
        });
        //응답합니다.
        response.writeHead(200,{
            'Content-Type' : 'text/html;charset=utf-8'
        });
        response.end(output);
    });

   
   
}).listen(52273);