var util = require("util");
var eventEmitter = require("events").EventEmitter

var Calc = function(){
    var self = this;
    this.on("stop",function(){
        console.log("stop 이벤트 호출"); 
    });
};
/*util은 객체가 손쉽게 객체가 상속받는것을 도와준다*/
util.inherits(Calc,eventEmitter);

Calc.prototype.add = function(a,b){
  return a+b;    
};

module.exports = Calc;
module.exports.title = "ch4 Calc";