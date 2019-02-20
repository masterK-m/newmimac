/*URL객체를 만들기 위해 URL 모듈 불러온다*/
var url = require("url");
/*url.parse -> 주소문자열 파싱하여 URL객체로 데이터 분리*/
var curURL = url.parse("https://m.search.naver.com/search.naver?query=jobs&where=pc&tp=1");
/*URL 객체를 문자열로 변환*/
var curStr = url.format(curURL);

console.log("문자열 주소:%s",curStr);
console.dir(curURL);

var queryString = require("querystring");
var param1 = queryString.parse(curURL.query);
/*구분자를 통해 가지고 오고싶은 수만큼 가져올수있다*/
var param2 = queryString.parse(curURL.query,"&","=",{maxKeys:2}); 

console.log(param1);
console.log(param2);
console.log("파라미터중 query값 : %s",param1.query);
console.log("파라미터중 where값 : %s",param1.where);