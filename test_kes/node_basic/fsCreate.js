const fs = require('fs');

/*
    fs.access(경로, 옵션, 콜백) : 폴더나 파일에 접근할 수 있는지를 체크합니다. 
    두 번째 인자로 상수들을 넣었습니다. 
    F_OK는 파일 존재여부, 
    R_OK는 읽기 권한여부,
    W_OK는 쓰기 권한여부를 체크합니다
    파일/폴더나 권한이 없다면 에러가 발생하는데, 파일/폴더가 없을 때의 에러코드는 ENOENT입니다. 

    fs.mkdir(경로, 콜백) : 폴더를 만드는 메서드입니다. 이미 폴더가 있다면 에러가 발생하므로 먼저 access() 메서드를 호출해서 확인하는 것이 중요합니다.

    fs.open(경로, 옵션, 콜백) : 파일의 아이디(fd 변수)를 가져오는 메서드입니다. 
    파일이 없다면 파일을 생성한 뒤 그 아이디를 가져옵니다.
    가져온 아이디를 사용해 fs.read()나 fs.write()로 읽거나 쓸 수 있습니다. 
    두 번째 인자로 어떤 동작을 할 것인지 설정할 수 있습니다. 
    쓰려면 w, 읽으려면 r, 기존 파일에 추가하려면 a입니다. 
    예제에서는 w로 설정했으므로 파일이 없을 때 새로 만들 수 있었습니다. 

    fs.rename(기존경로, 새경로, 콜백) : 파일의 이름을 바꾸는 메서드입니다. 기존 파일 위치와 새로운 파일 위치를 적어주면 됩니다.
    반드시 같은 폴더를 지정할 필요는 없으므로 잘라내기 같은 기능을 할 수도 있습니다. 
*/
fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err)=>{
    if(err){
        if(err.code == 'ENOENT'){
            console.log('폴더없음');
            fs.mkdir('./folder', (err)=>{
                if(err) throw err;

                console.log('폴더 만들기 성공');
                fs.open('./folder/file.js','w',(err, fd)=>{
                    if(err) throw err;

                    console.log('빈 파일 만들기 성공', fd);
                    fs.rename('./folder/file.js', './folder/newfile.js', (err)=>{
                        if(err) throw err;

                        console.log('이름 바꾸기 성공!');
                    });
                });
            });
        }else{
            throw err;
        }
    }else{
        console.log('폴더 이미 있음');
    }
});