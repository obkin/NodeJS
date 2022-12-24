const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('msg', (data) => {
    console.log(`Отримав: ${data}`);
});

myEmitter.emit('msg', 'Привіт, як тебе звати?');