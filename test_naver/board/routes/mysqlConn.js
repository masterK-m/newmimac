 
//   MySQL 로드
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 5,
    host     : 'localhost',
    user     : 'root',
    password : 'mbr1234',
    database : 'mydb'   
});


module.exports = pool;
//생성한 커넥션 풀링을 파일 외부에서 사용하도록 지정하는 코드