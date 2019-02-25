//EventEmitter 클래스를 가져온다
const EventEmitter = require('events');

//이미터를 생성한다.
const customEmitter = new EventEmitter();

setInterval(() => {
    customEmitter.emit('tick');
},500);

//exports.tick = customEmitter;
//모듈화 합니다
module.exports = customEmitter;
