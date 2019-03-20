const{odd,even} = require('./module_var'); // 불러옴

function checkOddOrEven(num){
    if(num%2){ //홀수면
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven; // 대입 