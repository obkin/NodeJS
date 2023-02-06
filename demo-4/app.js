const { fork } = require('child_process');

const forkProcess = fork('fork.js');

forkProcess.on('message', (msg) => {
    console.log(`Fork's response: ${msg}`)
});

forkProcess.on('exit', (code) => {
    console.log(`Fork exited. Code: ${code}`);
});

forkProcess.send('Ping');
forkProcess.send('disconnect');

