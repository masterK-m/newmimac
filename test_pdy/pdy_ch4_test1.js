process.on("exit1",function(){
    console.log("exit1 이벤트 발생");
});
console.log("1초뒤 exit1 이벤트 호출");
setTimeout(function(){    
    /*process.exit1();*/
    process.emit("exit1");
},1000);

process.on("exit2",function(){
    console.log("exit2 이벤트 발생");
});
console.log("1초뒤 exit2 이벤트 호출");
setTimeout(function(){    
    process.emit("exit2");
},1000);
/*
process.on("exit1",function(){
    console.log("exit1 이벤트 발생");
});
process.on("exit2",function(){
    console.log("exit2 이벤트 발생");
});
process.emit("exit1");
process.emit("exit2");
*/

