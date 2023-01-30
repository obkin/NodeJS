const { parentPort, workerData } = require('worker_threads');
const factorial = require('./factorial'); 

const compute = ({ array }) => {
    const arr = [];
    for (let i = 0; i < 10_000_000; i++) {
        arr.push(i * i);
    }

    return array.map(el => factorial(el));
};

parentPort.postMessage(compute(workerData));

