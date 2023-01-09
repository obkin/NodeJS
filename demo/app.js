const fs = require('fs');

console.log('Init');

setTimeout(() => {
    console.log(performance.now(), '- Timeout - 0sec');

    Promise.resolve().then(() => {
        console.log('Promise2');
    });
    process.nextTick(() => console.log('nextTick2'));
}, 100);

setImmediate(() => {
    console.log('Immediate');
});

fs.readFile(__filename, () => {
    console.log('File readed');
});

setTimeout(() => {
    for (let i = 0; i < 10_000_000_00; i++) {

    }
    console.log('done!');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise');
});

process.nextTick(() => console.log('nextTick'));

console.log('Final');

