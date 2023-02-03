const factorial = require('./factorial');

function compute(array) {
    const arr = [];
    for (let i = 0; i < 50_000_000; i++) {
        arr.push(i * i);
    }

    return array.map(el => factorial(el));
}

function main() {
    performance.mark('start');

    const res = [
        compute([14, 45, 64, 12, 55, 16]),
        compute([14, 45, 64, 12, 55, 16]),
        compute([14, 45, 64, 12, 55, 16]),
        compute([14, 45, 64, 12, 55, 16])
    ];
    console.log(res);

    performance.mark('end');
    performance.measure('main', 'start', 'end');
    console.log(performance.getEntriesByName('main'));
}

main();

