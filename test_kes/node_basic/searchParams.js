const{URL} = require("url");

const myURL = new URL("http://www.gilbut.co.kr/?page=3&limit=10&category=nodjs&category=javascript");
console.log("searchParams : ", myURL.searchParams);
console.log("searchParams.getAll() : ", myURL.searchParams.getAll("category")); // getAll(key) : 키에 해당하는 모든 값들을 가져옵니다. 
console.log("searchParams.get() : ", myURL.searchParams.get("limit")); // get(key) : 키에 해당하는 첫번 째 값만 가져옵니다. 
console.log("searchParams.has() : ", myURL.searchParams.has("page")); // has(key) : 해당키가 있는지 없는지를 검사합니다. 

console.log("searchParams.key() : ", myURL.searchParams.keys()); // keys() : searchParams의 모든 키를 반복기 객체로 가져옵니다. 
console.log("searchParams.values() : ", myURL.searchParams.values()); // values() : searchParams의 모든 값을 반복기 객체로 가져옵니다. 

myURL.searchParams.append("filter","es3"); // append(키, 값) : 해당 키를 추가합니다. 
myURL.searchParams.append("filter","es5");
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.set("filter","es6"); // set(키, 값) : append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가합니다. 
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.delete("filter"); // delete(키) : 해당 키를 제거합니다. 
console.log(myURL.searchParams.getAll("filter"));

console.log("searchParams.toString() : ", myURL.searchParams.toString()); // toString() 조작한 searchParams 객체를 다시 문자열로 만듭니다. 
myURL.search = myURL.searchParams.toString();