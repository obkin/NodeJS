process.on('message', (msg) => {
    if (msg === 'disconnect') {
        return process.disconnect();
    }
    console.log(`From fork: ${msg}`);
    process.send('Pong.');
});

