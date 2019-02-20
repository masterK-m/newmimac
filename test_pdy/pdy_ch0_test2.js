var calc_module = require("./calc_module");
console.log(calc_module.add(1,3));
/* npm install nconf --save  명령어로 nconf 모듈 설치*/
var nconf = require("nconf");
/*환경 변수정보를 저장한다*/
nconf.env();

console.log("OS 환경변수 값 %s",nconf.get("OS"));