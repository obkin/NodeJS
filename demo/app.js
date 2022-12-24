const EventEmitter = require('events');

const myEmitter = new EventEmitter();

/* 

function logDbConnection() {
    console.log('DB connected');
}

myEmitter.on('connected', logDbConnection);

myEmitter.emit('connected');

myEmitter.off('connected', logDbConnection);

myEmitter.emit('connected');

*/

myEmitter.on('msg', (data) => {
    console.log(`Отримано: ${data}`);
});

myEmitter.emit('msg', 'Як справи?');

myEmitter.off('msg', (data) => {
    console.log(`Отримано: ${data}`);
});