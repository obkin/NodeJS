const { performance, PerformanceObserver } = require('perf_hooks');
const { Worker } = require('worker_threads');
const { fork } = require('child_process');

const performanceObserver = new PerformanceObserver((items, observer) => {
    items.getEntries().forEach(entry => {
        if (entry) {
            console.log(`${entry.name}: ${Math.floor(entry.duration)}мс`);
        } else {
            performance.clearMarks();
            performance.clearMeasures();
            observer.disconnect();
        }
    });
});

performanceObserver.observe({ entryTypes: ['measure'] });

const workerFunction = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        });

        worker.on('message', (msg) => {
            resolve(msg);
        });

        worker.on('error', (err) => {
            reject(err);
        });
    });
};

// ------------

const forkFunction = (array) => {
    return new Promise((resolve, reject) => {
        const forkProcess = fork('./fork.js');

        forkProcess.send({ array });

        forkProcess.on('message', (msg) => {
            resolve(msg);
        });

        forkProcess.on('error', (err) => {
            reject(err);
        });
    });
};

// ------------

const main = async () => {
    performance.mark('workerStart');
        await workerFunction([25, 19, 48, 30]);
    performance.mark('workerEnd');
    performance.measure('workerMeasure', 'workerStart', 'workerEnd');

    performance.mark('forkStart');
        await forkFunction([25, 19, 48, 30]);
    performance.mark('forkEnd');
    performance.measure('forkMeasure', 'forkStart', 'forkEnd');
};

main();

