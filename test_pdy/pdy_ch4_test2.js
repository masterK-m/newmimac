var Calc = require("./ch4_calc_module");
var calc = new Calc();
calc.emit("stop");
console.log(Calc.title);
console.log(calc.add(1,2));