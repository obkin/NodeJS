const { spawn } = require('child_process');

const childProcess = spawn('ls');

childProcess.stdout.on('data', (data) => {
    console.log(`out: ${data}`);
});

childProcess.stderr.on('error', (err) => {
    console.log(`out: ${err}`);
});

childProcess.on('exit', (code) => {
    console.log(`Output code: ${code}`);
});

