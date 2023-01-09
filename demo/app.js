console.log('Init');

setTimeout(() => {
    console.log(performance.now(), '- Timeout - 0sec');
}, 0);

console.log('Final');

