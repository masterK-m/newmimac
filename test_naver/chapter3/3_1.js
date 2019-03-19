
//전역 변수/객체 
console.log(`filename ${__filename}`);
console.log(`dirname ${__dirname}`);
console.log("%d %s %j", 273, "a", {a:10});

//ES6
console.time("alpha");
/*let output = 1;
for(let i=1; i<=10; i++){
    output *= i;
}

console.log(`Result: ${output}`);
*/

setTimeout(function(){
    console.timeEnd("alpha");
},1000);


console.timeEnd("alpha");