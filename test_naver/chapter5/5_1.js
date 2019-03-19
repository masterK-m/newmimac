process.on('exit', (code) =>{
    console.log('안녕히 가거라~');
    console.log(code);
});

console.log('실행 중입니다.');

process.exit(273);

// 0 - 안전/정상 종료
// 1 - 비정상적인 종료

process.on('uncaughtException',(erro)=>{
    console.log('에외가 발생했군 ?');
    console.log(error);
});

error.error.error();