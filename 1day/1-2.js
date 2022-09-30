//Testdome


const events = require("events");

function createEmitter(onOpen, onClose) {
    const myEmitter = new events();
    myEmitter.once('open', onOpen); // 이벤트를 만드는 방법으로 on, addListener, once가 있는데 once의 경우 콜백이 단 한번만 실행됨
    myEmitter.once('close', onClose);
    return myEmitter
}

function opened(emitter) {
    emitter.emit('open')
}
function closed(emitter) {
    emitter.emit('close')
}

let emitter = createEmitter(
    () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);


module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;