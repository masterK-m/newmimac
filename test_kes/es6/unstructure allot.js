var candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy : function(){
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

console.log(count);


const candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
};


const {getCandy, status:{count}} = candyMachine;

console.log(count);


// 배열 비 구조화
var array = ['node.js', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[array.length-1];

const array = ['node.js', {}, 10, true];
const [node, obj, , bool] = array; 