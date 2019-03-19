const fs = require('fs');
/*
    fs.readdir(경로, 콜백) : 폴더 안의 내용물을 확인할 수 있습니다. 배열 안에 내부 파일과 폴더명이 나옵니다.

    fs.unlink(경로, 콜백) : 파일을 지울 수 있습니다. 파일이 없다면 에러가 발생하므로 먼저 파일이 있는지를 꼭 확인해야 합니다. 

    fs.rmdir(경로, 콜백) : 폴더를 지울 수 있습니다. 폴더 안에 파일이 있다면 에러가 발생하므로 먼저 내부 파일을 모두 지우고 호출해야 합니다. 
*/
fs.readdir('./folder', (err, dir)=>{
    if(err) throw err;

    console.log('폴더 내용 확인', dir);
    fs.unlink('./folder/newFile.js', (err)=>{
        if(err) throw err;

        console.log('파일 삭제 성공');
        fs.rmdir('./folder',(err)=>{
            if(err) throw err;
            console.log('폴더 삭제 성공');
        });
    });
});