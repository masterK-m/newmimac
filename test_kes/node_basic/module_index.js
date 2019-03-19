const{odd,even} = require('./module_var');
const checkNumber = require('./module_func');

function checkStringOddOrEven(str){
    if(str.length % 2){ // 홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));