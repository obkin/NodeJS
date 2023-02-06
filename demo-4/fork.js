process.on('message', (msg) => {
    if (msg === 'disconnect') {
        return process.disconnect();
    }
    console.log(`Fork-received: ${msg}`);
    process.send('Pong');
});

