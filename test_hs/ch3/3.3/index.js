const {
  odd,
  even
} = require('./var'); //비구조화 할당
const checkNumber = require('./func');

/*
//구 문법
const variable = require('./var');
console.log(variable.odd);
console.log(variable.even);

module.exports = {
  odd : odd,
  even : even
}


*/

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));