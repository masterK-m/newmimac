var num1 = 1;
var num2 =2;
var result = 3;
var string1 = num1 + '더하기' + num2 + '는 \'' + result + '\'';
console.log(string1);

// VM271:1 1더하기2는 '3'

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`; // 백틱은 IE와 사파리에선 지원 안함 
console.log(string2);

// VM435:1 1 더하기 2는 '3'