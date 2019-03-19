const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1',()=>{
    console.log('이벤트1');
});

myEvent.on('event2',()=>{
    console.log('이벤트 2');
});

myEvent.on('event2',()=>{
    console.log('이벤트2 추가');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.once('event3', ()=>{
    console.log('이벤트 3');
});
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', ()=>{
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트5');
};
myEvent.on('event5',listener);
myEvent.removeListener('event5',listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));

/*
    on(이벤트명, 콜백) : 이벤트 이름과 이벤트 발생 시의 콜백을 연결해줍니다. 이렇게 연결하는 동작을 이벤트 리스닝이라고 합니다. event2처럼 이벤트 하나에 이벤트 여러 개를 달아줄 수 있습니다. 

    addListener(이벤트명, 콜백) : on과 기능이 같습니다. 

    emit(이벤트명) : 이벤트를 호출하는 메서드입니다. 이벤트 이름을 인자로 넣어주면 미리 등록해뒀던 이벤트 콜백이 실행됩니다. 

    once(이벤트명, 콜백) : 한번만 실행되는 이벤트입니다. myEvent.emit('event3')을 두 번 연속 호출했지만 콜백이 한 번만 실행됩니다. 

    removeAllListeners(이벤트명) : 이벤트에 연결된 모든 이벤트 리스너를 제거합니다. event4가 호출되기 전에 리스너를 제거했으므로 event4는 호출되지 않습니다. 

    removeListener(이벤트명, 리스너) : 이벤트에 연결된 리스너를 하나씩 제거합니다. 역시 event5의 콜백도 호출되지 않습니다. 

    off(이벤트명, 콜백) : 노드 10버전에서 추가된 메서드로, removeListener와 기능이 같습니다. 

    listenerCount(이벤트명) : 현재 리스너가 몇개 연결되어 있는지 확인합니다. 
*/