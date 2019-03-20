const url = require("url");

const URL = url.URL;
const myURL = new URL("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#andchor");
console.log("new URL() : ", myURL);
console.log("url.format() : ", url.format(myURL));
console.log("------------------------------------");

const parsedUrl = url.parse("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#andchor");
console.log("url.parse() : ", parsedUrl); // 주소를 분해합니다. 
console.log("url.format() : ", url.format(parsedUrl)); // 분해되었던 url 객체를 다시 원래 상태로 조립합니다. 