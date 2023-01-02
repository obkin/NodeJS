const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('connected', () => {
    console.log('DB was connected.');
});

myEmitter.emit('connected');
    console.log(myEmitter.listenerCount('connected'));
    console.log(myEmitter.eventNames());

myEmitter.removeAllListeners('connected');
    console.log(myEmitter.listenerCount('connected'));


myEmitter.once('error', (err) => {
    if (err) {
        console.log(`ERROR: ${err.message}`);
    } else {
        console.log('Everything us OK!');
    }
});

myEmitter.emit('error');