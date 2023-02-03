const { Worker } = require('worker_threads');

function compute(array) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array: array
            }
        });

        worker.on('message', (msg) => {
            console.log(worker.threadId);
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        });

        worker.on('exit', () => {
            console.log('worker.js - finished');
        });
    });
}

async function main() {
    try {
        performance.mark('start');

        const res = await Promise.all([
            compute([14, 45, 64, 12, 55, 16]),
            compute([14, 45, 64, 12, 55, 16]),
            compute([14, 45, 64, 12, 55, 16]),
            compute([14, 45, 64, 12, 55, 16])
        ]);
        console.log(res);
    
        performance.mark('end');
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main'));
    } catch(error) {
        console.log(error.message);
    }
}

setTimeout(() => {
    console.log('Timeout - 2sec');
}, 2000);

main();

