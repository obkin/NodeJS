const { fork } = require('child_process');

const forkProcess = fork('fork.js');

forkProcess.on('message', (msg) => {
    console.log(`Main-received: ${msg}`);
});

forkProcess.on('exit', (code) => {
    console.log(`Output code: ${code}`);
});

forkProcess.send('Ping');
forkProcess.send('disconnect');
