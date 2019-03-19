process.on('exit', (code) => {
    console.log('안녕히 가세요~!');
});

process.on('uncaughtException', (error) => {
    console.log("예외발생~!!!");
});

var count = 0;
let test = function (){
    //탈출 코드
    count = count + 1;
    if(count > 3){ retrun; }

    //예외처리를 강제로 발생
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test,2000);