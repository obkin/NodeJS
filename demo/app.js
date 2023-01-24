function slow() {
    performance.mark('start');
    const arr = [];

    for (let i = 0; i < 10_000_000; i++) {
        arr.push(i * i);
    }
    performance.mark('end');
    performance.measure('slow', 'start', 'end');
    console.log(performance.getEntriesByName('slow'));
}

slow();

