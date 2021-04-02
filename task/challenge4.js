const events = require("events");
const emmit = new events.EventEmitter();

function createEmitter(onOpen, onClose) {
    emmit.on('open',onOpen);
    emmit.on('close',onClose);

}
function opened(emitter) {
    emmit.emit('open', emitter);

}
function closed(emitter) {
    emmit.emit('close', emitter);
}
let emitter = createEmitter(
() => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);
module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;

/**
 * Reference : 
 * 1) https://www.youtube.com/watch?v=l20MBBFZAmA
 * 2) https://www.youtube.com/watch?v=9ErAONqE6HE
 * 3) http://www.sukmasaputra.com/2018/09/memahami-events-eventemitter-dalam.html#:~:text=Node.js%20Events%20EventEmitter%20adalah,berkala%20disebut%20events%20yang%20menyebabkan
 */
