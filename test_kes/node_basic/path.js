const path = require("path");

const string = __filename;

console.log("path.sep : ", path.sep); // 경로의 구분자
console.log("path.delimiter : ", path.delimiter); // 환경변수의 구분자. process.env.PATH를 입력하면 여러개의 경로가 이 구분자로 구분되어 있다. Window는 세미콜론(;), POSIX는 콜론(:)
console.log("---------------------------------");
console.log("path.dirname() : ", path.dirname(string)); // 파일이 위치한 폴더 경로를 보여줌
console.log("path.extname() : ", path.extname(string)); // 파일의 확장자를 보여줌
console.log("path.basename() : ", path.basename(string)); // 파일의 이름(확장자 포함)을 보여줌
console.log("path.basename() : ", path.basename(string, path.extname(string))); // 파일의 이름만 표시하고 싶다면 basename의 두번 째 인자로 파일의 확장자를 넣어주면 됨 
console.log("---------------------------------");
console.log("path.parse()", path.parse(string)); // 파일의 경로를 root, dir, base, ext, name으로 분리 
console.log("path.format() : ", path.format({ // path.parse() 한 객체를 파일 경로로 합침 
    dir : "C:\\user\\zerocho",
    name : "path",
    ext : ".js",
}));
console.log("path.normalize() : ", path.normalize("C://users\\\zerocho\\\path.js")); // /나 \를 실수로 여러번 사용했거나 혼용햇을 때 정상적인 경로로 변환해줌 
console.log("---------------------------------");
console.log("path.isAbsolute() : ", path.isAbsolute("C:\\")); // 파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려줌
console.log("path.isAbsolute() : ", path.isAbsolute("./home")); // 경로를 두 개 넣으면 첫번째 경로에서 두번째 경로로 가는 법을 알려줌 
console.log("---------------------------------");
console.log("path.relative() : ", path.relative("C:\\users\\zerocho\\path.js","C:\\")); 
// path.join(경로, ...)  여러 인자를 넣으면 하나의 경로로 합쳐줍니다. 상대경로인 ..(부모 디렉터리)와 .(현 디렉터리)도 알아서 처리해줍니다. 
console.log("path.join() : ", path.join(__dirname, "..", "users", ".", "zerocho")); // path.join()과 비슷하지만 차이가 있습니다. 