const perf_hooks = require('perf_hooks');

test = perf_hooks.performance.timerify(test);

const PerformanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
    // console.log(items.getEntries());
    const entry = items.getEntriesByName('slow').pop();
    console.log(`${entry.name}: ${Math.floor(entry.duration)}мс.`);

    const testEntry = items.getEntriesByType('function').pop();
    console.log(`${testEntry.name}: ${Math.floor(testEntry.duration)}мс.`)
    observer.disconnect();
});

PerformanceObserver.observe({ entryTypes: ['measure', 'function'] });

function test() {
    const arr = [];

    for (let i = 0; i < 10_000_000; i++) {
        arr.push(i * i);
    }
}

test();

function slow() {
    performance.mark('start');
    const arr = [];
     
    for (let i = 0; i < 10_000_000; i++) {
        arr.push(i * i);
    }
    performance.mark('end');
    performance.measure('slow', 'start', 'end');
}

slow();









/*

function slow() {
    performance.mark('start');

    const arr = [];

    for (let i = 0; i < 10_000_000; i++) {
        arr.push(i * i);
    }

    performance.mark('end');
    performance.measure('slow', 'start', 'end');
    const measure = performance.getEntriesByName('slow');
    console.log(getInt(measure.pop().duration));
}

slow();


function getInt(num) {
    return Math.floor(num);
}

*/