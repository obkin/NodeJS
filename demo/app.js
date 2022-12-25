const EventEmitter = require('events');
const myEmitter = new EventEmitter();

/*

async function myEvents() {

    await myEmitter.on('msg', (data) => {
        console.log(`Отримано: ${data}`)
    });
    
    await myEmitter.prependListener('msg', (data) => {
        console.log('We used prepend')
    });
    
    
    await myEmitter.emit('msg', 'Hi, Yan!');
    
    await myEmitter.off('msg', (data) => {
        console.log(`Отримано: ${data}`)
    });

    await myEmitter.on('connected', () => {
        console.log('DB was connected');
    });
    
    await myEmitter.emit('connected');
}

myEvents();

// myEmitter.setMaxListeners(3);
// console.log('Max listeners: ' + myEmitter.getMaxListeners());
// console.log('Current num of listeners: ' + myEmitter.listenerCount('msg'));

// console.log(myEmitter.listeners('msg'));

console.log(myEmitter.eventNames());

myEmitter.on('error', (err) => {
    console.log(`Сталась помилка: ${err.message}`);
});

myEmitter.emit('error', new Error('BOOOM!'));


*/

const target = new EventTarget();

const logTarget = () => {
    console.log('Connected to target');
};

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));

