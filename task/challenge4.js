/*
The createEmitter function should create a new EventEmitter and register "open" and "close" event
listeners. the callbacks for those events should be onOpen and onCLose arguments, respectively.
The opened and closed methods should raise the "open" and "close" events on the EventEmitter they
will receive as emitter arguments.
The callbacks should be invoked only once per emitter
For example, after executing the following code , it should print "Opened!" and then "Closed!":
let emitter = createEmitter(

() => console.log("Opened!"), () => console.log("Closed!")

);
Start code here :
*/

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