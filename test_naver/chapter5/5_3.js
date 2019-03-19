const onUncaughtException = (error) => {
    console.log('예외가 발생했군 ?');
    process.removeListener('uncaughtException',onUncaughtException);

};

process.once('uncaughtException', onUncaughtException);
//2초 간격으로 예외를 발생시킵니다.
let count = 0;
const test = () =>{
    setTimeout(test,2000);
    error.error.error();
};

setTimeout(test,2000);