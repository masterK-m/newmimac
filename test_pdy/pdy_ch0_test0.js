console.log("hi");
console.log("숫자 보여주기 %d",1);
console.log("문자열 보여주기 %s","가나다라");

var result = 0;
/*console.time("변수명") -> 함수실행 -> console.timeEnd("변수명")  : 함수실행에 걸리는 시간 출력*/
console.time("time_test");

for(var i =0 ;  i < 1000 ; i++)
{    
    result += i;   
}

console.timeEnd("time_test");
console.log("결과물 %d",result);
/* __filename,__dirname 내부 전역변수*/
console.log("현재 실행판 파일 이름 %s",__filename);
console.log("현재 실행한 파일 패스 %s",__dirname);

var Person  = {name:"박동연",age:"34"}
/* console.dir -> 객체 속성 출력 */
console.dir(Person);
