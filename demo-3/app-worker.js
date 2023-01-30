const { Worker } = require('worker_threads');

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
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
            console.log('worker.js - завершив роботу.');
        });
    });
};  
 
const main = async () => {
    try {
        performance.mark('start');

        const result = await Promise.all([
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50]),
            compute([25, 20, 19, 48, 30, 50])
        ]);
        console.log(result);
    
        performance.mark('end');
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main').pop());
    } catch(e) {
        console.error(`Error: ${e.message}.`);
    }
}; 

setTimeout(() => {
    console.log('Timeout - 1sec.');
}, 1000);

main();

