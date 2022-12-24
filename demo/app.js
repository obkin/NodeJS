const EventEmitter = require('events');

const myEmitter = new EventEmitter();


myEmitter.on('msg', (data) => {
    console.log(`Отримав: ${data}`);
});

myEmitter.on('msg', (data) => {
    console.log(data);
});

myEmitter.emit('msg', 'Привіт, як тебе звати?');

myEmitter.once('once', () => {
    console.log('Я визвався тільки один раз :)');
});

console.log(myEmitter.listeners('msg'));

myEmitter.emit('once');
myEmitter.emit('once');

console.log(myEmitter.listenerCount('msg'));

console.log(myEmitter.listenerCount('once'));



/*

console.log(myEmitter.getMaxListeners());

myEmitter.setMaxListeners(1);

console.log(myEmitter.getMaxListeners());

*/