/*process.argv : 프로세스 실행시 전달되는 파라미터 정보*/
/*process.env : 프로세스 환경변수정보 */
console.log("argv 속성수 : "+process.argv.length);
console.dir(process.argv);
console.dir(process.env);

if(process.argv.length > 2)
{
    console.log("세번째 파라미터 값 : %s",process.argv[2]);
}

process.argv.forEach(function(item,index){
    console.log(index+ " : "+ item);
});
/*process.env : 프로세스 환경변수정보중 OS 해당하는 항목만 출*/
console.log(process.env["OS"]);